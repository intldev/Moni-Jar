import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import DrawerNavigator from "./DrawerNavigator";
import Auth from "../screens/Auth";
import SplashScreen from "../screens/SplashScreen";
import SignupOptions from "../screens/Auth/components/SignupOptions";
import SignupEmail from "../screens/Auth/components/SignupEmail";
import SigninEmail from "../screens/Auth/components/SigninEmail";
import useAuth from "../utils/hooks/useAuth";

import { ApolloProvider } from "@apollo/client";
import useApolloClient from "../utils/hooks/useApolloClient";

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isInitializing, user] = useAuth();
  const client = useApolloClient(user);

  if (isInitializing) return null;

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={user ? "Drawer" : "Auth"}
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
          <Stack.Screen name="SigninEmail" component={SigninEmail} />
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ title: "Splash", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default AppNavigator;
