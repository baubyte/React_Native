import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Tarea9Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
      <View style={styles.blueBox} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#284258',
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    top: 100,
    borderColor: 'white',
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#D0A23B',
    borderWidth: 10,
    left: 100,
    borderColor: 'white',
  },
  blueBox: {
    width: 100,
    height: 100,
    backgroundColor: '#28C4D9',
    borderWidth: 10,
    borderColor: 'white',
  },
});
