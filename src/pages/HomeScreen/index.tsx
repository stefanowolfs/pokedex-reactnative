import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { useAuth } from '../../hooks/auth';
import TransparentButton from '../../components/TransparentButton';
import { usePokemon } from '../../hooks/pokemon';

const HomeScreen: React.FC = () => {
  const { logout } = useAuth();
  const { downloadPokemons } = usePokemon();

  useEffect(() => {
    downloadPokemons();
  }, [downloadPokemons]);
  return (
    <View>
      <Text>HomeScreen</Text>
      <TransparentButton title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
