import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';

export const ChangeThemeScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Cambiar Tema" />
      <TouchableOpacity activeOpacity={0.8} style={internalStyles.button}>
        <Text style={internalStyles.buttonText}>Light / Dark</Text>
      </TouchableOpacity>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#5856D6',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
