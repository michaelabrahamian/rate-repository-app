import React from "react";
import { View, StyleSheet } from "react-native";
import RepoValueCard from "./RepoValueCard";

const styles = StyleSheet.create({
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

const RepoFooter = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => (
  <View style={styles.cardFooter}>
    <RepoValueCard label="Stars" value={stargazersCount} />
    <RepoValueCard label="Forks" value={forksCount} />
    <RepoValueCard label="Reviews" value={reviewCount} />
    <RepoValueCard label="Rating" value={ratingAverage} />
  </View>
);

export default RepoFooter;
