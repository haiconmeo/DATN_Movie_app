import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
// import { StyleSheet, View, Text, Image } from "react-native";
export default function Item({ name }) {
  console.log(name)
  return (
    <View style={styles.container}>
      <View style={styles.rectStack}>
        <View style={styles.rect}>
          <Text style={styles.loremIpsum}>{name.Movie}</Text>
          <Text style={styles.loremIpsum3}>{name.Year}</Text>
          <Text style={styles.descriptionText} numberOfLines={5} style={styles.loremIpsum5}>{name.Content}</Text>
        </View>
        <Image
          source={{ uri: name.Image }}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    borderRadius:8,
    top: 0,
    left: 29,
    width: 341,
    height: 240,
    position: "absolute",
    backgroundColor: "#c0c0c0",
    marginBottom: 5
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 37,
    marginLeft: 159
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 21,
    marginLeft: 159
  },
  loremIpsum5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 40,
    marginLeft: 163
  },
  image: {
    top: 14,
    left: 0,
    width: 200,
    height: 200,
    position: "absolute"
  },
  rectStack: {
    width: 370,
    height: 214,
    marginTop: 60,
    marginLeft: -19,
 
  }
});