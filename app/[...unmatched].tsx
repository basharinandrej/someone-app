import { StyleSheet, Text, View } from "react-native"
import { colors, gaps } from "../styles/tokens"
import { Link } from "expo-router"

export default () => {

    return <View style={styles.container}>
        <Text style={{color: colors.Secondary, marginBottom: gaps.Medium}}>Упс! Такой страницы нет ...</Text>
        <Link style={{color: colors.Secondary}} href={'/'}>На главную страницу</Link>
    </View>
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }
})