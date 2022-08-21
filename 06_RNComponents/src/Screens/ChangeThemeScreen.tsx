import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {styles} from '../Theme/appTheme';

export const ChangeThemeScreen = () => {
  const {setDarkTheme} = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Cambiar Tema" />
      <TouchableOpacity
        onPress={setDarkTheme}
        activeOpacity={0.8}
        style={internalStyles.button}>
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
