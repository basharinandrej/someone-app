import { Text, View } from 'react-native';
import { Link } from 'expo-router'
import { colors } from '../styles/tokens';

export default function Restore() {

  
  return (
    <View>
      <Text style={{color: colors.Secondary}}>Restore</Text>
      <Link style={{color: colors.Secondary}} href={'/'}><Text>Главная</Text></Link>
    </View>
  );
}