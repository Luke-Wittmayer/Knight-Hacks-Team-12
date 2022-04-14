import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name = "Applied"/>
        <Tab.Screen name = "Interview"/>
        <Tab.Screen name = "Accepted"/>
        <Tab.Screen name = "Denied"/>
    </Tab.Navigator>
);

export default AppNavigator;