import { Redirect } from "expo-router";
import { colors } from "../../styles/tokens";
import { loginAtom } from "../entities/auth/model/auth.store";
import { useAtomValue } from "jotai";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Button } from "react-native";
import { CustomDrawer } from "../../widgets/custom-drawer/custom-drawer";


export default function AppLayout() {
    const {access_token} = useAtomValue(loginAtom)

    if(!access_token) {
        return <Redirect href={'/login'}/>
    }

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={(props) => {
                    return <CustomDrawer {...props} />
                }}
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: colors.FirstColor,
                        shadowColor: colors.FirstColor
                    },
                    headerLeft: () => {
                        return <Button title={'open'} onPress={() => navigation.toggleDrawer()}/>
                    },
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: colors.Default
                    },
                    drawerContentStyle: {
                        backgroundColor: colors.Third
                    }
                })}
            >
                <Drawer.Screen 
                    name="index"
                    options={{
                        drawerLabel: 'Главная',
                        title: 'Главная',
                    }}
                />
                <Drawer.Screen
                    name="profile"
                    options={{
                        drawerLabel: 'Профиль',
                        title: 'Профиль',
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    )
}