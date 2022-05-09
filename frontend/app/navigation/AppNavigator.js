import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppliedNavigator from './AppliedNavigator';
import InternshipEditScreen from '../screens/InternshipEditScreen';
import InterviewNavigator from './InterviewNavigator'
import AcceptedNavigator from './AcceptedNavigator';
import DeniedNavigator from './DeniedNavigator';
import NewInternshipButton from './NewInternshipButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name = "Applied" component={AppliedNavigator} 
        options={{
            tabBarIcon:({ color, size }) => 
            <MaterialCommunityIcons name="dots-horizontal" color={color} size={size}/>}}/>
        <Tab.Screen name = "Interview" component={InterviewNavigator}
        options={{
            tabBarIcon:({ color, size }) => 
            <MaterialCommunityIcons name="chat" color={color} size={size}/>}}/>        
        <Tab.Screen name = "Add Internship" component={InternshipEditScreen}
        options={({ navigation }) => ({
            tabBarButton: () => 
            <NewInternshipButton onPress={() => navigation.navigate("Add Internship")}/>,
            tabBarIcon:({ color, size }) => 
            <MaterialCommunityIcons name="plus-circle" color={color} size={size}/>})}/>
        <Tab.Screen name = "Accepted" component={AcceptedNavigator}
        options={{
            tabBarIcon:({ color, size }) => 
            <MaterialCommunityIcons name="check" color={color} size={size}/>}}/>
        <Tab.Screen name = "Denied" component={DeniedNavigator}
        options={{
            tabBarIcon:({ color, size }) => 
            <MaterialCommunityIcons name="close" color={color} size={size}/>}}/>

    </Tab.Navigator>
);

export default AppNavigator;