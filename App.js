import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [name, setName] = useState("Julia");
  const [person, setPerson] = useState({ name: "Mario", age: 26 });

  const clickHandler = () => {
    setName(name === "Julia" ? "Fred" : "Julia");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TITLE</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>My name is {name}</Text>
        <Text style={styles.text}>His name is {person.name} and his age is {person.age}</Text>
        <View style={styles.button}>
          <Button title="change my name!" color="#DD7777" onPress={clickHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#DD7777",
    padding: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#FFF",
  },
  body: {
    backgroundColor: "#9FCFBE",
    padding: 40,
    height: "100%",
  },
  text: {
    fontSize: 20,
  },
  button: {
    marginTop: 20,
  },
});
