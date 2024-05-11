import { Text } from 'react-native';
import { Link } from 'expo-router'
import { colors, gaps } from '../styles/tokens';

export default function Restore() {

  
  return (
    <>
      <Text style={{color: colors.Secondary}}>Restore</Text>
      <Link style={{color: colors.Secondary, marginBottom: gaps.Medium}} href={'/'}><Text>Главная</Text></Link>
    </>
  );
}

