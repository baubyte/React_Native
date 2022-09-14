import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BlackButton} from '../Components/BlackButton';
import {PermissionsContext} from '../Context/Permission/PermissionsContext';

export const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionsContext);
  return (
    <View style={internalStyles.container}>
      <Text style={internalStyles.title}>
        Es necesario el uso del GPS para poder usar esta aplicación.
      </Text>
      <BlackButton title="Permiso" onPress={askLocationPermission} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
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
    width: 250,
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
