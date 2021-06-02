import React, { useEffect } from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import colors from "../../constants/colors";
import auth from "@react-native-firebase/auth";

// components
import PlusIcon from "../../assets/images/plusIcon.png";
import ListItem from "../HomeScreen/components/ListItem";
import LoadingIndicator from "../../cpts/base/LoadingIndicator";

// images
import jarGraphic from "../../assets/images/jarGraphic.png";

// graphql
import { useQuery } from "@apollo/client";
import { JAR_MEMBERSHIPS } from "../../constants/queries";

export default function JarScreen() {
  const navigation = useNavigation();
  const {
    data: jarMemberships,
    loading,
    refetch,
  } = useQuery(JAR_MEMBERSHIPS, {
    variables: {
      input: auth()?.currentUser?.uid,
    },
  });
  const memberships = jarMemberships?.jarMemberships?.nodes;

  const renderItem = ({ item }) => {
    return (
      <ListItem
        item={item}
        isJar={true}
        onPress={() => {
          navigation.navigate("JarDetail", {
            data: item,
          });
        }}
      />
    );
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      refetch();
    });

    return unsubscribe;
  }, [navigation, refetch]);

  return (
    <View style={styles.container}>
      <LoadingIndicator
        isLoading={loading}
        activityProps={{
          size: "small",
          color: colors.dark,
        }}
      />
      {memberships?.length === 0 ? (
        <View style={styles.emptyContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("StartJar");
            }}
            activeOpacity={0.8}
            style={styles.startJarGraphic}
          >
            <Image
              source={jarGraphic}
              style={[
                styles.startJarGraphic,
                {
                  height: "100%",
                },
              ]}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <View style={styles.listContainer}>
            <FlatList
              data={memberships}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
              contentContainerStyle={{
                paddingVertical: 20,
              }}
            />
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.plusIconContainer}
              onPress={() => {
                navigation.navigate("StartJar");
              }}
            >
              <Image source={PlusIcon} style={styles.plusIcon} />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary.navigator,
  },
  listContainer: {
    flex: 6,
  },
  footerContainer: {
    flex: 2,
  },
  plusIcon: {
    height: 40,
    width: 40,
    resizeMode: "contain",
  },
  plusIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
  },
  emptyContainer: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
  },
  startJarGraphic: {
    resizeMode: "contain",
    height: "60%",
    alignSelf: "center",
  },
});
