import React, { createContext, useContext, useEffect, useState } from 'react';
import { Connection, getConnectionManager } from 'typeorm';

import { mountConnection } from '../services/sqlite/config';

import LoadingView from '../components/LoadingView';

interface AppContextData {
  connection: Connection;
}

const AppContext = createContext<AppContextData>({} as AppContextData);

const AppProvider: React.FC = ({ children }) => {
  const [connection, setConnection] = useState({} as Connection);

  useEffect(() => {
    const loadingConnection = async (): Promise<void> => {
      try {
        const newConnection = await mountConnection();
        setConnection(newConnection);
      } catch (err) {
        if (err.name === 'AlreadyHasActiveConnectionError') {
          const existentConn = getConnectionManager().get('default');
          setConnection(existentConn);
        }
      }
    };
    loadingConnection();
  }, []);

  return (
    <AppContext.Provider value={{ connection }}>
      {connection.isConnected ? children : <LoadingView />}
    </AppContext.Provider>
  );
};

function useApp(): AppContextData {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}

export { AppProvider, useApp };
