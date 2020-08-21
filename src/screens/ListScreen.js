import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const people = [
    { name: "Bondo", age: "32" },
    { name: "Ciala", age: "32" },
    { name: "Bejani", age: "32" },
    { name: "Genadi", age: "32" },
    { name: "Jiulieni", age: "32" },
    { name: "Vova", age: "32" },
    { name: "Giorgi", age: "32" },
    { name: "Jumberi", age: "32" },
    { name: "Sergo", age: "32" },
  ];

  return (
    <FlatList
      //   horizontal={true}
      //   showsHorizontalScrollIndicator={false}
      keyExtractor={(person) => person.name}
      data={people}
      renderItem={({ item }) => {
        return (
          <Text style={styles.text}>
            {item.name} - Age: {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 25,
  },
});

export default ListScreen;
