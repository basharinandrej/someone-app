import { Redirect } from "expo-router";
import { colors, gaps } from "../../styles/tokens";
import { loginAtom } from "../entities/auth/model/auth.store";
import { useAtomValue } from "jotai";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { StyleSheet, View } from "react-native";
import { CustomDrawer } from "../../widgets/custom-drawer/custom-drawer";
import BurgerIcon from "../../assets/icons/burger-icon";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function AppLayout() {
    const {access_token} = useAtomValue(loginAtom)

    if(!access_token) {
        return <Redirect href={'/login'}/>
    }

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView >
            <Drawer
                drawerContent={(props) => {
                    return <CustomDrawer {...props} />
                }}
                screenOptions={({ navigation }) => ({
                    headerStyle: {
                        backgroundColor: colors.FirstColor,
                        shadowColor: colors.FirstColor,
                    },
                    headerLeft: () => {
                        return <View style={styles.burger} onTouchStart={() => navigation.toggleDrawer()}><BurgerIcon /></View>
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
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    burger: {
        paddingLeft: gaps.Small
    }
})