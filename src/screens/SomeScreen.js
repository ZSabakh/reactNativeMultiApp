import React from "react";
import { Text, StyleSheet, View } from "react-native";

const SomeScreen = () => {
  const customText = "A string variable !";

  return (
    <View>
      <Text style={styles.text}>Some component test ))</Text>
      <Text style={styles.text2}>{customText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
});

export default SomeScreen;
