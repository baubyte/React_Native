import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
      <Text style={styles.box1}>Caja 1</Text>
      <Text style={styles.box2}>Caja 2</Text>
      <Text style={styles.box3}>Caja 3</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
    flexDirection: 'row', //column es por defecto
    justifyContent: 'center',
    //alignItems: 'center',
    //flexWrap: 'wrap',
  },
  box1: {
    //flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'center', //para sobrescribir un comportamiento del padre
  },
  box2: {
    // flex: 2,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-start', //para sobrescribir un comportamiento del padre
  },
  box3: {
    // flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
    //alignSelf: 'flex-end', //para sobrescribir un comportamiento del padre
  },
});
