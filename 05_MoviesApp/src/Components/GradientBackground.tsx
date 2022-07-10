import React from 'react';
import {StyleSheet, View} from 'react-native';
interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  return <View style={gradientBackgroundStyles.container}>{children}</View>;
};
const gradientBackgroundStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#084F6A',
  },
});
