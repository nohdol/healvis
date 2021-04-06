import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AuthContext} from './AuthProvider';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import TrainerStack from './TrainerStack';
import SurveyStack from './SurveyStack';
import {Submit} from '../screens/SurveyScreen';
import {Trainer} from '../screens/LoginScreen';

const Routes = () => {
    const {user, setUser} = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);
    let istrainer = useState(false);
    let issubmit = useState(false);

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
    if (Submit == null) {
        issubmit = false;
    } else {
        issubmit = true;
    }

    if(initializing) return null;

    return (
        <NavigationContainer>
            {/* { user ? ( istrainer ? <TrainerStack/> : ( issubmit ? <AppStack/> : <SurveyStack/> ) : <AuthStack/>} */}
            {user ? (istrainer ? <TrainerStack/> : <AppStack/>) : <AuthStack/>}
        </NavigationContainer>
    );
};

export default Routes;