import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //Same as props but this one goes to props.navigation straight ahead

  return (
    <View>
      <Text style={styles.text}>Wazaap!</Text>
      <Button
        onPress={() => {
          navigation.navigate("Component");
        }}
        title="Components"
      />
      {/* Both do the same job but the latter is more customizable */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("List");
        }}
      >
        <Text>List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => {
          navigation.navigate("Legends");
        }}
      >
        <Text>Legends</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center",
    margin: 10,
    marginBottom: 50,
  },
  button: {
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
    backgroundColor: "gold",
    alignSelf: "center",
    width: "95%",
  },
  button1: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "green",
    padding: 10,
    width: "95%",
  },
});

export default HomeScreen;
