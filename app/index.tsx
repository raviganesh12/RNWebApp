import { View } from 'react-native';

import { Link } from 'expo-router';
import App from './App';


export default function Page() {
  return (
    <View>
        <App/>
      <Link href="/about">About</Link>
      {/* ...other links */}
      <Link href="/user/bacon">View user</Link>
    </View>
  );
}
