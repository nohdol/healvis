import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import {Container} from '../styles/FeedStyles';
import FormButtonHome from '../components/FormButtonHome';

const DailyScreen = ({navigation}) => {
    return(
        <Container>
            <Text style={styles.text} >DailyReport</Text>
            {/* <FormButtonHome // 운동 선택
                buttonTitle="스쿼트"
                onPress={() => (navigation.navigate('Start'), ExerciseChoice="스쿼트")} // 클릭을 하면 ExerciseScreen으로 이동됨. Exercise의 head는 해당 운동이 됨.
            />
            <FormButtonHome
                buttonTitle="데드리프트"
                onPress={() => (navigation.navigate('Start'), ExerciseChoice="데드리프트")}
            />
            <FormButtonHome
                buttonTitle="벤치프레스"
                onPress={() => (navigation.navigate('Start'), ExerciseChoice="벤치프레스")}
            /> */}
        </Container>
    );
}

export default DailyScreen;

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Jua-Regular',
      fontSize: 35,
      marginTop: 30,
      marginBottom: 10,
      color: '#051d5f',
    },
  });