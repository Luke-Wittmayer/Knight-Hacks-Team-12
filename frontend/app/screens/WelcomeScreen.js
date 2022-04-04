import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/banner.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text>Internship Tracker</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#fc5c65",
    },
    logo:{
        width: 170,
        height: 170,
    },
    logoContainer:{
        position: "absolute",
        top: 150,
        alignItems: "center",
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: "#4ecdc4",
    },
});

export default WelcomeScreen;