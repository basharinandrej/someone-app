import { useLocalSearchParams, Link } from "expo-router";
import {Text } from "react-native";
import { colors } from "../../../styles/tokens";



export default function() {
    const {alias} = useLocalSearchParams()

    return <>
        <Text style={{color: colors.Secondary}}>Страница курса - {alias}</Text>

        <Link href={'/'}>
            <Text style={{color: colors.Secondary}}>Главная</Text>
        </Link>
    </>
}