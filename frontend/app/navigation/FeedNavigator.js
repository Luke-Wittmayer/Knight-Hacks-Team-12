import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Applied" />
        <Stack.Screen name="Interview" />
        <Stack.Screen name="Accepted" />
        <Stack.Screen name="Denied" />
    </Stack.Navigator>
);

export default FeedNavigator;