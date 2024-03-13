import { ImageBackground } from "react-native";
import {styles}  from '../styles/StyleSheet';
import LoginText from './ LoginText.js';
import LoginImage from './LoginImage';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';


export default function LoginImageBackground() {

    return (
        <ImageBackground source={require('../assets/images/roxo.jpeg')} resizeMode="cover" style={styles.image}>
            <LoginText />
            <LoginInput />
            <LoginButton />
            <LoginImage />
        </ImageBackground>
    );
  }
