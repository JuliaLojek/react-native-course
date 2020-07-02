import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoItem = ({ item, removeTodo }) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <TouchableOpacity onPress={() => removeTodo(item.key)}>
          <AntDesign
            name="delete"
            size={18}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderColor: "#442266",
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 6,
  },
});

export default TodoItem;
