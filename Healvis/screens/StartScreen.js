import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import {Container} from '../styles/FeedStyles';
import FormButton from '../components/FormButton';
import { ExerContext } from '../navigation/ExerProvider';
import {ExerciseChoice} from './HomeScreen';

const StartScreen = ({navigation}) => {
    // const {start, stop} = useContext(ExerContext);
    let guide;
    if (ExerciseChoice == "스쿼트"){
        guide = require('../assets/guide/squat.jpg');
    } else if (ExerciseChoice == "데드리프트") {
        guide = require('../assets/guide/deadlift.jpg');
    } else if (ExerciseChoice == "벤치프레스") {
        guide = require('../assets/guide/benchpress.jpg');
    }
    return(
        <Container>
            <Text style={styles.head} >{ExerciseChoice}</Text>
            <Text style={styles.text} >아래와 같이 센서들을 부착하고 시작해주세요.</Text>
            <Image source={guide} 
                   style={styles.explain}
            />
                <FormButton // 버튼을 누르면 rasp에 웹캠 작동하게 함.
                    buttonTitle="Start"
                    onPress={() => navigation.navigate('Stop')} // start() 넣을 것
                />
        </Container>
    );
}

export default StartScreen;

const styles = StyleSheet.create({
    head: {
        fontFamily: 'Jua-Regular',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    text: {
        fontFamily: 'Jua-Regular',
        fontSize: 20,
        marginBottom: 10,
        color: '#051d5f',
    },
    explain: {
        height: 300,
        width: 300,
        resizeMode: 'cover',
    },
  });