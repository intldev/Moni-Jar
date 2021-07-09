import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BudComb from "../../../assets/images/budComb.png";

export default function Bud(props) {
  const { title } = props;
  return (
    <View style={[styles.budCombContainer]}>
      <View style={[styles.hexagonContainer]}>
        <Image source={BudComb} style={styles.budComb} />
        <Text style={styles.avtarText}>{title || ""}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  budCombContainer: {
    position: "relative",
    width: 55,
    height: 48,
  },
  hexagonContainer: {
    position: "absolute",
    justifyContent: "center",
  },
  budComb: {
    height: 48,
    width: 43,
    resizeMode: "contain",
  },
  avtarText: {
    fontSize: 21,
    alignSelf: "center",
    position: "absolute",
    fontFamily: "Calibre-SemiBold",
  },
});
