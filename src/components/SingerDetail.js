import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";

const image = require("../../assets/background.jpg");

function SingerDetail(props) {
  return (
    <View style={styles.view}>
      <ImageBackground source={image} style={styles.backImage}>
        <Image source={props.image} style={styles.image} />
        <Text style={styles.title}>{props.singer}</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backImage: {
    height: 200,
    resizeMode: "cover",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 10,
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
  },
  view: {},
  container: {
    alignContent: "center",
    marginBottom: 10,
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
  },
  image: {
    borderRadius: 10,
    alignSelf: "center",
    height: 180,
    width: 200,
    resizeMode: "stretch",
  },
  title: {
    alignSelf: "center",
    marginLeft: 30,
  },
});

export default SingerDetail;
