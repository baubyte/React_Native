import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../Theme/appTheme';
/* import {StackNavigator} from './StackNavigator'; */
import {SettingsScreen} from '../Screens/SettingsScreen';
import {Tabs} from './Tabs';
/* import {createStackNavigator} from '@react-navigation/stack'; */

const Drawer = createDrawerNavigator();
/* const Stack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
}; */

export const SideMenu = () => {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <InternalMenu {...props} />}
      screenOptions={{
        drawerType: width >= 1200 ? 'permanent' : 'front',
        drawerPosition: 'left',
        drawerStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}>
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen
        name="Tabs"
        component={Tabs}
        options={{headerTitle: 'Navegación'}}
      />
      <Drawer.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{headerTitle: 'Ajustes'}}
      />
    </Drawer.Navigator>
  );
};
const InternalMenu = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Contenedor Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
          }}
          style={styles.avatar}
        />
      </View>
      {/* Opciones del Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Tabs')}>
          <Text style={styles.menuText}>Navegación</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('SettingsScreen')}>
          <Text style={styles.menuText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
