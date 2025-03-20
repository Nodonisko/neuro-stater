import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "@/components/Text";
export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text variant="h1">Hello</Text>
      <Text variant="h3">Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
