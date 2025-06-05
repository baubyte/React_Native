import { View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared';


export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <PrimaryButton label="Ir a Productos" onPress={() => navigation.navigate('Products' as never)} />
      <PrimaryButton label="Ir a Configuración" onPress={() => navigation.navigate('Settings' as never)} />
    </View>
  );
};
