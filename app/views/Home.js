import React from 'react';
import { Image, StyleSheet } from 'react-native';

function Home(props) {
    return (
        <Image style={styles.image} source={require('../assets/R2icon.png')} />
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    }
})

export default Home;