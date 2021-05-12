import React from "react";
import { View } from "react-native";

// components
import MyStatusBar from "../../cpts/StatusBar";
import Navbar from "./components/Navbar";

// constants
import colors from "../../constants/colors";

export default function HomeScreen(props) {
  const { navigation } = props;
  return (
    <View>
      <MyStatusBar backgroundColor={colors.primary} />
      <Navbar navigation={navigation} />
    </View>
  );
}
