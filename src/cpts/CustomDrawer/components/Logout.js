import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ListItem from "./ListItem";
import colors from "../../../constants/colors";
import LogoutImage from "../../../assets/images/logout.png";
import CancelImage from "../../../assets/images/incompleteTransfers.png";
import showAlert from "../../../constants/utils/showAlert";
import { logout } from "../../../constants/utils/auth";
import { useNavigation } from "@react-navigation/native";

export default function Logout(props) {
  const { client, setIsLogoutActive } = props;

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.confirmText}>Are you sure?</Text>
      <View style={styles.options}>
        <ListItem
          title="Log out"
          image={LogoutImage}
          size="large"
          onPress={() => {
            client
              .clearStore()
              .then(() => {
                setIsLogoutActive(false);
                props.navigation.closeDrawer();
                logout(navigation);
              })
              .catch(() => {
                showAlert("tryAgain");
              });
          }}
        />
        <ListItem
          title="Cancel"
          image={CancelImage}
          size="large"
          onPress={() => {
            setIsLogoutActive(false);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "68%",
    justifyContent: "center",
    alignItems: "center",
  },
  confirmText: {
    fontSize: 24,
    fontFamily: "Calibre-SemiBold",
    color: colors.light,
  },
  options: {
    marginTop: 15,
  },
});
