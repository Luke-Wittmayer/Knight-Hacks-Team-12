import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground 
            blurRadius={10}
            style={styles.background}
            source={require("../assets/banner.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo.png')}/>
                <Text style={styles.title}>Internship Tracker</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate("Login")}/>
                <AppButton title="Register" color="secondary" onPress={() => navigation.navigate("Register")}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
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
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    title:{
        fontFamily: 'Courier',
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
});

export default WelcomeScreen;