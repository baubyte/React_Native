import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screen/profile/ProfileScreen';
import { AboutScreen } from '../about/AboutScreen';
import { HamburgerMenu } from '../components/shared';

const Tab = createMaterialTopTabNavigator();

//deberia llevar un nombre mas descriptivo por ejemplo ProductsTabsNavigator
export const TopTabsNavigator = () => {
    return (
        <>
            <HamburgerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Perfil" component={ProfileScreen} />
                <Tab.Screen name="Acerca de" component={AboutScreen} />
            </Tab.Navigator>
        </>
    );
};
