import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "make coffee", key: "1" },
    { text: "drink that coffee", key: "2" },
    { text: "wash the coffee mug", key: "3" },
  ]);

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <Text>{item.text}</Text>}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
