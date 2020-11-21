import React, { Component } from "react";
import { StyleSheet, View, Image, Text, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { height, width } = Dimensions.get('window');
function Movie_detail(props) {
    const { navigation } = props;
    const { name } = navigation.state.params;
    console.log('movi', name)
    return (
        <View>
            <View style={{ height: 60, backgroundColor: "#02ad94", justifyContent: "center" }}>
                <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>Movie</Text>
            </View>
            <ScrollView style={styles.container}>
                <Image
                    source={{ uri: name.Image }}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
                <View style={{ flexDirection:"row",marginTop: 12,}} >
                    <Text style={styles.loremIpsum}>{name.Movie}</Text>
                    <View style={{justifyContent: 'flex-end'}}>
                        <Text style={styles.loremIpsum3}>{name.Year}</Text>
                    </View>
                    
                </View>
                <Text style={styles.loremIpsum5}>{name.Content}</Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
    },
    image: {
        width: width,
        height: height / 2,
        marginTop: 5,
        alignSelf: "center",
        resizeMode: "stretch",
    },
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 40,
    },
    loremIpsum3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginLeft: 28,
        

    },
    loremIpsum5: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 25,
        marginTop: 20,
        marginLeft: 5
    }
});

export default Movie_detail;
