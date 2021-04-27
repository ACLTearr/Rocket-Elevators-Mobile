import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

function SignIn(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <Image style={styles.logo} source={require('../assets/logo.png')} />
            <View style={styles.signInButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    signInButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'red',
    },
    logo: {
        height: 100,
        width: 295,
        position: 'absolute',
        top: 50,
    },
})

export default SignIn;