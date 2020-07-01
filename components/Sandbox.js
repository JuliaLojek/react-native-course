import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "space-evenly",
    // alignItems: "flex-end",
    paddingTop: 40,
    backgroundColor: "#aa8844",
  },
  boxOne: {
    flex: 3,
    backgroundColor: "#aaffbb",
    padding: 10,
  },
  boxTwo: {
    flex: 1,
    backgroundColor: "#ccdd88",
    padding: 10,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "#55ffbb",
    padding: 10,
  },
  boxFour: {
    flex: 1,
    backgroundColor: "#99dd22",
    padding: 10,
  },
});

export default Sandbox;