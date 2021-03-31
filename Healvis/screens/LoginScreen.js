// components에서 먼저 형식을 만들고 가져와서 사용함
import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Image는 로그인 창 위에 로고위함
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo/rn-social-logo.png')} // 로그인 상단 중앙에 로고를 넣어줌
                style={styles.logo}
            />
            <Text style={styles.text}>Healvis</Text>
            
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

            <FormButton // 로그인 버튼 만듦
                buttonTitle="Sign In"
                onPress={() => login(email, password)} // Auth에서 user 정보를 가져오기 때문에 user 아닌 경우 로그인 x
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}> 
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* 소셜 회원가입 관련 (주석 처리 할것) */}
            {/* <SocialButton
                buttonTitle="Sign In with Facebook"
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            <SocialButton
                buttonTitle="Sign In with Google"
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            /> */}

            <TouchableOpacity
                    style={styles.forgotButton}
                    onPress={() => navigation.navigate('Signup')}>
                    <Text style={styles.navButtonText}>
                        Don't have an acount? Create here
                    </Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
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
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });