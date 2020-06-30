import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    borderColor: "#775599",
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
  },
});

export default TodoItem;
