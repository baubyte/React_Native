import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={internalStyles.container}>
      <ActivityIndicator size={50} color="black" />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
