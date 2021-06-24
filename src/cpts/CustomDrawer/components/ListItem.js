import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import colors from "../../../constants/colors";
import { calibre13, calibre24 } from "../../../constants/typography";

export default function ListItem(props) {
  const { title, image, onPress, size = "small" } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={[styles.image, size === "large" ? styles.largeImage : null]}
        resizeMode="contain"
        source={image}
      />
      <Text style={[styles.text, size === "large" ? styles.largeText : null]}>
        {title}
      </Text>
    </TouchableOpacity>
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
  largeImage: {
    height: 30,
    width: 30,
  },
  largeText: {
    ...calibre24,
    textTransform: "none",
  },
});
