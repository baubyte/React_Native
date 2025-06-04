import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Tarea6Screen = () => {
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
    //flexDirection: 'row',
  },
  purpleBox: {
    flex: 2,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
  },
  orangeBox: {
    flex: 2,
    height: 100,
    backgroundColor: '#D0A23B',
    borderWidth: 10,
    borderColor: 'white',
  },
  blueBox: {
    flex: 4,
    height: 100,
    backgroundColor: '#28C4D9',
    borderWidth: 10,
    borderColor: 'white',
  },
});
