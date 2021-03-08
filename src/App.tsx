import 'react-native-gesture-handler';
import React from 'react';

import { AppProvider } from './hooks/app';
import { AuthProvider } from './hooks/auth';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </AppProvider>
  );
};

export default App;
