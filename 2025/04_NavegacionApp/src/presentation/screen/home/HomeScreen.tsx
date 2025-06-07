import { View } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HamburgerMenu, PrimaryButton } from '../../components/shared';
import type { RootStackParams } from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <HamburgerMenu />
      <PrimaryButton label="Ir a Productos" onPress={() => navigation.navigate('Products')} />
      <PrimaryButton label="Ir a Configuración" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};
