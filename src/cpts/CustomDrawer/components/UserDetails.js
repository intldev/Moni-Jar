import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { calibre13 } from "../../../constants/typography";

export default function UserDetails({ firstName }) {
  return (
    <View>
      <Text style={styles.nameText}>Hi, {firstName}</Text>
      <View style={styles.usernameContainer}>
        <Text style={styles.usernameText}>@Rachel-Caires</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  nameText: {
    fontSize: 17,
    color: colors.light,
    fontFamily: "Calibre-SemiBold",
  },
  usernameText: {
    ...calibre13,
    color: colors.light,
  },
  usernameContainer: {
    marginTop: 10,
    flexDirection: "row",
  },
});
