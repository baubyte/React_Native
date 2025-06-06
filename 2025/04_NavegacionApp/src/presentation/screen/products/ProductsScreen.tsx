
import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import type { RootStackParams } from '../../routes/StackNavigator';
const products = [
  { id: 1, name: 'Product 1', price: 10.0 },
  { id: 2, name: 'Product 2', price: 20.0 },
  { id: 3, name: 'Product 3', price: 30.0 },
  { id: 4, name: 'Product 4', price: 40.0 },
  { id: 5, name: 'Product 5', price: 50.0 },
  { id: 6, name: 'Product 6', price: 60.0 },
  { id: 7, name: 'Product 7', price: 70.0 },
  { id: 8, name: 'Product 8', price: 80.0 },
  { id: 9, name: 'Product 9', price: 90.0 },
  { id: 10, name: 'Product 10', price: 100.0 },
];
export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product', { id: item.id, name: item.name, price: item.price })}
            label={`${item.name} - $${item.price.toFixed(2)}`}
          />
        )}
      />
      <Text style={globalStyles.title}>Ajustes</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Ajustes"
      />
    </View>
  );
};
