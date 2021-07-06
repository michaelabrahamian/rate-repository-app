import React from "react";
import { FlatList, View, StyleSheet } from "react-native";

import useRepositories from "../hooks/useRepositories";
import RepositoryListItem from "./RepositoryListItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => (
  <RepositoryListItem
    fullName={item.fullName}
    description={item.description}
    language={item.language}
    stargazersCount={item.stargazersCount}
    forksCount={item.forksCount}
    reviewCount={item.reviewCount}
    ratingAverage={item.ratingAverage}
    imageUrl={item.ownerAvatarUrl}
  />
);

const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

export default RepositoryList;
