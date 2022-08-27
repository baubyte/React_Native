import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {ThemeContext} from '../Context/themeContext/ThemeContext';
import {styles} from '../Theme/appTheme';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Cambiar Tema" />
      <View style={internalStyles.buttonContainer}>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            ...internalStyles.button,
            backgroundColor: colors.primary,
          }}>
          <Text style={internalStyles.buttonText}>Light</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            ...internalStyles.button,
            backgroundColor: colors.primary,
          }}>
          <Text style={internalStyles.buttonText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const internalStyles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});
