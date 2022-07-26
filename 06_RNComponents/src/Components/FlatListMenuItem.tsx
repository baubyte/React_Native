import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../Interfaces/appInterfaces';
interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  return (
    <View style={styles.container}>
      <Icon name={menuItem.iconName} color="gray" size={24} />
      <Text style={styles.itemText}>{menuItem.name}</Text>
      <Icon name="chevron-forward-outline" color="gray" size={24} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
