import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/reducers/login.reducer';

const AppOnBoarding = () => {
  const dispatch = useDispatch();

  const user = {
    isLoggedIn: true,
    firstName: 'Jasmine',
    lastName: 'P',
    id: '1',
  };

  const handleLogin = () => {
    dispatch(login(user));
  };

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 20, fontSize: 15}}>Login screen</Text>
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
export default AppOnBoarding;
