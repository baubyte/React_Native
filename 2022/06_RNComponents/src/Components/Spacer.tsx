import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Spacer = () => {
  return <View style={styles.spacer} />;
};
const styles = StyleSheet.create({
  spacer: {
    flex: 1,
  },
});
