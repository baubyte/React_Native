import React from 'react';
import {StyleSheet, View} from 'react-native';

export const ItemSeparator = () => {
  return <View style={{...internalStyles.itemSeparator}} />;
};
const internalStyles = StyleSheet.create({
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: 'rgba(0, 0, 0,0.1)',
  },
});
