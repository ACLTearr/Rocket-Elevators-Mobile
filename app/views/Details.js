import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';

function Details({ navigation, route }) {
    const { item } = route.params;
    const [status, setStatus] = useState(() => item.status)
    const {
        id,
        serialNumber,
    } = item;

    async function changeStatusToActive() {
        const api = `https://rest-api-burroughs.herokuapp.com/api/elevators/${id}/status`;
        const statusChange = {
            "id": id,
            "status": "Active",
        }
        const method = {
            method: 'PUT',
            headers: {
             'Content-type': 'application/json; charset=UTF-8' 
            },
            body: JSON.stringify(statusChange)
        }
        fetch(api, method)
        setStatus('Active')
    }

    return (
        <ImageBackground source={require('../assets/blue-red-gradient.jpg')} style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.text}>Elevator ID: {id}</Text>
                {status === 'Active' ? (
                    <Text style={styles.activeStatus}>Current Status: {status}</Text>
                ) : (
                    <Text style={styles.inactiveStatus}>Current Status: {status}</Text>
                )}
                <Text style={styles.containerText}>Serial Number: {serialNumber}</Text>
                {status === 'Active' ? (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.button}>Back to Home</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => changeStatusToActive()}>
                        <Text style={styles.activeButton}>Change status to Active</Text>
                    </TouchableOpacity>
                )}
            </View>
        </ImageBackground>            
    );
}

export default Details;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: '#949990',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    text: {
        color: 'black',
        fontSize: 25,
    },
    activeStatus: {
        color: 'green',
        fontSize: 25,
    },
    inactiveStatus: {
        color: 'red',
        fontSize: 25,
    },
    containerText: {
        color: 'black',
        fontSize: 25,
    },
    button: {
        color: 'green',
        fontSize: 25,
    },
    activeButton: {
        color: 'red',
        fontSize: 25,
    },
});