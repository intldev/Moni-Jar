import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// svgs
import UserProfile from "../../../assets/svgs/UserProfile";
import AngleDown from "../../../assets/svgs/AngleDown";

// images
import Logo from "../../../assets/images/logo.png";

// constnats
import colors from "../../../constants/colors";

export default function Navbar(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Image source={Logo} resizeMode="contain" style={styles.logoImage} />
      <TouchableOpacity style={styles.detailContainer} onPress={openDrawer}>
        <UserProfile />
        <Text style={styles.userName}>Rachel Caires</Text>
        <AngleDown size={15} color={colors.black} />
      </TouchableOpacity>
    </View>
  );

  function openDrawer() {
    navigation.openDrawer();
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
  },
  logoImage: {
    height: 50,
    width: 130,
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },
  userName: {
    fontSize: 19,
    marginHorizontal: 12,
    fontFamily: "Calibre-SemiBold",
  },
});
