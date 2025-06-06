import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
import type { RootStackParams } from '../../routes/StackNavigator';
import { globalStyles } from '../../theme/theme';
import { useEffect } from 'react';

export const ProductScreen = () => {
  const params  = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const { id, name, price } = params;
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  useEffect(() => {
    navigation.setOptions({
      title: `Product ${id}`,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 24,
      },
    });
  }, []);
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Product Screen</Text>
      <Text style={globalStyles.subtitle}>ID: {id}</Text>
      <Text style={globalStyles.subtitle}>Name: {name}</Text>
      <Text style={globalStyles.subtitle}>Price: ${price.toFixed(2)}</Text>
    </View>
  );
};
