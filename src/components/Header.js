import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 25,
  },

  lightHeader: {
    fontSize: 35,
  },

  boldHeader: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
