import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // App.js로 부터 가져옴
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // 가입하지 않은 사람은 시작할 수 없음
    }, []);

    if(initializing) return null;

    // user 이면 AppStack으로 가고 user가 아니면 AuthStack으로 이동함.
    return (
        <NavigationContainer>
            { user ? <AppStack/> : <AuthStack/>} 
        </NavigationContainer>
    );
};

export default Routes;