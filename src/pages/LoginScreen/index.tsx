import React from 'react';

import LoginForm from './components/LoginForm';
import { CustomContainer, CustomContent, Title } from './styles';

const LoginScreen: React.FC = () => {
  return (
    <CustomContainer>
      <CustomContent>
        <Title>Pokedex</Title>
        <LoginForm />
      </CustomContent>
    </CustomContainer>
  );
};

export default LoginScreen;
