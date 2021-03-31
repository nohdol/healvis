import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExerciseStack = () => {
    // 로그인 하면 HomeScreen으로 가게 됨.
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='운동 선택' 
                component={HomeScreen}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                    marginTop: 20,
                    color: '#5e60e5',
                    fontFamily: 'Jua-Regular',
                    fontSize:30
                    },
                    headerStyle: {
                    shadowColor: '#fff',
                    elevation: 0,
                    },
                }}
            />
        </Stack.Navigator>
    );
}

const AppStack = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#2e64e5',
        }}>
        <Tab.Screen
          name="Home"
          component={ExerciseStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <FontAwesome5
                name="dumbbell"
                color={color}
                size={size}
              />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Shop"
          component={Shop} // ShopScreen 만들어야 함
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Entypo
                name="shop"
                color={color}
                size={size}
              />
            ),
          }}
        /> */}
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

export default AppStack;