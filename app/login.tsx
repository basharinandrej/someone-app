import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link, SplashScreen } from 'expo-router'
import {Input} from '../shared/input/input'
import {colors, gaps, radiuses, fontSize} from '../styles/tokens'

export default function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    SplashScreen.hideAsync()
  }, [])

  return (
    <>
      <Text style={styles.title}>Авторизация</Text>
      <View>
        <Input
          onChange={(e) => setLogin(e.nativeEvent.text)}
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
      
      <Link href={'/restore'}>
        <Text style={{color: colors.Secondary}}>Восстановить пароль</Text>
      </Link>

      <Link href={'/'}>
        <Text style={{color: colors.Secondary}}>Главная</Text>
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
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
    borderColor: colors.Border,
    color: colors.Secondary,

    width: 300,
    fontSize: fontSize.ExtraMedium,
    padding: gaps.Default,
    paddingLeft: gaps.Default * 3,

    borderWidth: 1,

    borderBottomEndRadius: radiuses.Default,
    borderTopEndRadius: radiuses.Default,
    borderTopStartRadius: radiuses.Default,
    borderBottomStartRadius: radiuses.Default
  }
});
