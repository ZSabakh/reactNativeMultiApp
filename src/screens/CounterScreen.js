import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="More"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Less"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />
      <Text>C(o)unt: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
