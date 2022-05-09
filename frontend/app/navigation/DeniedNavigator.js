import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InternshipDetailsScreen from '../screens/InternshipDetailsScreen';
import DeniedScreen from '../screens/DeniedScreen';


const Stack = createStackNavigator();

const DeniedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Denied" component={DeniedScreen}/>
        <Stack.Screen name="InternshipDetails" component={InternshipDetailsScreen} />
    </Stack.Navigator>
);

export default DeniedNavigator;