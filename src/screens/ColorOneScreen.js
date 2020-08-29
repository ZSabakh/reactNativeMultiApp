import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorBlock from "../components/ColorBlock";

const reducer = (state, action) => {
  switch (action.color) {
    case "red":
      if (state.red + action.amount > 255 || state.red + action.amount < 0) {
        return state;
      }
      return { ...state, red: state.red + action.amount };
    case "green":
      if (
        state.green + action.amount > 255 ||
        state.green + action.amount < 0
      ) {
        return state;
      }
      return { ...state, green: state.green + action.amount };
    case "blue":
      if (state.blue + action.amount > 255 || state.blue + action.amount < 0) {
        return state;
      }
      return { ...state, blue: state.blue + action.amount };
    default:
      return state;
  }
};

function ColorOneScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  //Non reducer method
  // const [red, setRed] = useState(0);
  // const [green, setGreen] = useState(0);
  // const [blue, setBlue] = useState(0);

  // const setColor = (color, change) => {
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //     case "green":
  //       green + change > 255 || green + change < 0
  //         ? null
  //         : setGreen(green + change);
  //     case "blue":
  //       blue + change > 255 || blue + change < 0
  //         ? null
  //         : setBlue(blue + change);
  //     default:
  //       return;
  //   }
  // };

  return (
    <View>
      <ColorBlock
        onIncrease={() => dispatch({ color: "red", amount: 15 })}
        onDecrease={() => dispatch({ color: "red", amount: -1 * 15 })}
        color="Red"
      />
      <ColorBlock
        onIncrease={() => dispatch({ color: "green", amount: 15 })}
        onDecrease={() => dispatch({ color: "green", amount: -1 * 15 })}
        color="Green"
      />
      <ColorBlock
        onIncrease={() => dispatch({ color: "blue", amount: 15 })}
        onDecrease={() => dispatch({ color: "blue", amount: -1 * 15 })}
        color="Blue"
      />
      <View
        style={{
          height: 170,
          width: 140,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>Color code: {`RGB(${red}, ${green}, ${blue})`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColorOneScreen;
