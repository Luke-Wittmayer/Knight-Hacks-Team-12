import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name = "Internships List" component={FeedNavigator}/>
        <Tab.Screen name = "Add Internship"/>
        <Tab.Screen name = "Account"/>
    </Tab.Navigator>
);

export default AppNavigator;