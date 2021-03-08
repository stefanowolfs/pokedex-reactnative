import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PokemonProvider } from '../hooks/pokemon';
import { useAuth } from '../hooks/auth';
import { pathRoutes } from './pathRoutes';

import LoadingScreen from '../pages/LoadingScreen';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import PokemonDetailsScreen from '../pages/PokemonDetailsScreen';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {!user ? (
        <Stack.Navigator>
          <Stack.Screen name={pathRoutes.login} component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <PokemonProvider>
          <Stack.Navigator>
            <Stack.Screen name={pathRoutes.home} component={HomeScreen} />
            <Stack.Screen
              name={pathRoutes.pokemonDetails}
              component={PokemonDetailsScreen}
            />
          </Stack.Navigator>
        </PokemonProvider>
      )}
    </NavigationContainer>
  );
};

export default Routes;
