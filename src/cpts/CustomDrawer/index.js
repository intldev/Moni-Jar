import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";

// constants
import colors from "../../constants/colors";

// components
import UserDetails from "./components/UserDetails";
import Item from "./components/Item";
import ListItem from "./components/ListItem";

// images
import Search from "../../assets/images/search.png";
import ActiveJars from "../../assets/images/activeJars.png";
import Notification from "../../assets/images/notification.png";
import PastTransfers from "../../assets/images/pastTransfers.png";
import Rewards from "../../assets/images/rewards.png";
import Settings from "../../assets/images/settings.png";
import IncompleteTransfers from "../../assets/images/incompleteTransfers.png";
import GetHelp from "../../assets/images/getHelp.png";

export default function CustomDrawerContent(props) {
  const listItems = [
    {
      title: "search",
      image: Search,
    },
    {
      title: "notifications",
      image: Notification,
    },
    {
      title: "Incomplete Transfers",
      image: IncompleteTransfers,
    },
    {
      title: "Past Transfers",
      image: PastTransfers,
    },
    {
      title: "Active Jars",
      image: ActiveJars,
    },
    {
      title: "Rewards",
      image: Rewards,
    },
    {
      title: "Settings",
      image: Settings,
    },
    {
      title: "Get Help",
      image: GetHelp,
    },
  ];
  return (
    <DrawerContentScrollView {...props} style={styles.drawerScrollView}>
      <View style={styles.container}>
        <UserDetails />
        <Item title="X Jars Active" />
        {listItems?.map((item, index) => {
          return (
            <ListItem title={item?.title} key={index} image={item.image} />
          );
        })}
        <Item title="Make a transfer" />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  drawerScrollView: {
    backgroundColor: colors.dark,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
});
