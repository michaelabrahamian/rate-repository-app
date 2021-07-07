import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  heading: {
    color: "white",
    fontSize: 24,
    marginBottom: 8,
    padding: 10,
  },
});

const AppBarText = ({ title }) => <Text style={styles.heading}>{title}</Text>;

const AppBarTab = ({ title, link, onPress }) =>
  onPress ? (
    <Pressable>
      <AppBarText title={title} />
    </Pressable>
  ) : (
    <Link to={link}>
      <AppBarText title={title} />
    </Link>
  );

export default AppBarTab;
