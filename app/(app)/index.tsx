import { Text } from "react-native";
import { Link } from 'expo-router'
import { colors, gaps } from "../../styles/tokens";
import { useAtom } from "jotai";
import { profileAtom } from "../entities/user/model/user.store";
import { loginAtom } from "../entities/auth/model/auth.store";
import { useEffect } from "react";



export default function Home() {
    const [profile] = useAtom(profileAtom)
    const [auth, login] = useAtom(loginAtom)

    useEffect(() => {
        login({
            password: '13031999Baltozar',
            email: 'basharin_andrej@mail.ru'
        })
    }, [])

    return <>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>Главная - {auth.access_token}</Text>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>{profile.profile.name}</Text>
        <Link style={{color: colors.Secondary}} href={'/login'}><Text>Авторизация</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/TS'}><Text>Курс TS</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/Docker'}><Text>Курс Docker</Text></Link>
    </>
}