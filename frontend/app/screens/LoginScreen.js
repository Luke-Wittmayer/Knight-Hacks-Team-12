import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                //keyboardType="email-address"
                onChangeText={text => setUsername(text)}
                placeholder="Username"
                textContentType="username"
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                secureTextEntry
                textContentType="password"
            />
            <AppButton title="Login" onPress={() => console.log(username, password)}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
})

export default LoginScreen;