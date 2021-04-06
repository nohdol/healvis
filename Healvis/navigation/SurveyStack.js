import React, {useContext} from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { AuthContext } from '../navigation/AuthProvider';
import SignupScreen from '../screens/SignupScreen';
import SurveyScreen from '../screens/SurveyScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SurveyStack = ({navigation}) => {
    return (
    <Stack.Navigator>
        <Stack.Screen
        name="Survey"
        component={SurveyScreen}
        options={{header: () => null}}
        />
    </Stack.Navigator>
    )
}

export default SurveyStack;