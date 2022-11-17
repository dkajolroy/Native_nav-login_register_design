import { View, StyleSheet, Button, TouchableOpacity, Text } from "react-native";
import React from "react";

export default function CustomButton({ title,onPress }) {
  return (
    <View  style={style.loginButton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={style.button}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  loginButton: {
    width: "85%",
    backgroundColor: "teal",
    borderRadius: 30,
  },
  button: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 10,
  },
});
