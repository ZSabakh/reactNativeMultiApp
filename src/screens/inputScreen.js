import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

function InputScreen() {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={(newInput) => {
          setText(newInput);
        }}
        placeholder="Hallo"
        value={text}
      />
      {text.length < 5 ? (
        <Text>Mmm can't be less than 5 ¯\_(ツ)_/¯</Text>
      ) : (
        <Text>Just fine</Text>
      )}
      <Text>Text: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "blue",
    borderWidth: 1,
  },
});

export default InputScreen;
