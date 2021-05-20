import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import DrawerNavigator from "./DrawerNavigator";
import Auth from "../screens/Auth";
import SplashScreen from "../screens/SplashScreen";
import SignupOptions from "../screens/Auth/components/SignupOptions";
import SignupEmail from "../screens/Auth/components/SignupEmail";
import useAuth from "../utils/hooks/useAuth";

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { GRAPHQL_ENDPOINT } from "../constants/config";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigation = (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Drawer" headerMode="none">
          <Stack.Screen name="Drawer" component={DrawerNavigator} />
          <Stack.Screen name="Auth" component={Auth} />
          <Stack.Screen name="SignupOptions" component={SignupOptions} />
          <Stack.Screen
            name="SigninOptions"
            component={SignupOptions}
            initialParams={{ signin: true }}
          />
          <Stack.Screen name="SignupEmail" component={SignupEmail} />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ title: "Splash", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </ApolloProvider>
  );
  return navigation;
};

export default AppNavigator;
