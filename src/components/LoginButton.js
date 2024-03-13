import { Button } from 'react-native';
import  {styles}  from '../styles/StyleSheet';


export default function LoginButton() {
      
    return (
        <Button
            style={styles.button}
            title='Logar'
        />
    );
}