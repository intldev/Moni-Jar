import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Hexagon from "../../../cpts/base/Hexagon";
import colors from "../../../constants/colors";

export default function HeaderBud(props) {
  const { title, color } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.hexagonContainer]}>
        <Hexagon
          pathProps={{
            fill: title && color ? color : "transparent",
            stroke: !title ? colors.secondary.grey : "transparent",
          }}
        />
        <Text style={styles.avtarText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 85,
    width: 60,
  },
  hexagonContainer: {
    height: 85,
    width: 60,
    position: "absolute",
    justifyContent: "center",
  },
  avtarText: {
    fontSize: 12,
    alignSelf: "center",
    position: "absolute",
    fontFamily: "Calibre-SemiBold",
    color: colors.dark,
  },
});
