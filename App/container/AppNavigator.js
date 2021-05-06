import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {

  const navigation = <NavigationContainer >
    <Stack.Navigator
      initialRouteName="Drawer"
      headerMode="none"
    >
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Splash" component={SplashScreen} options={{ title: "Splash", headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  return navigation;
}

export default AppNavigator;
