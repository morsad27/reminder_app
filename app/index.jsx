import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.LargeText}>Reminder App</Text>
      <Link href="/reminders" style={styles.getStartedButton}>
        <Text style={styles.mediumText}>Get Started</Text>
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  getStartedButton: {
    borderRadius: 30,
    backgroundColor: "#06f",
    marginTop: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  mediumText: {
    fontWeight: "400",
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
  },
  LargeText: {
    fontWeight: "600",
    fontSize: 24,
    color: "#000",
    textAlign: "center",
  },
});
