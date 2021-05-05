import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// custom drawer component
import CustomDrawer from '../commonComponents/CustomDrawer';

// screens
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    )
}