import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import SingerDetail from "../components/SingerDetail";

const Singers = [
  { image: require("../../assets/gia.jpg"), singer: "Gia Suramelashvili" },
  { image: require("../../assets/merab.jpg"), singer: "Merab Sepashvili" },
  { image: require("../../assets/lela.jpg"), singer: "Lela Tsurtsumia" },
];

function ImgListScreen() {
  return (
    <View>
      <FlatList
        data={Singers}
        keyExtractor={(singers) => singers.singer}
        renderItem={({ item }) => {
          return (
            <View>
              <SingerDetail singer={item.singer} image={item.image} />
            </View>
          );
        }}
      />

      {/* <SingerDetail
        image={require("../../assets/gia.jpg")}
        singer="Gia Suramelashvili"
      />
      <SingerDetail
        image={require("../../assets/merab.jpg")}
        singer="Merab Sepashvili"
      />
      <SingerDetail
        image={require("../../assets/lela.jpg")}
        singer="Lela Tsurtsumia"
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImgListScreen;
