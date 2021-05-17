import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { calibre13 } from "../../../constants/typography";

export default function ListItem(props) {
  const { title, image } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={image} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  image: {
    height: 16,
    width: 16,
  },
  text: {
    ...calibre13,
    color: colors.light,
    textTransform: "capitalize",
    marginLeft: 15,
  },
});
