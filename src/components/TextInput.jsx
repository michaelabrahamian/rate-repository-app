import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.textBorder,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  invalid: { borderColor: theme.colors.invalid },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.invalid, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
