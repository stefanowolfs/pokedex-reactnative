import React from 'react';
import { Text, View } from 'react-native';

import { useAuth } from '../../hooks/auth';
import TransparentButton from '../../components/TransparentButton';

const HomeScreen: React.FC = () => {
  const { logout } = useAuth();
  return (
    <View>
      <Text>HomeScreen</Text>
      <TransparentButton title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
