import { TextInput, View } from 'react-native';
import  {styles}  from '../styles/StyleSheet';


export default function LoginInput() {
  
  return (
    <View>
        <TextInput style={styles.input} placeholder="Digite seu email:"/>
    <TextInput style={styles.input} placeholder="Digite sua senha:" secureTextEntry={true}/>
    </View>
    
  );
}