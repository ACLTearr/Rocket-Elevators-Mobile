import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Button,
} from 'react-native';

function Home(props) {
    const focused = useIsFocused();
    const [image] = useState(() => require('../assets/red-blue-gradient.jpg'))
    const [state, setState] = useState(() => {
        return {
            loading: true,
            data: [],
        }
    });

    useEffect(() => {
        inactiveElevators();
    }, [])

    useEffect(() => {
        inactiveElevators();
    }, [focused])

    function inactiveElevators() {
        fetch('https://rest-api-burroughs.herokuapp.com/api/elevators/NotActive')
            .then((result) => result.json())
            .then((resultJson) => {
                setState(() => {
                    return {
                        loading: false,
                        data: resultJson,
                    }
                })
            })
    }

    const renderElevator = ({ item }) => {
        const info = {
            id: item.id,
            serialNumber: item.serial_number,
            status: item.status,
        };

        return (
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.elevator}>
                    <TouchableOpacity
                        style={styles.elevatorButton}
                        onPress={() => props.navigation.navigate('Details', {item: info})}>
                            <Text style={styles.text}>
                                Elevator ID: {item.id}, Status: {item.status}, Serial Number: {item.serial_number}
                            </Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={state.data}
                renderItem={renderElevator}
                keyExtractor={(item) => item.id}
            />
            <Button
                style={styles.logoutButton}
                onPress={() => 
                    props.navigation.popToTop()}
                title='Logout'
            />
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    elevator: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    },
    elevatorButton: {
        backgroundColor: '#949990',
        borderRadius: 5,
        padding: 10,
        margin: 20,
    },
    logoutButton: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 10,
        margin: 20,
        color: '#eee',
    },
});
