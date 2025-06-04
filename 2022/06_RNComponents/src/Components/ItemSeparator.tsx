import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemeContext} from '../Context/themeContext/ThemeContext';

export const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);
  return (
    <View
      style={{...internalStyles.itemSeparator, borderColor: dividerColor}}
    />
  );
};
const internalStyles = StyleSheet.create({
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});
