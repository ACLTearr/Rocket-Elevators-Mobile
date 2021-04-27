import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../app/views/Home";
import Details from "../app/views/Details";
import SignIn from "../app/views/SignIn";

const stackNavigator = createStackNavigator();

export default Navigator = () => (
    <NavigationContainer>
        <stackNavigator.Navigator>
            <stackNavigator.Screen name='SignIn' component={SignIn} />
            <stackNavigator.Screen name='Home' component={Home} />
            <stackNavigator.Screen name='Details' component={Details} />
        </stackNavigator.Navigator>
    </NavigationContainer>
);