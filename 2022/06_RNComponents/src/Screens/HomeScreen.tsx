import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {FlatListMenuItem} from '../Components/FlatListMenuItem';
import {HeaderTitle} from '../Components/HeaderTitle';
import {ItemSeparator} from '../Components/ItemSeparator';
import {menuItems} from '../Data/MenuItems';
import {styles} from '../Theme/appTheme';

export const HomeScreen = () => {
  return (
    <View style={(homeStyles.container, styles.globalMargin)}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.component}
        ListHeaderComponent={<HeaderTitle title="Opciones de Menú" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerListContainer: {
    marginBottom: 20,
  },
  itemSeparator: {
    borderBottomWidth: 1,
    opacity: 0.4,
    marginVertical: 8,
  },
});
