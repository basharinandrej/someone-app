import { Stack } from "expo-router";
import { colors } from "../../styles/tokens";

export default function AppLayout() {
    
    return (<Stack
            screenOptions={{
                contentStyle: {
                    backgroundColor: colors.Primary,
                },
                headerShown: false
            }}
        >
            <Stack.Screen name="index" />
        </Stack>
    )
}