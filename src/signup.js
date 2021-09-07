import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableHighlight,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const datas = [
  {
    id: 1,
    label: 'ID',
    placeholder: '사용하실 ID를 적어주세요.',
  },
  {
    id: 2,
    label: 'Password',
    placeholder: '비밀번호는 최소 8자 이상이어야 합니다.',
  },
];

const InputContainers = ({info}) => {
  const {label, placeholder} = info;
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.textInput}></TextInput>
      {label === 'ID' && (
        <TouchableHighlight style={styles.button}>
          <Text style={{color: '#fff'}}>ID 중복 확인</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

const SignUp = () => {
  const [buttonState, onChangeButtonState] = React.useState(true);

  const renderItem = ({item}) => {
    return <InputContainers info={item}></InputContainers>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableHighlight style={styles.signUpButton(buttonState)}>
        <Button title="가입하기" color="#fff" disabled />
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 0.7,
  },
  itemContainer: {
    flex: 1,
    width: '100%',
    height: '70%',
    marginVertical: 30,
    marginHorizontal: 25,
    padding: 10,
  },
  label: {
    fontSize: 24,
  },
  textInput: {
    width: '80%',
    height: 30,
    lineHeight: 20,
    marginTop: 10,
    borderColor: 'transparent',
    borderBottomColor: '#999',
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    width: 100,
    height: 40,
    marginTop: 20,
    backgroundColor: '#2e86de',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpButton: disable => ({
    width: '80%',
    height: 40,
    borderRadius: 10,
    backgroundColor: disable ? '#999' : '#2e86de',
    marginTop: 20,
    marginVertical: 8,
    marginHorizontal: 30,
    padding: 2,
  }),
});

export default SignUp;
