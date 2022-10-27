import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductsScreen} from '../Screens/ProductsScreen';
import {ProductScreen} from '../Screens/ProductScreen';

export type ProductsStackParams = {
  ProductsScreen: undefined;
  ProductScreen: {id?: string; name?: string};
};

const Stack = createStackNavigator<ProductsStackParams>();

export const ProductsNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{title: 'Productos'}}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};
