import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  const submitHandler = () => {
    if (text.length > 0) {
      addTodo(text);
      setText("");
    } else {
      Alert.alert("OOPS!", "You can't add an empty todo, you lazy cat!", [
        { text: "understood!" },
      ]);
    }
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="new todo..."
        onChangeText={changeHandler} // it receives input's value automatically so we don't have to call it like that: (val) => changeHandler(val)
      />
      <Button onPress={submitHandler} title="add todo" color="#442266" />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginBottom: 40,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#442266",
  },
});

export default Form;
