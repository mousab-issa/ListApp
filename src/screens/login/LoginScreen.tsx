import React, { FC, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView, SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styles';
import { Loginuser } from 'src/store/Auth/actions';
import { useDispatch } from 'react-redux';

import { Props } from './types';

const Login: FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();

  const onLogin = async () => {
    try {
      return dispatch(Loginuser({ username: username, password: password }));
    } catch (e) {

    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{
          flexGrow: 1,
          padding: 20
        }}>
          <View style={styles.startColumn}>
            <Text style={styles.header}>Welcome Back</Text>
            <Text style={{ marginVertical: 10 }}>Login Now</Text>
          </View>
          <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <TextInput
              style={styles.textInput}
              onChangeText={(t: string) => setUsername(t)}
              placeholder={'Email'}
              placeholderTextColor={'grey'}
            />
            <TextInput
              secureTextEntry={true}
              style={styles.textInput}
              onChangeText={(t: string) => setPassword(t)}
              placeholder={'Password'}
              placeholderTextColor={'grey'}
            />
          </View>
          <View style={{
            flex: 2,
          }}>
            <TouchableOpacity style={styles.button} onPress={onLogin}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}

export default Login;

