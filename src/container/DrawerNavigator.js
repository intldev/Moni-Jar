import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// custom drawer component
import CustomDrawer from "cpts/CustomDrawer";

// screens
import HomeScreen from "screens/HomeScreen";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <CustomDrawer {...props} />}
      drawerStyle={{
        width: "85%",
        height: "85%",
        marginTop: "15%",
        backgroundColor: "transparent",
      }}
      drawerType="front"
      drawerPosition="right"
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}
