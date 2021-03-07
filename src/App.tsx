import 'react-native-gesture-handler';
import React from 'react';

import { AuthProvider } from './hooks/auth';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
