// firebase 사용할 때 권한을 줌
import React, {createContext, useState} from 'react';
import { View, StyleSheet, Button, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        if (email == null || password == null){
                            Alert.alert('로그인 오류', '모두 입력해 주세요.',[
                                {
                                  text: "확인",
                                  style: "cancel",
                                },
                              ],)
                        } else {
                            await auth().signInWithEmailAndPassword(email, password)
                        }
                    } catch(e) {
                        Alert.alert('로그인 오류','email 혹은 password가 잘못되었습니다.',[
                            {
                              text: "확인",
                              style: "cancel",
                            },
                          ],)
                    }
                },
                // googlelogin Auth 제공
                // googleLogin: async () => {
                //     try {
                //         // Get the users ID token
                //         const { idToken } = await GoogleSignin.signIn();

                //         // Create a Google credential with the token
                //         const googleCredential = auth.GoogleAuthProvider.credential(idToken);

                //         // Sign-in the user with the credential
                //         return auth().signInWithCredential(googleCredential);
                //     } catch(error) {
                //         console.log({error});
                //     }
                // },
                register: async (email, password) => {
                    try {
                        if (email == null || password == null){
                            Alert.alert('회원가입 오류', '모두 입력해 주세요.',[
                                {
                                  text: "확인",
                                  style: "cancel",
                                },
                              ],)
                        } else {
                            await auth().createUserWithEmailAndPassword(email, password);
                        }
                    } catch(e) {
                        console.log(e); // 이메일 형식이 아니면 회원가입 못하게 함?
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}