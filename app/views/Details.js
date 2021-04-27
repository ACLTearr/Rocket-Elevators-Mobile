import React, { useState } from 'react';
// import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
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
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Elevator ID: {id}</Text>
            <View style={styles.card}>
                {status === 'Active' ? (
                    <Text style={styles.active}>Current Status: {status}</Text>
                ) : (
                    <Text style={styles.inactive}>Current Status: {status}</Text>
                )}

                <Text style={styles.cardText}>Serial Number: {serialNumber}</Text>
            </View>

            {status === 'Active' ? (
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                    <Text style={styles.text}>Back to Home</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => changeStatusToActive()} style={styles.activeButton}>
                    <Text style={styles.text}>Change status to Active</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    );
}

export default Details;

const styles = StyleSheet.create({
    
});