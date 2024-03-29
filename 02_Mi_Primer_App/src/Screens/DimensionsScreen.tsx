import React from 'react';
import {
  //Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
//const {width, height} = Dimensions.get('window');

export const DimensionsScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.purpleBox, width: width * 0.5}} />
        <View style={styles.orangeBox} />
      </View>
      {/* Para Poner debajo */}
      <Text style={styles.title}>
        Width: {width}, Height: {height}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    //width: '50%',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: '#D0A23B',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
});
