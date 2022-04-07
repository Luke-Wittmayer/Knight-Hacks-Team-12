import React from 'react';
import Constants from 'expo-conststants';
import { SafeAreaView, StyleSheet } from 'react-native';

//Importable function for creating a safe screen view
function Screen({ children}) {
    return (
        <SafeAreaView style={styles.screen}>
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight
    }
})

export default Screen;