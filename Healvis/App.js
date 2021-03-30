import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import AsyncStorage from '@react-native-community/async-storage'; // storage를 사용하여 처음 들어온 사람만 온보드

const AppStack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null); // 처음 들어온 사람만 온보드

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

  if( isFirstLaunch == null ){
    return null;
  } else if ( isFirstLaunch == true) { // 처음 들어온 사람만 온보드
    return (
      <NavigationContainer>
        <AppStack.Navigator
          headerMode="none"
        >
          <AppStack.Screen name ="Onboarding" component={OnboardingScreen} />
          <AppStack.Screen name ="Login" component={LoginScreen} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  } else { // 이미 들어온 사람은 LoginScreen으로 바로 이동함.
    return <LoginScreen />;
  }
}

export default App;
