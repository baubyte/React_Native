import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const WhiteLogo = () => {
  return (
    <View style={internalStyles.container}>
      <Image
        source={require('../assets/react-logo-white.png')}
        style={internalStyles.image}
      />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 100,
  },
});
