import React, {useContext} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';
import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = ({navigation}) => {
    const {user, logout} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <FormButton
              buttonTitle="DailyReport"
              onPress={() => navigation.navigate('DailyReport')}
      />
      <FormButton
                buttonTitle="MonthlyReport"
                onPress={() => navigation.navigate('MonthlyReport')}
      />
      {/* 로그아웃을 누르면 AuthProvider에 있는 AuthContext에 Auth를 잃게 되므로 Routes에서 AuthStack으로 이동하게 됨. */}
      <FormButton buttonTitle="Logout" onPress={() => logout()} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333'
  }
});
