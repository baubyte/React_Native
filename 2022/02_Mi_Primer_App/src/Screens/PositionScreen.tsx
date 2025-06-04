import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //width: 400,
    //height: 400,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#28C4D9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    /*Es relativo al padre sino donde el padre lo
     * ubica desde ahi hace la correcciones
     */
    position: 'absolute',
    right: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#D0A23B',
    borderWidth: 10,
    borderColor: 'white',
    /*Es relativo al padre sino donde el padre lo
     * ubica desde ahi hace la correcciones
     */
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  greenBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    /*Es relativo al padre sino donde el padre lo
     * ubica desde ahi hace la correcciones
     */
    // position: 'absolute',
    // bottom: 0,
    // top: 0,
    // left: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
