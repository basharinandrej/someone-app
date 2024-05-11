import { Text } from "react-native";
import { Link } from 'expo-router'
import { colors, gaps } from "../../styles/tokens";



export default function Home() {


    return <>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>Главная</Text>
        <Link style={{color: colors.Secondary}} href={'/login'}><Text>Авторизация</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/TS'}><Text>Курс TS</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/Docker'}><Text>Курс Docker</Text></Link>
    </>
}