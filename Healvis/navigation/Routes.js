import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // App.js로 부터 가져옴
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import TrainerStack from './TrainerStack';
import {Trainer} from '../screens/LoginScreen';

const Routes = () => {

    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
    let istrainer = useState(false);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // 가입하지 않은 사람은 시작할 수 없음
    }, []);

    if (Trainer != null) {
        istrainer = Trainer;
    }

    if(initializing) return null;

    return (
        <NavigationContainer>
            { user ? ( istrainer ? <TrainerStack/> : <AppStack/>) : <AuthStack/>}
        </NavigationContainer>
    );
};

export default Routes;