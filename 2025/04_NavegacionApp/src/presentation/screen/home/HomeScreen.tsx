import { View, Pressable } from 'react-native';
import { globalStyles } from '../../theme/theme';
import { DrawerActions, NavigationProp, useNavigation } from '@react-navigation/native';
import { PrimaryButton } from '../../components/shared';
import type { RootStackParams } from '../../routes/StackNavigator';
import { useEffect } from 'react';
import { Text } from 'react-native-gesture-handler';

const HeaderLeftButton = ({ onPress }: { onPress: () => void }) => (
  <Pressable onPress={onPress}>
    <Text>Menu</Text>
  </Pressable>
);

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const renderHeaderLeft = () => (
    <HeaderLeftButton onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft: renderHeaderLeft,
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={globalStyles.container}>
      <PrimaryButton label="Ir a Productos" onPress={() => navigation.navigate('Products')} />
      <PrimaryButton label="Ir a Configuración" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};
