import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import axios from 'axios';

import Screen from '../components/Screen';
import {AppForm, AppFormField, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label("Username"),
    password: Yup.string().required().min(4).label("Password"),
    confirmPassword: Yup.string().required().oneOf([Yup.ref('password'), null], 'Passwords must match.').label("Confirm Password")
})

function RegisterScreen(props) {
    function onSubmit(values){
        axios.post("http://localhost:3000/api/v1/internships/signup",{
            username: values.username,
            password: values.password,
        })
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.error(error);
        })
    }

    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{ username: '', password: '', confirmPassword: '',}}
                onSubmit ={onSubmit}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    //keyboardType="email-address"
                    name="username"
                    placeholder="Username"
                    textContentType="username"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Register" />          
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default RegisterScreen;