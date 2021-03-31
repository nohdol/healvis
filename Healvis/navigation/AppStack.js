import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const AppStack = () => {
    // 로그인 하면 HomeScreen으로 가게 됨.
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default AppStack;