import React from "react";
import { View, Text, StyleSheet } from "react-native";

function BoxScreen() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Ein</Text>
        <Text style={styles.text1}>Zwei</Text>
        <Text style={styles.text2}>Drei</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.box} />
        <View style={styles.box1} />
        <View style={styles.box2} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "blue",
    height: 100,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  container1: {
    marginTop: 5,
    borderWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 200,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: "green",
    alignSelf: "flex-end",
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: "blue",
  },
  text: {
    borderWidth: 2,
    borderColor: "red",
  },
  text1: {
    borderWidth: 2,
    borderColor: "red",
    flex: 1,
  },
  text2: {
    borderWidth: 2,
    borderColor: "red",
  },
});

export default BoxScreen;
