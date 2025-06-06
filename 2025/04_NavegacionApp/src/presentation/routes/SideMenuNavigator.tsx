import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../profile/ProfileScreen';

type RootDrawerParams = {
    StackNavigator: undefined;
    Profile: undefined;
};
const Drawer = createDrawerNavigator<RootDrawerParams>();

export const SideMenuNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
        </Drawer.Navigator>
    );
};
