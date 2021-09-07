import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
} from 'react-native';

const Home = ({navigation}) => {
  const [id, onChangeId] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>회의실 예약 시스템</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeId}
        value={id}
        placeholder="ID를 입력해주세요."
        maxLength={30}
        autoFocus
      />
      <TextInput
        style={styles.input}
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChangeText={onChangePassword}
        maxLength={30}
      />
      <TouchableHighlight style={styles.loginButton}>
        <Button color="#fff" title="Log In" />
      </TouchableHighlight>
      <TouchableHighlight style={styles.signupButton}>
        <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 24,
  },
  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'transparent',
    borderBottomColor: '#999',
  },
  loginButton: {
    width: '80%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#2e86de',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 20,
  },
  signupButton: {
    width: '80%',
    height: 40,
    marginTop: 20,
  },
});

export default Home;
