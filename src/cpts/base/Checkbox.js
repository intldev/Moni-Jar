import React, { useRef, useCallback, useEffect } from "react";
import {
  Easing,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import colors from "../../constants/colors";
import Svg, { Path } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const size = 35;

export default function AppCheckbox(props) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const {
    showText = true,
    text,
    textStyles,

    containerStyles,
    pathProps,

    value = false,
    onValueChange,
  } = props;

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 350,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 350,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    if (value) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [value, fadeIn, fadeOut]);

  const color = fadeAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.secondary.grey, colors.secondary.checkboxBlue],
  });

  return (
    <View style={[styles.container, containerStyles]}>
      <TouchableOpacity
        style={{
          height: size * 1.5,
          width: size * 1.5,
        }}
        activeOpacity={1}
        onPress={() => {
          onValueChange(!value);
        }}
      >
        <Svg viewBox="30 0 256 256">
          <AnimatedPath
            d="M197.928 172.13l-70.102 40.474-70.102-40.473V91.184l70.102-40.474 70.102 40.474z"
            strokeMiterlimit={20}
            strokeDasharray="none"
            stroke={colors.light}
            fill={color}
            strokeWidth={5}
            {...pathProps}
          />
        </Svg>
      </TouchableOpacity>
      {showText ? (
        <Text style={[styles.checkText, textStyles]}>{text}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkText: {
    color: colors.light,
    lineHeight: 19,
    fontSize: 15,
    flex: 1,
    fontFamily: "Calibre",
  },
});
