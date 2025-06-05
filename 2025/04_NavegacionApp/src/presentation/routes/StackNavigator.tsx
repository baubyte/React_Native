import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screen/home/HomeScreen';
import { ProductsScreen } from '../screen/products/ProductsScreen';
import { SettingsScreen } from '../settings/SettingsScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
};
