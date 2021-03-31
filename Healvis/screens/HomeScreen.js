import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import {Container} from '../styles/FeedStyles';
import FormButtonHome from '../components/FormButtonHome';

const HomeScreen = () => {
    return(
        <Container>
                <FormButtonHome // 운동 선택
                    buttonTitle="스쿼트"
                    onPress={() => {}}
                />
                <FormButtonHome // 운동 선택
                    buttonTitle="랫풀다운"
                    onPress={() => {}}
                />
                <FormButtonHome // 운동 선택
                    buttonTitle="벤치프레스"
                    onPress={() => {}}
                />
        </Container>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Jua-Regular',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
  });