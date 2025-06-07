import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
//import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screen/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

type RootDrawerParams = {
    StackNavigator: undefined;
    Profile: undefined;
    Tabs: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParams>();

const BonfireDrawerIcon = ({ color }: { color: string }) => <IonIcon name="bonfire-outline" color={color} />;
const PersonCircleDrawerIcon = ({ color }: { color: string }) => <IonIcon name="person-circle-outline" color={color} />;

export const SideMenuNavigator = () => {
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            screenOptions={{
                headerShown: false,
                drawerType: dimensions.width >= 700 ? 'permanent' : 'slide',
                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: globalColors.white,
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: {
                    paddingHorizontal: 20,
                    borderRadius: 100,
                },
                drawerStyle: {
                    width: 250,
                },
            }}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen options={{ drawerIcon: BonfireDrawerIcon }} name="Tabs" component={BottomTabsNavigator} />
            <Drawer.Screen options={{ drawerIcon: PersonCircleDrawerIcon }} name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};
const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView {...props}>
            <View
                style={styles.drawerHeader}
            />
            <DrawerItemList {...props} />
            <Text>Custom Drawer Content</Text>
        </DrawerContentScrollView>
    );
};
const styles = StyleSheet.create({
    drawerHeader: {
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50,
    },
});
