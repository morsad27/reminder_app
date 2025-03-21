import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.mainContainer}>
        <Text style={styles.LargeText}>Reminder App</Text>
        <Link href="/reminders" style={styles.getStartedButton}>
          <Text style={styles.mediumText}>Get Started</Text>
        </Link>
      </View>
    </SafeAreaProvider>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#161622",
  },
  getStartedButton: {
    borderRadius: 30,
    backgroundColor: "#FF8C00",
    marginTop: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  mediumText: {
    fontWeight: "400",
    fontSize: 20,
    color: "#161622",
    textAlign: "center",
  },
  LargeText: {
    fontWeight: "600",
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
  },
});
