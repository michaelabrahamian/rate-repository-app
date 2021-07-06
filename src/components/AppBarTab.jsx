import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
  },
  heading: {
    color: "white",
    fontSize: 24,
    marginBottom: 8,
    padding: 10,
  },
});

const AppBarTab = ({ title }) => (
  <Pressable>
    <Text style={styles.heading}>{title}</Text>
  </Pressable>
);

export default AppBarTab;
