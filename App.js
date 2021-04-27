import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navigator from './routes/stackNavigator'

export default function App() {
  return (
    <Navigator/>
  );

    // <View style={styles.container}>
    //   <Text>TEST</Text>
    //   <Image style={styles.background} source={require('./assets/R2icon.png')} />
    //   <StatusBar style="auto" />
    // </View>
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   background: {
//     height: '95%',
//     width: '95%',
//   },
// });
