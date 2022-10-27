import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ItemSeparator} from '../Components/ItemSeparator';
import {ProductContext} from '../Context/Product/ProductContext';

export const ProductsScreen = () => {
  const {products, loadProducts} = useContext(ProductContext);
  //TODO: Pull to refresh
  return (
    <View style={internalStyles.container}>
      <FlatList
        data={products}
        keyExtractor={product => product._id}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={internalStyles.productName}>{item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
const internalStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  productName: {
    fontSize: 20,
  },
});
