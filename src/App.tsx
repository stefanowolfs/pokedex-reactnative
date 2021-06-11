import 'react-native-gesture-handler';
import React from 'react';

import { AppProvider } from './hooks/app';
import { AuthProvider } from './hooks/auth';

import Routes from './routes';
import ErrorBoundary from './pages/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </AppProvider>
    </ErrorBoundary>
  );
};

export default App;
