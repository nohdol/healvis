// AuthStack.js는 Routes.js에 사용될 것, Routes에 있는 것은 index.js에 사용됨
import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import UserLoginScreen from '../screens/UserLoginScreen';
import TrainerLoginScreen from '../screens/TrainerLoginScreen';
import {Trainer} from '../screens/LoginScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome'; // 아이콘 제대로 안나옴
// 확장명이 ttf 파일의 경우
// node_modules에 react-native-vactor-icons에 있는 fonts파일들을 복사 android/app/src/main/assets/fonts 에 붙여넣기
// 그 다음 cd android && ./gradlew clean 후 react-native run-android

import AsyncStorage from '@react-native-community/async-storage'; // storage를 사용하여 처음 들어온 사람만 온보드
import { GoogleSignin } from '@react-native-community/google-signin';


const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null); // 처음 들어온 사람만 온보드
  let routeName;
  let istrainer = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => { 
      if(value == null){ // 처음 들어온 사람만 온보드
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
    GoogleSignin.configure({
      webClientId: '165066213514-1msrb67not74v6c1rsmauqlb58uheokb.apps.googleusercontent.com', // google-services.json에서 "client_type": 3 인 부분 위에 "client_id" 뒷 부분임.
    })
  }, []);

  if (isFirstLaunch == null){ // 선택되는 Screen으로 이동하게 연결해줌.
      return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return ( // 이동하는 장소를 나타내줌. 처음 접속이면 Onboarding, 아니면 Login
    <Stack.Navigator initialRouteName={routeName}> 
        <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{header: () => null}}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{header: () => null}}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLoginScreen}
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
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
            ),
        })}
        />
        <Stack.Screen
          name="TrainerLogin"
          component={TrainerLoginScreen}
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
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
            ),
        })}
        />
        {/* signup screen 왼쪽 상단 Login back */}
        <Stack.Screen 
            name="Signup" 
            component={SignupScreen}
            options={({navigation}) => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#f9fafd',
                    shadowColor: '#f9fafd',
                    elevation: 0,
                },
                headerLeft: () => ( // Signup 왼쪽 상단에 화살표 만듦
                    <View style={{marginLeft: 10}}>
                        <FontAwesome.Button
                            name="chevron-left"
                            size={25}
                            backgroundColor="#f9fafd"
                            color="#333"
                            onPress={() => navigation.navigate('Login')}
                        />
                    </View>
                ),
            })} 
        />
    </Stack.Navigator>
  );
};
  
export default AuthStack;