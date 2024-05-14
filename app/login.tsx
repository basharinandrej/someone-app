import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link, SplashScreen, router } from 'expo-router'
import {Input} from '../shared/input/input'
import {colors, gaps, radiuses, fontSize} from '../styles/tokens'
import { useAtomValue, useSetAtom } from 'jotai';
import { loginAtom } from '../entities/auth/model/auth.store';
import { mixins } from '../styles/mixins';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = useSetAtom(loginAtom)
  const {access_token, error} = useAtomValue(loginAtom)

  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    if(access_token) {
      router.replace('/')
    }
  }, [access_token])

  const submitHandler = () => {
    login({
      password, email
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <Input
          onChange={(e) => setEmail(e.nativeEvent.text)}
          style={[styles.input, styles.passwordInput]} 
          placeholder='Логин'
        />
        <Input 
          onChange={(e) => setPassword(e.nativeEvent.text)}
          style={[styles.input, styles.loginInput]} 
          secureTextEntry={true}
          placeholder='Пароль'
        />
      </View>
      
      <Button disabled={!password || !email} title={'Войти'} onPress={submitHandler} />

      <Link href={'/restore'}>
        <Text style={{color: colors.Secondary}}>Восстановить пароль</Text>
      </Link>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: mixins.center,
  error: {
    color: colors.Danger,
    marginTop: gaps.Small,
  },
  title: {
    color: colors.Secondary,
    marginBottom: gaps.Default * 6,
    fontSize: fontSize.Medium
  },
  passwordInput: {
    marginBottom: gaps.Default * 3
  },
  loginInput: {
    marginBottom: gaps.Default * 6,
  },
  input: {
    backgroundColor: colors.Accent,
    borderColor: colors.Accent,
    color: colors.Default,

    width: 300,
    fontSize: fontSize.Small,
    padding: gaps.ExtraMedium,
    paddingLeft: gaps.Large,

    borderWidth: 1,

    borderBottomEndRadius: radiuses.Medium,
    borderTopEndRadius: radiuses.Medium,
    borderTopStartRadius: radiuses.Medium,
    borderBottomStartRadius: radiuses.Medium
  }
});
