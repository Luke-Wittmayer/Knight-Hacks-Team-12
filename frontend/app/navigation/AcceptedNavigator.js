import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InternshipDetailsScreen from '../screens/InternshipDetailsScreen';
import AcceptedScreen from '../screens/AcceptedScreen';

const Stack = createStackNavigator();

const AcceptedNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Accepted" component={AcceptedScreen}/>
        <Stack.Screen name="InternshipDetails" component={InternshipDetailsScreen} />
    </Stack.Navigator>
);

export default AcceptedNavigator;