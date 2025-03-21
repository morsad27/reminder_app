import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const reminders = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <View style={styles.inputContainer}>
        <Link style={styles.addButton} href="../add-new-reminder">
          <Image
            source={require("../../assets/images/add.png")}
            style={{
              width: 34,
              height: 34,
              borderRadius: 30,
              borderWidth: 2,
              borderColor: "#3ABD72",
            }}
          />
          <Text style={styles.addButtonText}>Add new Reminder</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default reminders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 5,
  },
  addButton: {
    backgroundColor: "#06f",
    borderTopRightRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    fontFamily: "Segoe UI",
    fontSize: 26,
    color: "#fff",
    fontWeight: "semibold",
  },
  inputContainer: {
    padding: 20,
    flexDirection: "row",
    padding: 10,
  },
});
