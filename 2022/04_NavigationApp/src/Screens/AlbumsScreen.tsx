import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../Context/AuthContext/AuthContext';
import {styles} from '../Theme/appTheme';

export const AlbumsScreen = () => {
  const {
    logout,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>AlbumsScreen</Text>
      {isLoggedIn && <Button title="Cerrar Sesión" onPress={logout} />}
    </View>
  );
};
