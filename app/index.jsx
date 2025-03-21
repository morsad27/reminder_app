import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.mainContainer}>
        <Text style={styles.logoText}>Re:Mind</Text>
        <Link href="/home" style={styles.getStartedButton}>
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
    backgroundColor: "#06f",
  },
  getStartedButton: {
    borderRadius: 30,
    backgroundColor: "#2AB37E",
    borderColor: '#707070',
    borderWidth: 1,
    marginTop: 200,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  mediumText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#fff",
    textAlign: "center",
    fontStyle: 'Segoe UI'
  },
  logoText: {
    fontStyle: 'Segoe UI',
    fontWeight: "Bold",
    fontSize: 35,
    color: "#fff",
    textAlign: "center",
  },
});
