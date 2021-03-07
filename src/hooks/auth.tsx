import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

import LoginFormValues from '../@types/loginFormValues';
import * as AuthAsyncStorage from '../services/asyncStorage/auth';

interface AuthContextData {
  loading: boolean;
  token: string;
  login(loginInfo: LoginFormValues): Promise<void>;
  logout(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string>(null);

  const logout = useCallback(async (): Promise<void> => {
    setLoading(true);
    setToken(null);
    await AuthAsyncStorage.removeToken();
    await setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const login = useCallback(
    async (formValues: LoginFormValues): Promise<void> => {
      setLoading(true);
      // TODO: add some authentication with some API in the future
      console.log('new User', formValues);
      const newToken = 'Bearer some.token';
      setToken(newToken);
      await AuthAsyncStorage.setToken(newToken);
      await setTimeout(() => {
        setLoading(false);
      }, 300);
    },
    [],
  );

  useEffect(() => {
    const restoreSession = async (): Promise<void> => {
      const newToken: string | null = await AuthAsyncStorage.getToken();
      if (newToken) {
        await setTimeout(() => {
          setToken(newToken);
          setLoading(false);
        }, 300);
      }
    };
    restoreSession();
  }, []);

  const contextValues = useMemo(
    () => ({
      loading,
      token,
      login,
      logout,
    }),
    [loading, token, login, logout],
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
