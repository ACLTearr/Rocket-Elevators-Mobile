import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Button, Alert, TextInput } from 'react-native';

function SignIn(props) {

    const [email, onChangeText] = React.useState('');

    const redirect = () => {
        if (email == '') {
            Alert.alert('Pleae enter an employee email');
        } else {
            fetch(`https://rest-api-burroughs.herokuapp.com/api/employees/valid/${email}`)
                .then((result) => result.json())
                .then((resultJson) => {
                    if (resultJson) {
                        props.navigation.navigate('Home');
                    } else {
                        Alert.alert('Pleae enter an employee email');
                    }
                })
        }
    }

    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background.jpg')}
        >
            <Image style={styles.logo} source={require('../assets/logo.png')} />    
            <TextInput
                style={styles.input}
                placeholder='Please enter an email'
                placeholderTextColor="black"
                onChangeText={(text) => onChangeText(text)} value={email} />
            <Button title='Sign In' style={styles.signInButton} onPress={redirect} />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
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
    input: {
        height: 50,
        width: 250,
        backgroundColor: 'white',
    },
})

export default SignIn;