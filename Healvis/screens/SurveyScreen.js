import React, {useContext, useState} from 'react';
import { View, ScrollView, SafeAreaView, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'; // Image는 로그인 창 위에 로고위함
import firestore from '@react-native-firebase/firestore';
import { RadioButton } from 'react-native-paper';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';

const SurveyScreen = () => {
    Submit = false;

    const [age, setAge] = useState();
    const [gender, setGender] = useState('남자');
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();

    const survey = async () => {
        firestore()
        .collection('Users')
        .add({
            userId: user.uid,
            age: age,
            gender: gender,
            weight: weight,
            height: height,
        })
        .then(() => {
            console.log('User added!');
        })
        // .catch((error) => {
        //     console.log('Something went wrong with added User to firestore.')
        // });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>               Survey              </Text>

                <Text style={styles.survey}>나이를 입력해주세요.</Text>
                <FormInput
                    labelValue={age} 
                    onChangeText={(userAge) => setAge(userAge)}
                    placeholderText="나이"
                />

                <Text style={styles.survey}>성별을 골라주세요.</Text>
                <Text>남자</Text>
                <RadioButton
                    value="남자"
                    status={ gender === '남자' ? 'checked' : 'unchecked' }
                    onPress={() => setGender('남자')}
                />
                <Text>여자</Text>
                <RadioButton
                    value="여자"
                    status={ gender === '여자' ? 'checked' : 'unchecked' }
                    onPress={() => setGender('여자')}
                />

                <Text style={styles.survey}>몸무게를 입력해주세요.</Text>
                <FormInput
                    labelValue={weight} 
                    onChangeText={(userWeight) => setWeight(userWeight)}
                    placeholderText="몸무게(kg)"
                />

                <Text style={styles.survey}>키를 입력해주세요.</Text>
                <FormInput
                    labelValue={height} 
                    onChangeText={(userHeight) => setHeight(userHeight)}
                    placeholderText="키(cm)"
                />

                <FormButton
                    buttonTitle="제출"
                    onPress={() => (survey(), Submit = true)}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default SurveyScreen;
export let Submit;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
    },
    scrollView: {
        backgroundColor: '#f9fafd',
        marginHorizontal: 0,
        padding: 0,
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