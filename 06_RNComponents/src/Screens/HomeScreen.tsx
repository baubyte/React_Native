import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatListMenuItem} from '../Components/FlatListMenuItem';
import {menuItems} from '../Data/MenuItems';
import {styles} from '../Theme/appTheme';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const renderListHeader = () => {
    return (
      <View style={{...homeStyles.headerListContainer, marginTop: top + 20}}>
        <Text style={styles.title}>Opciones de Menú</Text>
      </View>
    );
  };
  const ItemSeparator = () => {
    return <View style={homeStyles.itemSeparator} />;
  };
  return (
    <View style={(homeStyles.container, styles.globalMargin)}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.component}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={ItemSeparator}
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
