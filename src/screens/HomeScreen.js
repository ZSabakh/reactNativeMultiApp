import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  //Same as props but this one goes to props.navigation straight ahead
  const menuItems = [
    { title: "List", page: "List" },
    { title: "Legends", page: "Legends" },
    { title: "Counter", page: "Counter" },
    { title: "Colors", page: "Color" },
    { title: "One Color/RGB Generator", page: "ColorOne" },
    { title: "Sum Text", page: "Input" },
    { title: "Box styling test", page: "Box" },
  ];

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
      <FlatList
        data={menuItems}
        keyExtractor={(items) => items.title}
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.button}
                style={index % 2 == 0 ? styles.button : styles.button1}
                onPress={() => {
                  navigation.navigate(item.page);
                }}
              >
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
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
