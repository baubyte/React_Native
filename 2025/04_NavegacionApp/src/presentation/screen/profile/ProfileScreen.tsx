import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PrimaryButton } from '../../components/shared';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <View style={{...styles.container, paddingTop: top }}>
      <Text style={styles.title}>Profile Screen</Text>
      <PrimaryButton
        label="Abrir Menú"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    marginBottom: 10,
  },
});
