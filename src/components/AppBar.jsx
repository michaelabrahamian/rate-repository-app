import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import useAuthorizedUser from "../hooks/useAuthorizedUser";
import SignOutTab from "./SignOutTab";

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
  // check if user is logged in
  const { authorizedUser } = useAuthorizedUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab title="Repositories" link="/" />
        {authorizedUser ? (
          <SignOutTab />
        ) : (
          <AppBarTab title="Sign in" link="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
