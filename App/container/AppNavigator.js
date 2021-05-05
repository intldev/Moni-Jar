import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {

  const navigation = <NavigationContainer >
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={SplashScreen} options={{ title: "Splash", headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>

  return navigation;
}

export default AppNavigator;
