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
import StartJar from "../screens/JarScreen/components/StartJar";
import JarDetail from "../screens/JarScreen/components/JarDetail";
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
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ title: 'Jars', headerShown: false }}
          />
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="SignupOptions" component={SignupOptions} options={{ headerShown: false }}/>
          <Stack.Screen
            name="SigninOptions"
            component={SignupOptions}
            initialParams={{ signin: true }}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SignupEmail" component={SignupEmail} options={{ headerShown: false }}/>
          <Stack.Screen name="SigninEmail" component={SigninEmail} options={{ headerShown: false }}/>
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{ title: "Splash", headerShown: false }}
          />
          <Stack.Screen
            name="StartJar"
            component={StartJar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            title="Jar Details"
            name="JarDetail"
            component={JarDetail}
            options={{ title: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default AppNavigator;
