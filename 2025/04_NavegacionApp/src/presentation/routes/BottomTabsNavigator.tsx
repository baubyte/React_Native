import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screen/tabs/Tab1Screen';
//import { Tab2Screen } from '../screen/tabs/Tab2Screen';
//import { Tab3Screen } from '../screen/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { Text } from 'react-native';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

const createTabIcon = (label: string, color: string) => <Text style={{ color }}>{label}</Text>;

export const BottomTabsNavigator = () =>{
    return (
        
        <Tab.Navigator
            screenOptions={{
                sceneStyle: {
                    backgroundColor: globalColors.white,
                },
                tabBarLabelStyle:{
                    marginBottom: 5,
                },
                headerStyle: {
                    elevation: 0,
                    borderColor: 'transparent',
                    shadowColor: 'transparent',
                },
                tabBarStyle: {
                    borderTopWidth: 0,
                    elevation: 0,
                },
            }}
        >
            <Tab.Screen name="Tab1" options={{title:'Tab1', tabBarIcon:({color}) => createTabIcon('Tab1', color)}} component={Tab1Screen} />
            {/* <Tab.Screen name="Tab2" options={{title:'Tab2', tabBarIcon:({color}) => createTabIcon('Tab2', color)}} component={Tab2Screen} /> */}
            <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: ({ color }) => createTabIcon('Tab2', color) }} component={TopTabsNavigator} />
            {/* <Tab.Screen name="Tab3" options={{title:'Tab3', tabBarIcon:({color}) => createTabIcon('Tab3', color)}} component={Tab3Screen} /> */}
            <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: ({ color }) => createTabIcon('Tab3', color) }} component={StackNavigator} />
        </Tab.Navigator>
    );
};
