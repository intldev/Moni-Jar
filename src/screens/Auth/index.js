import React from "react";
import { Text, StyleSheet, Image, StatusBar, ScrollView } from "react-native";

// constants
import colors from "constants/colors";

// components
import Background from "./components/Background";
import Button from "cpts/base/Button";

// logo
import Logo from "assets/images/logoLightO.png";

export default function Auth(props) {
  const { navigation } = props;

  return (
    <>
      <StatusBar backgroundColor={"transparent"} translucent />
      <Background />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.text}>PUT IT IN THE JAR</Text>
        <Button
          title="SIGN IN"
          containerStyles={styles.signinButton}
          onPress={() => {
            navigation.navigate("SigninOptions");
          }}
        />
        <Button
          title="SIGN UP"
          containerStyles={styles.signupButton}
          textStyles={styles.signupButtonText}
          onPress={() => {
            navigation.navigate("SignupOptions");
          }}
        />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    resizeMode: "contain",
    maxHeight: 100,
  },
  text: {
    marginTop: 30,
    letterSpacing: 3,
    fontFamily: "Calibre-SemiBold",
  },
  signupButton: {
    backgroundColor: colors.dark,
    marginTop: 18,
  },
  signupButtonText: {
    color: colors.primary,
  },
  signinButton: {
    marginTop: 50,
  },
});
