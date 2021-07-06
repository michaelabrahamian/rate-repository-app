import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    margin: 15,
    alignItems: "center",
  },
  subHeading: {
    marginBottom: 5,
  },
});

const formatCount = (count) =>
  count < 1000 ? count : `${(count / 1000).toFixed(1)}k`;

const RepoValueCard = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subHeading" style={styles.subHeading}>
        {formatCount(value)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default RepoValueCard;
