import { Text } from "react-native";
import { Link } from 'expo-router'
import { colors, gaps } from "../../styles/tokens";
import { useAtom } from "jotai";
import { profileAtom } from "../entities/user/model/user.store";



export default function Home() {

    const [profile] = useAtom(profileAtom)
    return <>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>Главная - {profile.profile.name}</Text>
        <Link style={{color: colors.Secondary}} href={'/login'}><Text>Авторизация</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/TS'}><Text>Курс TS</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/Docker'}><Text>Курс Docker</Text></Link>
    </>
}