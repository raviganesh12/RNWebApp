import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Animated,
} from "react-native";

export default function App() {
  const { windowHeight } = useWindowDimensions();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const backgroundColorAnim = useRef(new Animated.Value(0)).current;

  function toggleTheme() {
    setIsDarkTheme((prevTheme) => !prevTheme);

    Animated.timing(backgroundColorAnim, {
      toValue: isDarkTheme ? 0 : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }

  const backgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#fff", "#333"],
  });
  const buttonBackgroundColor = isDarkTheme ? "#049" : "#7BF";
  const fontColor = isDarkTheme ? "#fff" : "#000";

  return (
    <Animated.View
      style={[styles.mainContainer, { backgroundColor, height: windowHeight }]}
    >
      <View style={styles.spacingBlock} />
      <TouchableOpacity
        style={[
          styles.themeToggleButton,
          { backgroundColor: buttonBackgroundColor },
        ]}
        onPress={toggleTheme}
      >
        <Text style={[styles.buttonText, { color: fontColor }]}>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spacingBlock: {
    height: 12,
  },
  themeToggleButton: {
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "#fff",
  },
});