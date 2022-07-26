import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Animation101Screen = () => {
  return (
    <View style={internalStyles.container}>
      <View style={internalStyles.purpleBox} />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
