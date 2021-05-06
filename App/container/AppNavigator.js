import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';

// screens
import Auth from '../screens/Auth';
import SignupOptions from '../screens/Auth/components/SignupOptions';
import SignupEmail from '../screens/Auth/components/SignupEmail';

const Stack = createStackNavigator();

const AppNavigator = () => {

  const navigation = <NavigationContainer >
    <Stack.Navigator
      initialRouteName="Auth"
      headerMode="none"
    >
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="SignupOptions" component={SignupOptions} />
      <Stack.Screen
        name="SigninOptions"
        component={SignupOptions}
        initialParams={{ signin: true }}
      />
      <Stack.Screen name="SignupEmail" component={SignupEmail} />
      <Stack.Screen name="Splash" component={SplashScreen} options={{ title: "Splash", headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  return navigation;
}

export default AppNavigator;
