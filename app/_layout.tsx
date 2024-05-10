import { Stack } from "expo-router";
import { colors } from "../styles/tokens";
import {StatusBar} from 'expo-status-bar'
import { SafeAreaProvider, useSafeAreaInsets } from "react-native-safe-area-context";
import { mixins } from '../styles/mixins';

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
                    backgroundColor: colors.Primary,
                    ...mixins.center
                },
                headerShown: false
            }}
        >
            <Stack.Screen name="index" options={{
                title: 'Авторизация'
            }}/>
            <Stack.Screen name="restore" options={{
                title: 'Восстановление пароля'
            }}/>
        </Stack>
    </SafeAreaProvider>
}