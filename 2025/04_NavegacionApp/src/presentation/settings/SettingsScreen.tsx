import { View, Text } from 'react-native';
import { PrimaryButton } from '../components/shared';
import { globalStyles } from '../theme/theme';
import { StackActions, useNavigation } from '@react-navigation/native';


export const SettingsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Configuración</Text>
      <PrimaryButton label="Regresar" onPress={() => navigation.goBack()} />
      <PrimaryButton label="Regresar al Home" onPress={() => navigation.dispatch(StackActions.popToTop())} />
    </View>
  );
};
