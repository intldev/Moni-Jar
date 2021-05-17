import React from "react";
import { View, SafeAreaView, StatusBar, StyleSheet } from "react-native";

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const MyStatusBar = ({ backgroundColor, ...props }) => {
  return (
    <View style={[styles.statusBar, { backgroundColor }]}>
      <SafeAreaView>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </SafeAreaView>
    </View>
  );
};

export default MyStatusBar;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
