import { Button, Text } from "react-native";
import { Link } from 'expo-router'
import { colors, gaps } from "../../styles/tokens";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { profileAtom } from "../entities/user/model/user.store";
import { loginAtom, logoutAtom } from "../entities/auth/model/auth.store";



export default function Home() {
    const [profile] = useAtom(profileAtom)
    const logout = useSetAtom(logoutAtom)
    const {access_token} = useAtomValue(loginAtom)

    const onPressHandler = () => {
        logout()
    }

    return <>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>Главная - {access_token}</Text>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>{profile.profile.name}</Text>
        <Link style={{color: colors.Secondary}} href={'/login'}><Text>Авторизация</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/TS'}><Text>Курс TS</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/Docker'}><Text>Курс Docker</Text></Link>

        <Button onPress={onPressHandler} title="Выход" />
    </>
}