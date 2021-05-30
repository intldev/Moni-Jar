import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import colors from "../../constants/colors";

export default function Button(props) {
  const {
    containerStyles,
    onPress,
    title,
    textStyles,
    isLoading = false,
    activityStyles,
    activityColor,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyles]}
      onPress={isLoading ? null : onPress}
    >
      {isLoading ? (
        <ActivityIndicator
          style={[styles.activityStyles, activityStyles]}
          color={activityColor}
        />
      ) : null}
      <Text style={[styles.text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 47,
    minWidth: 164,
    borderWidth: 2.7,
    borderRadius: 30,
    borderColor: colors.dark,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 20,
    color: colors.dark,
    fontFamily: "Calibre-SemiBold",
  },
  activityStyles: {
    marginRight: 5,
  },
});
