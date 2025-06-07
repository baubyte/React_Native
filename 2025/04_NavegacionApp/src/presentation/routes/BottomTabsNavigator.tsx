import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screen/tabs/Tab1Screen';
//import { Tab2Screen } from '../screen/tabs/Tab2Screen';
//import { Tab3Screen } from '../screen/tabs/Tab3Screen';
import { globalColors } from '../theme/theme';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () =>{
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
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
            <Tab.Screen name="Tab1" options={{ title: 'Tab1', tabBarIcon: Tab1Icon }} component={Tab1Screen} />
            {/* <Tab.Screen name="Tab2" options={{title:'Tab2', tabBarIcon:({color}) => createTabIcon('Tab2', color)}} component={Tab2Screen} /> */}
            <Tab.Screen name="Tab2" options={{ title: 'Tab2', tabBarIcon: Tab2Icon }} component={TopTabsNavigator} />
            {/* <Tab.Screen name="Tab3" options={{title:'Tab3', tabBarIcon:({color}) => createTabIcon('Tab3', color)}} component={Tab3Screen} /> */}
            <Tab.Screen name="Tab3" options={{ title: 'Tab3', tabBarIcon: Tab3Icon }} component={StackNavigator} />
        </Tab.Navigator>
    );
};

const Tab1Icon = ({ color }: { color: string }) => <IonIcon name="accessibility-outline" color={color} />;
const Tab2Icon = ({ color }: { color: string }) => <IonIcon name="airplane-outline" color={color} />;
const Tab3Icon = ({ color }: { color: string }) => <IonIcon name="bar-chart-outline" color={color} />;
