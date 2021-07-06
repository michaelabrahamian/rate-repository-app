import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  cardHeader: {
    flexDirection: "row",
    padding: 10,
  },
  languageText: {
    color: "white",
  },
  languageContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 5,
    alignContent: "flex-end",
  },
  cardMainInfo: {
    alignItems: "flex-start",
    flexWrap: "wrap",
    flex: 1,
  },
  marginBottomSpace: {
    marginBottom: 5,
  },
});


const RepoHeader = ({imageUrl, fullName, description, language}) => (
  <View style={styles.cardHeader}>
    <Image style={styles.avatar} source={{ uri: imageUrl }} />

    <View style={styles.cardMainInfo}>
      <Text
        style={styles.marginBottomSpace}
        fontWeight="bold"
        fontSize="subheading"
      >
        {fullName}
      </Text>

      <Text style={styles.marginBottomSpace} color="secondary">
        {description}
      </Text>

      <View style={styles.languageContainer}>
        <Text style={styles.languageText}>{language}</Text>
      </View>
    </View>
  </View>
);

export default RepoHeader;