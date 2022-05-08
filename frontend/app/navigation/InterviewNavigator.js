import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InternshipDetailsScreen from '../screens/InternshipDetailsScreen';
import InterviewScreen from '../screens/InterviewScreen';

const Stack = createStackNavigator();

const InterviewNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Interview" component={InterviewScreen}/>
        <Stack.Screen name="InternshipDetails" component={InternshipDetailsScreen} />
    </Stack.Navigator>
);

export default InterviewNavigator;