import React from "react";
import colors from "../../../constants/colors";
import { View, StyleSheet } from "react-native";

export default function ProgressBar(props) {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.completed,
          {
            width: `${props.progress * 100}%`,
          },
        ]}
      >
        {props.progress !== 0 ? <View style={styles.sharp}></View> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 13,
    backgroundColor: colors.progressBar.incomplete,
    borderRadius: 20,
    marginTop: 5,
    overflow: "hidden",
  },
  completed: {
    width: "80%",
    height: "100%",
    backgroundColor: colors.progressBar.completed,
    borderRadius: 40,
  },
  sharp: {
    height: "100%",
    width: 25,
    backgroundColor: colors.progressBar.completed,
    top: -2,
    position: "absolute",
    right: -10,
    transform: [
      {
        rotate: "-45deg",
      },
    ],
  },
});
