import { View} from 'react-native';
import  {styles}  from './src/styles/StyleSheet';
import Login from './src/pages/Login';

export default function App() {

  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}




