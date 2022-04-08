import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")}/>

            <Formik
                initialValues={{ username: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                { ({ handleChange, handleSubmit, errors}) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="account"
                            //keyboardType="email-address"
                            onChangeText={handleChange("username")}
                            placeholder="Username"
                            textContentType="username"
                        />
                        <ErrorMessage error={errors.username}/>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                        />
                        <ErrorMessage error={errors.password}/>
                        <AppButton title="Login" onPress={handleSubmit}/>              
                    </>
                )}
            </Formik>
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