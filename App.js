import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("...");
  const [age, setAge] = useState("...");
  // const [person, setPerson] = useState({ name: "Mario", age: 26 });

  // const clickHandler = () => {
  //   setName(name === "Julia" ? "Fred" : "Julia");
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>TITLE</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>
          My name is {name} and I am {age} years old.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="enter your name"
          onChangeText={(value) => setName(value || "...")}
        />
        <TextInput
          style={styles.input}
          placeholder="enter your age"
          onChangeText={(value) => setAge(value || "...")}
        />
        {/* <View style={styles.button}>
          <Button title="set your name" color="#DD7777" onPress={clickHandler} />
        </View> */}
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
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    marginTop: 20,
    paddingHorizontal: 8,
    height: 40,
  },
  button: {
    marginVertical: 20,
  },
});
