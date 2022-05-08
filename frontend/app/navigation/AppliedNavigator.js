import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppliedScreen from '../screens/AppliedScreen';
import InternshipDetailsScreen from '../screens/InternshipDetailsScreen';
import InterviewScreen from '../screens/InterviewScreen';

const Stack = createStackNavigator();

const AppliedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Applied" component={AppliedScreen}/>
        <Stack.Screen name="InternshipDetails" component={InternshipDetailsScreen} />
    </Stack.Navigator>
);

export default AppliedNavigator;