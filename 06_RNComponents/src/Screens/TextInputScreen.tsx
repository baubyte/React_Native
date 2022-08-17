import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {HeaderTitle} from '../Components/HeaderTitle';
import {styles} from '../Theme/appTheme';

export const TextInputScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Text Inputs" />
      <TextInput style={internalStyles.input} />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
