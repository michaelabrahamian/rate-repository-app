import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../theme";
import RepoFooter from "./RepoFooter";
import RepoHeader from "./RepoHeader";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.repositoryListItemBackground,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  marginBottomSpace: {
    marginBottom: 5,
  },
});

const RepositoryListItem = ({
  fullName,
  description,
  language,
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
  imageUrl,
}) => (
  <View style={styles.container}>
    <RepoHeader fullName={fullName} description={description} language={language} imageUrl={imageUrl} />    
    <RepoFooter stargazersCount={stargazersCount} forksCount={forksCount} reviewCount={reviewCount} ratingAverage={ratingAverage} />
  </View>
);

export default RepositoryListItem;
