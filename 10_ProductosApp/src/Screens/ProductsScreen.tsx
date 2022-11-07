import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ItemSeparator} from '../Components/ItemSeparator';
import {ProductContext} from '../Context/Product/ProductContext';
import {StackScreenProps} from '@react-navigation/stack';
import {ProductsStackParams} from '../Navigation/ProductsNavigation';

interface Props
  extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> {}

export const ProductsScreen = ({navigation}: Props) => {
  const {products, loadProducts} = useContext(ProductContext);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.7}
          style={internalStyles.buttonAddProduct}
          onPress={() => navigation.navigate('ProductScreen', {})}>
          <Text>Agregar</Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  const loadProductsFromBackend = async () => {
    setRefreshing(true);
    await loadProducts();
    setRefreshing(false);
  };
  //TODO: Pull to refresh
  return (
    <View style={internalStyles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={loadProductsFromBackend}
            progressViewOffset={10}
            progressBackgroundColor="white"
            style={{backgroundColor: 'black'}} // iOS
            titleColor="black" // iOS
            title="Loading..." // iOS
          />
        }
        data={products}
        keyExtractor={product => product._id}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() =>
              navigation.navigate('ProductScreen', {
                id: item._id,
                name: item.nombre,
              })
            }>
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
  buttonAddProduct: {
    marginRight: 10,
  },
});
