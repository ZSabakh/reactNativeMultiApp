import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function reducer(state, action) {
  switch (action.math) {
    case "+":
      return { ...state, counter: state.counter + action.amount };
    case "-":
      return { ...state, counter: state.counter - action.amount };
    default:
      return state;
  }
}

function CounterScreen() {
  // const [counter, setCounter] = useState(0); Nonono
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="More"
        onPress={() => {
          dispatch({ math: "+", amount: 1 });
        }}
      />
      <Button
        title="Less"
        onPress={() => {
          // setCounter(counter - 1); DAMPALI SABJOTA SHEMORCHENILI (Jk, dis method is fine af, just playing with reducers)
          dispatch({ math: "-", amount: 1 });
        }}
      />
      <Text>C(o)unt: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default CounterScreen;
