// 처음 앱을 켰을 때 슬라이드 해서 넘기는 애니메이션 App.js를 가보면 처음 들어온 사람만 보게 됨.
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper'; // 해당 모듈 구글에 검색하면 방법 나옴.

const Skip = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Next</Text>
    </TouchableOpacity>
);

const Done = ({...props}) => ( // TouchableOpacity를 이용해서 꾸밀 수도 있음
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Done</Text>
    </TouchableOpacity>
);

const Dots = ({selected}) => { // 직접 꾸밀 수도 있음
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)'; // 선택되면 앞에 색

    return (
        <View
            style={{
                width:6,
                height:6,
                marginHorizontal:3,
                backgroundColor
            }}
        />
    );
}

const OnboardingScreen = ({navigation}) => {
    return(
        <Onboarding
        SkipButtonComponent={Skip} // const Skip을 사용해서 Skip 버튼의 내용, 모양, 색 등을 변경함.
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace("Login")} // Skip 버튼을 누르면 Login으로 대체됨.
        onDone={() => navigation.navigate("Login")} // Done 버튼을 누르면 Login으로 이동함.
        pages={[
            {
            backgroundColor: '#a6e4d0', // 배경 색 변경
            image: <Image source={require('../assets/images/onboarding-img1.png')} />, // 나중에 이미지랑
            title: 'Onboarding 1',                                                     // 제목, 내용 바꿀것
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
            backgroundColor: '#fdeb93', // 자연스럽게 변경됨
            image: <Image source={require('../assets/images/onboarding-img2.png')} />,
            title: 'Onboarding 2',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
            backgroundColor: '#e9bcbe',
            image: <Image source={require('../assets/images/onboarding-img3.png')} />,
            title: 'Onboarding 3',
            subtitle: 'Done with React Native Onboarding Swiper',
            },
        ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
