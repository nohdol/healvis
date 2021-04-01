import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import {Container} from '../styles/FeedStyles';
import FormButton from '../components/FormButton';
import { ExerContext } from '../navigation/ExerProvider';
import {ExerciseChoice} from './HomeScreen';

const StopScreen = ({navigation}) => {
    // const {start, stop} = useContext(ExerContext);
    return(
        <Container>
            <Text style={styles.head} >{ExerciseChoice}</Text>
            <Text style={styles.text} >1 세트 후에 Stop 하세요.</Text>
                <FormButton // 버튼을 누르면 rasp에 웹캠이 멈추게 함
                    buttonTitle="Stop"
                    onPress={() => navigation.navigate('Start')} // stop() 넣을 것
                />
        </Container>
    );
}

export default StopScreen;

const styles = StyleSheet.create({
    head: {
        fontFamily: 'Jua-Regular',
        fontSize: 28,
        marginTop: 53,
        marginBottom: 10,
        color: '#051d5f',
    },
    text: {
        fontFamily: 'Jua-Regular',
        fontSize: 20,
        marginBottom: 10,
        color: '#051d5f',
    },
  });