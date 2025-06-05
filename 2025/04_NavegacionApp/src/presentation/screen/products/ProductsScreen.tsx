
import { View, Text } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { PrimaryButton } from '../../components/shared';
import { useNavigation } from '@react-navigation/native';
const products = [
  { id: '1', name: 'Product 1', price: 10.0 },
  { id: '2', name: 'Product 2', price: 20.0 },
  { id: '3', name: 'Product 3', price: 30.0 },
];
export const ProductsScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Productos</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Product' as never)}
            label={`${item.name} - $${item.price.toFixed(2)}`}
          />
        )}
      />
      <Text style={globalStyles.title}>Ajustes</Text>
      <PrimaryButton
        onPress={() => navigation.navigate('Settings' as never)}
        label="Ajustes"
      />
    </View>
  );
};
