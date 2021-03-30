import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // App.js로 부터 가져옴
import AuthStack from './AuthStack'

const Routes = () => {
    return (
        <NavigationContainer>
            <AuthStack/>
        </NavigationContainer>
    );
};

export default Routes;