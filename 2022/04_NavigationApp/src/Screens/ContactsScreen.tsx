import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../Context/AuthContext/AuthContext';
import {styles} from '../Theme/appTheme';

export const ContactsScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>ContactsScreen</Text>
      {!isLoggedIn && <Button title="Iniciar Sesión" onPress={signIn} />}
    </View>
  );
};
