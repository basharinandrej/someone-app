import { Stack } from "expo-router";
import { colors } from "../styles/tokens";
import {StatusBar} from 'expo-status-bar'
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {

    return <SafeAreaProvider>
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