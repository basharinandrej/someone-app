import {
    DrawerContentComponentProps, 
    DrawerContentScrollView
} from '@react-navigation/drawer'
import { Text, Pressable, StyleSheet } from 'react-native'
import { colors, gaps } from '../../styles/tokens'
import { Link } from 'expo-router'
import { useAtom, useSetAtom } from 'jotai'
import { logoutAtom } from '../../entities/auth/model/auth.store'
import { getProfileAtom } from '../../entities/user/model/user.store'
import { useEffect } from 'react'
import CloseIcon from '../../assets/icons/close-icon'

const MENU = [
    { text: 'Главная', href: '/'},
    { text: 'Профиль', href: 'profile'},
]

export const CustomDrawer = (props: DrawerContentComponentProps) => {
    const logout = useSetAtom(logoutAtom)
    const [profile, getProfile] = useAtom(getProfileAtom)

    const onPressLogoutHandler = () => logout()

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <DrawerContentScrollView 
            {...props} 
            style={styles.container}
            contentContainerStyle={{
                flexGrow: 1,
            }}
            
        >
            <Text style={styles.name}>{profile.profile.name}</Text>

            <Pressable onPress={() => props.navigation.closeDrawer()}><CloseIcon/></Pressable>

            {MENU.map((menuItem, idx) => {
                const isActive = props.state.index === idx

                return <Link
                    key={menuItem.text + idx}
                    style={isActive ? {...styles.item, ...styles.itemActive} : {...styles.item}} 
                    href={menuItem.href}>
                        {menuItem.text}
                </Link>
            })}

            <Pressable style={styles.logout} onPress={onPressLogoutHandler}><Text style={{color: colors.Default}}>Выход</Text></Pressable>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    name: {
        color: colors.Default
    },
    container: {
        backgroundColor: colors.Primary,
    },
    item: {
        color: colors.Default,
        padding: gaps.Medium
    },
    itemActive: {
        color: colors.Secondary,
        backgroundColor: colors.FirstColor
    },
    logout: {
        marginTop: 'auto',
        marginBottom: gaps.Large * 2,
        alignItems: "center",
    }
})