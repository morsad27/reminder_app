import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const reminders = () => {
  return (
    <View>
      <Text>reminders</Text>
      <Link href="../add-new-reminder">
        <MaterialCommunityIcons name="plus-circle" size={44} color="#ff8c00" />
      </Link>
    </View>
  );
};

export default reminders;

const styles = StyleSheet.create({});
