import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

import User from '../@types/user';
import LoginFormValues from '../@types/loginFormValues';
import UserRepository from '../services/sqlite/repository/userRepository';
import { UserEntity } from '../services/sqlite/entity/user.entity';

import UnauthorizedCredentials from '../utils/exceptions/UnauthorizedCredentials';
import { encryptWithSha256 } from '../utils/cryptography';

interface AuthContextData {
  loading: boolean;
  user: User;
  login(loginInfo: LoginFormValues): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>(null);

  const validateUserPassword = async (
    userToTest: User,
    password: string,
  ): Promise<boolean> => {
    const encryptedPassword = await encryptWithSha256(password);
    return userToTest.password === encryptedPassword;
  };

  const logout = useCallback(async (): Promise<void> => {
    setLoading(true);
    const userRepo = new UserRepository();
    await userRepo.findByIdAndInactivate(user.id);
    setUser(null);
    setLoading(false);
  }, [user]);

  const login = useCallback(
    async (formValues: LoginFormValues): Promise<void> => {
      try {
        setLoading(true);
        const userRepo = new UserRepository();
        const existentUser: User = await userRepo.findByUsername(
          formValues.username,
        );

        if (existentUser) {
          const isLoginValid: boolean = await validateUserPassword(
            existentUser,
            formValues.password,
          );
          if (!isLoginValid) throw new UnauthorizedCredentials();
          setUser(existentUser);
          setLoading(false);
          return;
        }

        const encryptedPassword = await encryptWithSha256(formValues.password);
        const newUser = new UserEntity();
        newUser.username = formValues.username;
        newUser.password = encryptedPassword;
        newUser.active = true;
        userRepo.save(newUser);
        setUser(newUser);
        setLoading(false);
      } catch (err) {
        console.error('Login error:', err);
      }
    },
    [],
  );

  useEffect(() => {
    let isUnmounted = false;
    const restoreSession = async (): Promise<void> => {
      try {
        if (!isUnmounted) {
          const userRepo = new UserRepository();
          const activeUser: User = await userRepo.findByActiveEqualsTrue();
          if (activeUser) {
            setUser(activeUser);
          }
        }
        setLoading(false);
      } catch (e) {
        if (!isUnmounted) {
          throw e;
        }
      }
    };
    restoreSession();

    return () => {
      isUnmounted = true;
    };
  }, []);

  const contextValues = useMemo(
    () => ({
      loading,
      user,
      login,
      logout,
    }),
    [loading, user, login, logout],
  );

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
