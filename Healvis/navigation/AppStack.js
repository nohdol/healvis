// Routes에서 User인 사람은 여기로 이동
// 처음에 기본적으로 Home을 보여주고, 아래에 탭으로 이동함.
import React, {useContext} from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { AuthContext } from '../navigation/AuthProvider';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import StartScreen from '../screens/StartScreen';
import StopScreen from '../screens/StopScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExerStack = ({navigation}) => ( // post 버튼
  <Stack.Navigator>
    <Stack.Screen
      name="ExerciseChoice"
      component={HomeScreen}
      options={{header: () => null}}
    />
    <Stack.Screen
      name="Start"
      component={StartScreen}
      options={({navigation}) => ({
        title: '',
        headerStyle: {
            backgroundColor: '#f9fafd',
            shadowColor: '#f9fafd',
            elevation: 0,
        },
        headerLeft: () => (
            <View style={{marginLeft: 10}}>
                <FontAwesome.Button
                    name="chevron-left"
                    size={25}
                    backgroundColor="#f9fafd"
                    color="darkblue"
                    onPress={() => navigation.navigate('ExerciseChoice')}
                />
            </View>
        ),
    })}
    />
    <Stack.Screen
      name="Stop"
      component={StopScreen}
      options={{header: () => null}}
    />
  </Stack.Navigator>
);

const AppStack = () => {
    const {user} = useContext(AuthContext);
    console.log(user.email) // 여기서 라즈베리 파이에 계정 보내줌. user.email에 계정이 저장되어 있음.
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#2e64e5',
        }}>
        <Tab.Screen
          name="Home"
          component={ExerStack}
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