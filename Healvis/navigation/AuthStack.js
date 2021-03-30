// AuthStack.js는 Routes.js에 사용될 것, Routes에 있는 것은 index.js에 사용됨
import React, { useEffect } from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

import AsyncStorage from '@react-native-community/async-storage'; // storage를 사용하여 처음 들어온 사람만 온보드

const Stack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null); // 처음 들어온 사람만 온보드
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => { 
      if(value == null){ // 처음 들어온 사람만 온보드
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    })
  }, []);

  if (isFirstLaunch == null){ // 선택되는 Screen으로 이동하게 연결해줌.
      return null;
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return ( // 이동하는 장소를 나타내줌.
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
        <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
  
export default AuthStack;