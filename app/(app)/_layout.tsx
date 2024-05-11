import { Redirect, Stack } from "expo-router";
import { colors } from "../../styles/tokens";
import { useEffect } from "react";
import { loginAtom } from "../entities/auth/model/auth.store";
import { useAtomValue } from "jotai";

export default function AppLayout() {
    const {access_token} = useAtomValue(loginAtom)

    if(!access_token) {
        return <Redirect href={'/login'}/>
    }

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