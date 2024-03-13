import { Image, } from "react-native";
import {styles}  from "../styles/StyleSheet";



export default function LoginImage() {

  return (
    
    <Image
      style={styles.musa}
      source= {require('../assets/images/musa.png')
      }
    />
  );
}
