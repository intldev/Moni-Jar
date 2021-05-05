import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// screens
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    )
}