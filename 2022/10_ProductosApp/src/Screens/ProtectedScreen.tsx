import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AuthContext} from '../Context/Auth/AuthContext';

export const ProtectedScreen = () => {
  const {user, token, logout} = useContext(AuthContext);
  return (
    <View style={internalStyles.container}>
      <Text style={internalStyles.title}>Protected Screen</Text>
      <Button title="Lgout" color="#5856D6" onPress={logout} />
      <Text>{JSON.stringify(user, null, 5)}</Text>
      <Text>{token}</Text>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
