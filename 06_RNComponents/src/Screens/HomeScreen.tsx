import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

interface MenuItem {
  name: string;
  iconName: string;
  component: string;
}

const menuItems = [
  {
    name: 'Animation 101',
    iconName: 'cube-outline',
    component: 'Animation101Screen',
  },
];

export const HomeScreen = () => {
  const renderMenuItem = (menuItem: MenuItem) => {
    return (
      <View>
        <Text>
          {menuItem.iconName} - {menuItem.name}
        </Text>
      </View>
    );
  };

  return (
    <View style={homeStyles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => renderMenuItem(item)}
        keyExtractor={item => item.component}
      />
    </View>
  );
};
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
