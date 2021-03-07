import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAuth } from '../hooks/auth';
import { pathRoutes } from './pathRoutes';

import LoadingScreen from '../pages/LoadingScreen';
import LoginScreen from '../pages/LoginScreen';
import HomeScreen from '../pages/HomeScreen';
import PokemonDetailsScreen from '../pages/PokemonDetailsScreen';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const { token, loading } = useAuth();

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      {!token ? (
        <Stack.Navigator>
          <Stack.Screen name={pathRoutes.login} component={LoginScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name={pathRoutes.home} component={HomeScreen} />
          <Stack.Screen
            name={pathRoutes.pokemonDetails}
            component={PokemonDetailsScreen}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Routes;
