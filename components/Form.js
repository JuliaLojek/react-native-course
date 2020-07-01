import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  const submitHandler = () => {
    addTodo(text);
    setText("");
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
