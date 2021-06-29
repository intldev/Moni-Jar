import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import LinearGradient from "react-native-linear-gradient";

// constants
import colors from "../../constants/colors";
import Footer from "./components/Footer";
import ListItem from "./components/ListItem";

const data = [
  {
    name: "Denis Renoylds",
    notification: "added to the",
    jar: "Mom's 50th Bday Jar",
    icon: "bee",
    description: "",
    isProgress: true,
    progress: 0.9,
  },
  {
    name: "Denis Renoylds",
    notification: "added to the",
    jar: "Mom's 50th Bday Jar",
    icon: "bee",
    description: "",
    isProgress: true,
    progress: 0.9,
  },
  {
    name: "Denis Renoylds",
    notification: "added to the",
    jar: "Mom's 50th Bday Jar",
    icon: "bee",
    description: "",
    isProgress: true,
    progress: 0.3,
  },
  {
    name: "Denis Renoylds",
    notification: "added to the",
    jar: "Mom's 50th Bday Jar",
    icon: "bee",
    description: "",
    isProgress: true,
    progress: 0.9,
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => <ListItem item={item} />;
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {data?.length > 0 ? (
          <LinearGradient
            colors={[colors.blue, "#2EC4FF00"]}
            style={[styles.shortGradient]}
          />
        ) : null}
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingVertical: 20,
          }}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.navigator,
  },
  contentContainer: {
    flex: 3,
  },
  shortGradient: {
    width: "100%",
    height: 3,
    position: "absolute",
    zIndex: 9999,
  },
});
