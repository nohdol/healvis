// components에서 먼저 형식을 만들고 가져와서 사용함
import React, {useContext, useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Platform } from 'react-native'; // Image는 로그인 창 위에 로고위함
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const {login, googleLogin} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image
              source={require('../assets/logo/healvis_logo.png')} // 로그인 상단 중앙에 로고를 넣어줌
              style={styles.logo}
            />
            <FormButton
              buttonTitle="회원 로그인"
              onPress={() => (navigation.navigate('UserLogin'), Trainer = false)}
            />
            <FormButton
              buttonTitle="트레이너 로그인"
              onPress={() => (navigation.navigate('TrainerLogin'), Trainer = true)}
            />
        </View>
    );
};

export default LoginScreen;
export let Trainer;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f9fafd',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      height: 240,
      width: 240,
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