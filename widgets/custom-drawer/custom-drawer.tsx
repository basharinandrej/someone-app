import {
    DrawerContentComponentProps, 
    DrawerContentScrollView
} from '@react-navigation/drawer'
import { StyleSheet } from 'react-native'
import { colors, gaps } from '../../styles/tokens'
import { Link } from 'expo-router'

const MENU = [
    { text: 'Главная', href: '/'},
    { text: 'Профиль', href: 'profile'},
]

export const CustomDrawer = (props: DrawerContentComponentProps) => {
    
    return (
        <DrawerContentScrollView 
            {...props} 
            style={styles.container}
            
        >
            {MENU.map((menuItem, idx) => {
                const isActive = props.state.index === idx

                return <Link 
                    style={isActive ? {...styles.item, ...styles.itemActive} : {...styles.item}} 
                    href={menuItem.href}>
                        {menuItem.text}
                </Link>
            })}
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.Primary
    },
    item: {
        color: colors.Default,
        padding: gaps.Medium
    },
    itemActive: {
        color: colors.Secondary,
        backgroundColor: colors.FirstColor
    }
})