import { white } from "ansi-colors";
import React from "react";
import { StyleSheet, Pressable } from "react-native";
import theme from "../theme";
import Text from "./Text";

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    padding: 15,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    backgroundColor: "#025bc0",
  },
});

const Button = ({ title, onPress }) => (
  <Pressable
    style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
);

export default Button;
