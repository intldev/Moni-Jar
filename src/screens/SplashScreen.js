import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const SplashScreen = () => (
  <View style={styles.container}>
    <Text>This is splash screen</Text>
  </View>
);

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "grey",
    padding: "30%",
  },
});
