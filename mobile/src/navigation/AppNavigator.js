import { NavigatorContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaBoasVindas from '../screens/TelaBoasVindas';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigatorContainer>
            <Stack.Navigator
                initialRouteName='TelaBoasVindas'
            >
                <Stack.Screen
                    name="TelaBoasVindas"
                    component={TelaBoasVindas}
                    options={{ headerShow: false }}
                />
            </Stack.Navigator>
        </NavigatorContainer>
    );
}