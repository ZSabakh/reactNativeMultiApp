import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function ColorBlock(props) {
  return (
    <View>
      <Text>{props.color}</Text>
      <Button
        onPress={() => props.onIncrease()}
        title={`MORE ${props.color}!`}
      />
      <Button
        onPress={() => props.onDecrease()}
        title={`LESS ${props.color}!`}
      />
    </View>
  );
}

export default ColorBlock;
