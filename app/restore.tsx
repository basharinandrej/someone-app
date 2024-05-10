import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router'
import { colors } from '../styles/tokens';
import { mixins } from "../styles/mixins";

export default function Restore() {

  
  return (
    <View style={styles.container}>
      <Text style={{color: colors.Secondary}}>Restore</Text>
      <Link style={{color: colors.Secondary}} href={'/'}><Text>Главная</Text></Link>

      <Link style={{color: colors.Secondary}} href={'/course/TS'}><Text>Курс TS</Text></Link>
      <Link style={{color: colors.Secondary}} href={'/course/Docker'}><Text>Курс Docker</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: mixins.center
})