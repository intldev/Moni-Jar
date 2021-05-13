import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

// constants
import colors from "../../constants/colors";
import Footer from "./components/Footer";
import ListItem from "./components/ListItem";

const data = [
  {
    name: 'Puffin',
    notification: 'commented on the',
    jar: 'Spring Break Jar',
    icon: 'bear',
    description: '"ALMOST THERE. I can\'t wait to get to Canun"',
    isProgress: false,
    progress: 0,
    likes: 10,
    comments: 4
  },
  {
    name: 'Denis Renoylds',
    notification: 'added to the',
    jar: 'Mom\'s 50th Bday Jar',
    icon: 'bee',
    description: '',
    isProgress: true,
    progress: 0.9,
    likes: 10,
    comments: 4
  },
  {
    name: 'Denis Renoylds',
    notification: 'added to the',
    jar: 'Mom\'s 50th Bday Jar',
    icon: 'bee',
    description: '',
    isProgress: true,
    progress: 0.9,
    likes: 10,
    comments: 4
  },
  {
    name: 'Puffin',
    notification: 'commented on the',
    jar: 'Spring Break Jar',
    icon: 'bear',
    description: '"ALMOST THERE. I can\'t wait to get to Canun"',
    isProgress: false,
    progress: 0,
    likes: 10,
    comments: 4
  },
  {
    name: 'Denis Renoylds',
    notification: 'added to the',
    jar: 'Mom\'s 50th Bday Jar',
    icon: 'bee',
    description: '',
    isProgress: true,
    progress: 0.3,
    likes: 10,
    comments: 4
  },
  {
    name: 'Denis Renoylds',
    notification: 'added to the',
    jar: 'Mom\'s 50th Bday Jar',
    icon: 'bee',
    description: '',
    isProgress: true,
    progress: 0.9,
    likes: 10,
    comments: 4
  },
]

export default function HomeScreen(props) {

  const renderItem = ({ item }) => (
    <ListItem item={item} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingVertical: 20
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
    backgroundColor: colors.secondary.navigator
  },
  contentContainer: {
    flex: 3,
  }
})