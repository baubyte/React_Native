import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Background = () => {
  return <View style={internalStyles.container} />;
};
const internalStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: '#4E4BCF',
    top: -250,
    width: 1200,
    height: 1450,
    transform: [
      {
        rotate: '-70deg',
      },
    ],
  },
});
