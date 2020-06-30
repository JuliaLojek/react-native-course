import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>my todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    padding: 20,
    paddingTop: 30,
    backgroundColor: "#442266",
  },
  title: {
    color: "#fff",
    fontSize: 24,
  },
});

export default Header;
