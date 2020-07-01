import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Form from "./components/Form";
import Sandbox from "./components/Sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "make coffee", key: "1" },
    { text: "drink that coffee", key: "2" },
    { text: "wash the coffee mug", key: "3" },
  ]);

  const removeTodo = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [...prevTodos, { text: text, key: Math.random().toString() }];
    });
  };

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <Header />
    //     <View style={styles.content}>
    //       <Form addTodo={addTodo} />
    //       <Text style={styles.info}>click a todo to remove it</Text>
    //       <View style={styles.list}>
    //         <FlatList
    //           data={todos}
    //           renderItem={({ item }) => (
    //             <TodoItem item={item} removeTodo={removeTodo} />
    //           )}
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>

    <Sandbox />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  info: {
    textAlign: "center",
  },
});
