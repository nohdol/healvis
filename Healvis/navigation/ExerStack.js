// AuthStack.js는 Routes.js에 사용될 것, Routes에 있는 것은 index.js에 사용됨
import React, { useState, useEffect } from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ExerciseScreen from '../screens/ExerciseScreen';
import HomeScreen from '../screens/HomeScreen';

import FontAwesome from 'react-native-vector-icons/FontAwesome'; // 아이콘 제대로 안나옴

const Stack = createStackNavigator();

const ExerStack = () => {
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
    <Stack.Navigator initialRouteName={"Home"}> 
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{header: () => null}}
        />
        {/* ExerciseScreen 왼쪽 상단 운동 선택 back */}
        <Stack.Screen 
            name="Exercise" 
            component={ExerciseScreen}
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
                            name="long-arrow-left"
                            size={25}
                            backgroundColor="#f9fafd"
                            color="#333"
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                ),
            })} 
        />
    </Stack.Navigator>
  );
};
  
export default ExerStack;