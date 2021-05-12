import React, { useEffect } from "react";
import { View, Text } from "react-native";
import styles from "./styles";

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(navigateToLogin, 3000);
  }, []);

  const navigateToLogin = () => {
    console.log("Navigate to Login Screen");
  };

  return (
    <View style={styles.splashScreen}>
      <Text>This is splash screen</Text>
    </View>
  );
};

export default SplashScreen;
