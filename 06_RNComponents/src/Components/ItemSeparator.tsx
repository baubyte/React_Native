import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ItemSeparator = () => {
  return <View style={internalStyles.itemSeparator} />;
};
const internalStyles = StyleSheet.create({
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});
