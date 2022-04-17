import React from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import {
    AppForm,
    AppFormField,
    AppFormPicker,
    SubmitButton,
} from "../components/forms";
import StatusPickerItem from "../components/StatusPickerItem";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(1).label("Name"),
    email: Yup.string().email().label("Email"),
    date: Yup.date().required().label("Date"),
    description: Yup.string().label("Description"),
    status: Yup.object().required().nullable().label("Status")
});

const statuses = [
    { label: "Applied", value: 1, backgroundColor: '#45aaf2', icon: "dots-horizontal"},
    { label: "Interview", value: 2, backgroundColor: '#fed330', icon: "chat"},
    { label: "Denied", value: 3, backgroundColor: '#fc5c65', icon: "close"},
    { label: "Accepted", value: 4, backgroundColor: '#26de81', icon: "check"},
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
                <AppFormPicker 
                    items={statuses} 
                    name="Status" 
                    numberOfColumns={2}
                    PickerItemComponent={StatusPickerItem}
                    placeholder="Status" 
                    width="50%" 
                />
                <AppFormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Submit" />          
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

