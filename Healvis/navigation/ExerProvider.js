// ExerciseScreen을 위해 제공하는 것
import React, {createContext, useState} from 'react';
import {ExerciseChoice} from '../screens/HomeScreen';

export const ExerContext = createContext();

export const ExerProvider = ({children}) => {

    return (
        <ExerContext.Provider
            value={{
                exercise: async () => { // ExerciseChoice를 rasp로 보냄
                    try {

                    } catch(e) {
                        console.log(e)
                    }
                },
                start: async () => { // start 버튼을 누르면 웹캠이 켜지게 함.
                    try {

                    } catch(e) {
                        console.log(e);
                    }
                },
                stop: async () => {
                    try {

                    } catch(e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </ExerContext.Provider>
    )
}