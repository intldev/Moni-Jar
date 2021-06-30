import React from "react";
import colors from "../../../constants/colors";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

// components
import ProgressBar from "./ProgressBar";
import Hexagon from "../../../cpts/base/Hexagon";
import moment from "moment";

const baseHeight = 95;

export default function ListItem(props) {
  const { item, isJar = false, onPress } = props;

  const {
    timeTypeText = isJar ? (item.isAdmin ? "Jar Bearer" : "Honi Bee") : "",
    progressText = "",
    persons = isJar ? item?.jar?.jarMembershipsByJarId?.nodes : false,
    icon = isJar ? false : "bee",
    notification = "",
    name = isJar ? item?.jar?.name : "",
    jarText = "",
    daysLeft = isJar
      ? moment(item?.jar?.deadline).diff(moment(), "days")
      : false,
    isProgress = isJar ? true : false,
    progress = isJar ? 0.5 : 0,
  } = item;

  const avtarColors = {
    0: colors.primary,
    1: colors.progressBar.completed,
    2: colors.light,
    3: colors.fbBlue,
    4: colors.progressBar.completed,
    5: colors.progressBar.incomplete,
    6: colors.blue,
    7: colors.fbBlue,
    8: colors.primary,
    9: colors.progressBar.incomplete,
    10: colors.blue,
  };

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={onPress}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/hexa.png")}
            style={styles.hexaInner}
          />
          <Image
            source={require("../../../assets/images/lightBlue.png")}
            style={styles.hexa}
          />
          {persons ? (
            <View style={styles.avtaarContainer}>
              {persons.map((person, index) => {
                return (
                  <View
                    style={[styles.hexagonContainer, getAvtarStyles(index)]}
                    key={index}
                  >
                    <Hexagon
                      pathProps={{
                        fill: avtarColors[index],
                      }}
                    />
                    <Text style={styles.avtarText}>
                      {person?.user?.firstName[0]}
                      {person?.user?.lastName[0]}
                    </Text>
                  </View>
                );
              })}
            </View>
          ) : null}
          {icon ? (
            icon === "bee" ? (
              <Image
                source={require("../../../assets/images/beeBadge.png")}
                style={styles.badge}
              />
            ) : (
              <Image
                source={require("../../../assets/images/bearerBadge.png")}
                style={styles.badge}
              />
            )
          ) : null}
        </View>
        <View style={[styles.contentContainer]}>
          <Text style={styles.title} numberOfLines={1}>
            <Text style={[styles.bold, styles.capitalize]}>{name}</Text>{" "}
            {notification} <Text style={styles.bold}>{jarText}</Text>
          </Text>
          <Text style={styles.title}>{timeTypeText ? timeTypeText : "2h"}</Text>
          {isProgress ? (
            <ProgressBar progress={progress} progressText={progressText} />
          ) : null}
          <View
            style={[
              styles.iconContainer,
              {
                marginTop: 5,
              },
            ]}
          >
            {daysLeft ? (
              <Text style={styles.title}>
                Days left: <Text style={styles.daysLeftValue}>{daysLeft}</Text>
              </Text>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </>
  );

  function getAvtarStyles(index) {
    let styles;
    if (index === 0) {
      styles = {
        left: 25, // 2nd row 2
      };
    } else if (index === 1) {
      styles = {
        left: 42, // 2nd row 3
      };
    } else if (index === 2) {
      styles = {
        left: 33.5, // 1st row 2
        top: 18,
      };
    } else if (index === 3) {
      styles = {
        left: 33.5, // 3rd row 2
        top: 47,
      };
    } else if (index === 4) {
      styles = {
        left: 16.5, // 3rd row 1
        top: 47,
      };
    } else if (index === 5) {
      styles = {
        left: 50.5, // 3rd row 3
        top: 47,
      };
    } else if (index === 6) {
      styles = {
        left: 16.5,
        top: 18, // 1st row 1
      };
    } else if (index === 7) {
      styles = {
        left: 50.5,
        top: 18, // 1st row 3
      };
    } else if (index === 8) {
      styles = {
        left: 59, // 2nd row 4
      };
    } else if (index === 9) {
      styles = {
        left: 8, // 2nd row 1
      };
    } else if (index === 10) {
      styles = {
        left: 25, // 4rth row 1
        top: 61.5,
      };
    }
    return styles;
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: baseHeight,
    backgroundColor: colors.dark,
    alignSelf: "center",
    borderRadius: 50,
    marginBottom: 25,
  },
  hexaInner: {
    height: baseHeight,
    width: baseHeight,
    resizeMode: "contain",
    position: "absolute",
  },
  hexa: {
    height: baseHeight,
    width: baseHeight,
    resizeMode: "contain",
    position: "absolute",
  },
  badge: {
    height: 35,
    width: 35,
    resizeMode: "contain",
    marginLeft: 10,
  },
  imageContainer: {
    marginLeft: -11.5,
  },
  contentContainer: {
    paddingLeft: baseHeight,
    flex: 1,
    height: "100%",
    position: "absolute",
    width: "100%",
    paddingVertical: 5,
    paddingRight: 20,
    justifyContent: "center",
  },
  title: {
    color: colors.light,
    fontFamily: "Calibre",
  },
  bold: {
    fontFamily: "Calibre-SemiBold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  daysLeftValue: {
    color: colors.progressBar.completed,
  },
  avtaarContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: baseHeight,
    width: baseHeight,
    position: "absolute",
  },
  hexagonContainer: {
    height: 30,
    width: 30,
    position: "absolute",
    justifyContent: "center",
  },
  avtarText: {
    fontSize: 9,
    alignSelf: "center",
    position: "absolute",
    fontFamily: "Calibre-SemiBold",
  },
  capitalize: {
    textTransform: "capitalize",
  },
});
