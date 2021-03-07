import React from 'react';

import { useAuth } from '../../hooks/auth';

import LoginForm from './components/LoginForm';
import LoadingView from '../../components/LoadingView';
import { CustomContainer, CustomContent } from './styles';

const LoginScreen: React.FC = () => {
  const { loading } = useAuth();

  return (
    <CustomContainer>
      <CustomContent>
        {!loading ? <LoginForm /> : <LoadingView />}
      </CustomContent>
    </CustomContainer>
  );
};

export default LoginScreen;
