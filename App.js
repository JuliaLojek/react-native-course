import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TITLE</Text>
      </View>
      <View style={styles.body}>
        <Text>text text text text</Text>
        <Text>text text text text</Text>
        <Text>text text text text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  body: {
    backgroundColor: "yellow",
    padding: 40,
    height: "100%",
  }
});
