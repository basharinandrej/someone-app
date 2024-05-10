import { Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function Restore() {

  
  return (
    <View>
      <Text>Restore</Text>
      <Link href={'/'}><Text>Главнаяd</Text></Link>
    </View>
  );
}