import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    email: Yup.string().email().label("Email"),
    date: Yup.date().required().label("Date"),
    description: Yup.string().label("Description"),
    status: Yup.object().required().nullable().label("Status")
});

const statuses = [
    { label: "Applied", value: 1},
    { label: "Interview", value: 2},
    { label: "Denied", value: 3},
    { label: "Accepted", value: 4},
];

function InternshipEditScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    name: "",
                    email: "",
                    date: "",
                    desciption: "",
                    status: null,
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField maxLength={255} name="name" placeholder="Name" />
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Add" />          
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});

export default InternshipEditScreen;

