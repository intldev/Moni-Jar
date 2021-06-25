import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDebounce } from "use-debounce";
import colors from "../../constants/colors";

// graphql
import { useLazyQuery } from "@apollo/client";
import { SEARCH_USERS } from "../../constants/queries";

// components
import TextField from "../../cpts/base/TextField";
import Bud from "./components/Bud";
import LoadingIndicator from "../../cpts/base/LoadingIndicator";
import HeaderBud from "./components/HeaderBud";
import Button from "../../cpts/base/Button";

const avtarColors = {
  0: colors.primary,
  1: colors.progressBar.completed,
  2: colors.light,
  3: colors.fbBlue,
  4: colors.progressBar.completed,
  5: colors.progressBar.incomplete,
  6: colors.blue,
  7: colors.fbBlue,
  8: colors.progressBar.completed,
};

const selectedUsersRow1 = [0, 1, 2, 3, 4];
const selectedUsersRow2 = [5, 6, 7, 8];

export default function AddBuds() {
  const scrollRef = useRef(null);
  const [searchUser, { data, loading }] = useLazyQuery(SEARCH_USERS);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const [value] = useDebounce(searchQuery, 1000);

  const filteredUsers = data?.searchUsers?.nodes?.filter(
    ({ id: id1 }) => !selectedUsers.some(({ id: id2 }) => id2 === id1),
  );

  useEffect(() => {
    if (value) {
      searchUser({
        variables: {
          input: value,
        },
      });
    }
  }, [value, searchUser]);

  return (
    <>
      <View style={[styles.container]}>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          ref={scrollRef}
        >
          <View style={styles.allBudContainer}>
            <View style={styles.budRow}>
              {selectedUsersRow1?.map((userIndex, index) => {
                if (selectedUsers[userIndex]) {
                  return (
                    <HeaderBud
                      key={index}
                      title={
                        selectedUsers[userIndex]?.firstName[0] +
                        selectedUsers[userIndex]?.lastName[0]
                      }
                      color={avtarColors[index]}
                    />
                  );
                } else
                  return (
                    <HeaderBud
                      key={index}
                      title={""}
                      color={avtarColors[index]}
                    />
                  );
              })}
            </View>
            <View
              style={[
                styles.budRow,
                {
                  marginTop: -40,
                },
              ]}
            >
              {selectedUsersRow2?.map((userIndex, index) => {
                if (selectedUsers[userIndex]) {
                  return (
                    <HeaderBud
                      key={index}
                      title={
                        selectedUsers[userIndex]?.firstName[0] +
                        selectedUsers[userIndex]?.lastName[0]
                      }
                      color={avtarColors[index]}
                    />
                  );
                } else
                  return (
                    <HeaderBud
                      key={index}
                      title={""}
                      color={avtarColors[index]}
                    />
                  );
              })}
            </View>
          </View>
          <TextField
            label="Name Your Bud"
            textInputProps={{
              value: searchQuery,
              onChangeText: text => {
                setSearchQuery(text);
              },
            }}
          />
          <View style={styles.divider} />
          {!loading &&
            searchQuery !== "" &&
            filteredUsers &&
            filteredUsers.map((user, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={styles.budContainer}
                  onPress={() => {
                    setSelectedUsers([...selectedUsers, { ...user }]);
                    setSearchQuery("");
                    scrollRef?.current?.scrollTo({
                      x: 0,
                      y: 0,
                      animated: true,
                    });
                  }}
                >
                  <Bud title={user?.firstName[0] + user?.lastName[0]} />
                  <View style={styles.budDetailContainer}>
                    <Text style={styles.budName}>
                      {user?.firstName} {user?.lastName}
                    </Text>
                    {/* <Text style={[styles.budName, styles.budUsername]}> // used for displaying username
                      @{user?.userName}
                    </Text> */}
                  </View>
                </TouchableOpacity>
              );
            })}
          {loading ? (
            <LoadingIndicator
              isLoading={true}
              activityProps={{
                color: colors.blue,
              }}
            />
          ) : null}
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: colors.dark,
        }}
      >
        <Button title="ADD BUDS" containerStyles={styles.button} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: colors.dark,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 90,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: colors.light,
    opacity: 0.11,
    marginBottom: 30,
  },
  budContainer: {
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    marginBottom: 16,
  },
  budDetailContainer: {
    flex: 1,
  },
  budName: {
    fontFamily: "Calibre-SemiBold",
    fontSize: 17,
    lineHeight: 20,
    color: colors.light,
  },
  // budUsername: {
  //   fontFamily: "Calibre",
  //   fontSize: 12,
  // },
  allBudContainer: {
    width: "100%",
    marginBottom: 23,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  budRow: {
    flexDirection: "row",
  },
  button: {
    backgroundColor: colors.blue,
    width: 205,
    alignSelf: "center",
    marginTop: 10,
  },
});
