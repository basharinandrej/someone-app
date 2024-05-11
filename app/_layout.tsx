import { Stack } from "expo-router";
import { colors } from "../styles/tokens";
import {StatusBar} from 'expo-status-bar'
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
    const insets = useSafeAreaInsets()

    return <SafeAreaProvider
        style={{
            paddingTop: insets.top,
            paddingBottom: insets.bottom
        }}
    >
        <StatusBar style={'light'}/>
        <Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: colors.Third,
                },
                headerShown: false
            }}
        >
            <Stack.Screen name="login" options={{
                title: 'Авторизация'
            }}/>
            <Stack.Screen name="restore" options={{
                title: 'Восстановление пароля'
            }}/>
        </Stack>
    </SafeAreaProvider>
}