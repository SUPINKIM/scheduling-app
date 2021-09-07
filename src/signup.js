import React, {useEffect} from 'react';
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
    id: 0,
    label: 'ID',
    placeholder: '사용하실 ID를 적어주세요.',
  },
  {
    id: 1,
    label: 'Password',
    placeholder: '비밀번호는 최소 8자 이상이어야 합니다.',
  },
  {
    id: 2,
    label: '이름',
    placeholder: '',
  },
  {
    id: 3,
    label: 'E-mail',
    placeholder: '본인 확인을 위한 이메일을 입력해주세요.',
  },
];

const InputContainers = ({info, setText, onCheckId}) => {
  const {label, placeholder} = info;
  const {value, callback} = setText;

  return (
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        value={value}
        onChangeText={callback}
        secureTextEntry={label === 'Password' ? true : false}
      />
      {label === 'ID' && (
        <TouchableHighlight style={styles.button} onPress={onCheckId}>
          <Text style={{color: '#fff'}}>ID 중복 확인</Text>
        </TouchableHighlight>
      )}
    </View>
  );
};

const SignUp = () => {
  const [buttonState, onChangeButtonState] = React.useState(true);
  const [isCheckUserId, onCheckUserId] = React.useState(false);
  const [isCheckPassword, onCheckUserPassword] = React.useState(false);
  const [isCheckUserName, onCheckUserName] = React.useState(false);
  const [isCheckUserEmail, onCheckUserEmail] = React.useState(false);

  const [newID, onChangeNewID] = React.useState('');
  const [newPassword, onChangeNewPassword] = React.useState('');
  const [userName, onChangeUserName] = React.useState('');
  const [userEmail, onChangeUserEmail] = React.useState('');

  const onCheckId = () => {
    //newID값이 null이거나 중복되는 아이디가 있는지 DB 체크 필요
    onCheckUserId(true);
  };

  useEffect(() => {
    if (newPassword.length > 8) {
      onCheckUserPassword(true);
    } else {
      onCheckUserPassword(false);
    }
  }, [newPassword]);

  useEffect(() => {
    const emailPattern =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (emailPattern.test(userEmail)) {
      onCheckUserEmail(true);
    } else {
      onCheckUserEmail(false);
    }
  }, [userEmail]);

  useEffect(() => {
    if (userName) {
      onCheckUserName(true);
    } else {
      onCheckUserName(false);
    }
  }, [userName]);

  useEffect(() => {
    if (
      isCheckUserId &&
      isCheckPassword &&
      isCheckUserName &&
      isCheckUserEmail
    ) {
      onChangeButtonState(false);
    } else {
      onChangeButtonState(true);
    }
  }, [isCheckUserId, isCheckPassword, isCheckUserName, isCheckUserEmail]);

  const renderItem = ({item}) => {
    const states = [
      {value: newID, callback: onChangeNewID},
      {value: newPassword, callback: onChangeNewPassword},
      {value: userName, callback: onChangeUserName},
      {value: userEmail, callback: onChangeUserEmail},
    ];
    return (
      <InputContainers
        info={item}
        setText={states[item.id]}
        onCheckId={onCheckId}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={item => `key-${item.id}`}
      />
      <TouchableHighlight style={styles.signUpButton(buttonState)}>
        <Button title="가입하기" color="#fff" disabled={buttonState} />
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 0.85,
  },
  itemContainer: {
    flex: 1,
    width: '100%',
    height: '70%',
    marginVertical: 10,
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
