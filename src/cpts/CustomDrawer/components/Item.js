import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { calibre13 } from "../../../constants/typography";

export default function Item(props) {
  const { title = "" } = props;

  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    ...calibre13,
    marginVertical: 15,
    color: colors.light,
  },
  container: {
    marginVertical: 30,
    alignItems: "center",
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light,
  },
});
