import React from "react";
import { View, Image, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// images
import SlideBackImage from "../../../assets/images/slideBack.png";

// constantss
import colors from "../../../constants/colors";

export default function Background(props) {
  const { backgroundColor = colors.primary, showImage = true } = props;
  return (
    <View
      style={[
        styles.background,
        {
          backgroundColor,
        },
      ]}
    >
      <LinearGradient
        colors={[colors.secondary.darkGradient, "transparent"]}
        style={styles.linearGradient}
      />
      {showImage ? (
        <Image source={SlideBackImage} style={styles.sideImage1} />
      ) : null}
      <LinearGradient
        colors={["transparent", colors.secondary.darkGradient]}
        style={[styles.linearGradient, { bottom: 0 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: colors.primary,
  },
  sideImage1: {
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  linearGradient: {
    position: "absolute",
    height: "30%",
    width: "100%",
  },
});
