import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import { data } from "@/data/todos";

const todo = () => {
  const [todos, setTodos] = useState(data.sort((a, b) => b.id - a.id));
  const [text, setText] =useState('')

  const addTodo = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[0].id + 1 : 1;
      setTodos([{ id:  newId, title: text, completed: false}, ...todos])
      setText('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo
    ))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  } 

  return (
    <SafeAreaView>
      <View>
        <TextInput />
        <Pressable>
          <Text></Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default todo;

const styles = StyleSheet.create({});
