import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../styles/tokens";
import { mixins } from "../../styles/mixins";



export default function() {
    const {alias} = useLocalSearchParams()

    return <View style={styles.container}>
        <Text style={{color: colors.Secondary}}>Страница курса - {alias}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: mixins.center
})