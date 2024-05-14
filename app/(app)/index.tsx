import { Text, View, StyleSheet } from "react-native";
import { Link } from 'expo-router'
import { colors, gaps } from "../../styles/tokens";
import { useAtom, useAtomValue } from "jotai";
import { profileAtom } from "../../entities/user/model/user.store";
import { loginAtom } from "../../entities/auth/model/auth.store";



export default function Home() {
    const [profile] = useAtom(profileAtom)
    const {access_token} = useAtomValue(loginAtom)

    return <View style={styles.container}>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>Главная - {access_token}</Text>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>{profile.profile.name}</Text>
        <Link style={{color: colors.Secondary}} href={'/course/TS'}><Text>Курс TS</Text></Link>
        <Link style={{color: colors.Secondary}} href={'/course/Docker'}><Text>Курс Docker</Text></Link>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Primary,
        flexGrow:1 
    }
})