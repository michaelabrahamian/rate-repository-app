import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";

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
  scroll: {
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab title="Repositories" link="/" />
        <AppBarTab title="Sign in" link="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
