import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { Link } from "react-router-native";
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

const AppBarTab = ({ title, link }) => (
  <Pressable>
    <Link to={link}>
      <Text style={styles.heading}>{title}</Text>
    </Link>
  </Pressable>
);

export default AppBarTab;
