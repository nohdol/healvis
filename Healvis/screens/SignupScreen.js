// LoginScreen과 유사해서 그대로 가져오고 수정함
import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Image는 로그인 창 위에 로고위함
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';
import {Trainer} from './LoginScreen';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmPassword] = useState();

    const {register} = useContext(AuthContext); // AuthProvider 내부 AuthContext의 register를 가져옴.

    let istrainer = useState(false);
    if (Trainer != null){
        istrainer = Trainer;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create an account</Text>
            
            <FormInput // contents에서 작성한 것들 login 창에 넣어줌. 안에 있는 rest로 이어지는 것임.
                labelValue={email} // Email 작성하기
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address" // 누르면 키보드가 나오고 @가 포함된 이메일 입력 형식
                autoCapitalize="none" // TextInput에 작용함
                autoCorrect={false}
            />

            <FormInput
                labelValue={password} // password 작성하기
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock" // 자물쇠 모양
                secureTextEntry={true} // 비밀번호 입력이 *로 나옴
            />

            <FormInput
                labelValue={confirmpassword} // password 확인
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock" // 자물쇠 모양
                secureTextEntry={true} // 비밀번호 입력이 *로 나옴
            />

            {/* 여기에 설문조사 내용 추가 */}

            <FormButton
                buttonTitle="Sign Up" // 누르면 Firebase Authentication에 User로 등록되게 됨.
                onPress={() => register(email, password)} // 설문조사 내용도 넘어가게 함
            />

            {/* 회원가입 규약 관련 (주석 처리 할 것) */}
            {/* <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                        Terms of service
                    </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
                    Privacy Policy
                </Text>
            </View> */}

            {/* 소셜 관련 가입 (주석 처리 할 것) */}
            {/* <SocialButton
                buttonTitle="Sign Up with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            <SocialButton
                buttonTitle="Sign Up with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            /> */}

            <TouchableOpacity
                style={styles.navButton}
                onPress={() => {istrainer ? navigation.navigate('TrainerLogin') : navigation.navigate('UserLogin')}}>
                <Text style={styles.navButtonText}>Have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
});
