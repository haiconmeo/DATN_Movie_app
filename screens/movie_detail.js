import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function Movie_detail(props) {
    const { movie } = props;
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: movie.Image }}
                resizeMode="contain"
                style={styles.image}
            ></Image>
            <Text style={styles.loremIpsum}>{movie.Movie}</Text>
            <Text style={styles.loremIpsum3}>{movie.Year}</Text>
            <Text style={styles.loremIpsum5}>{movie.Content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: 271,
        height: 296,
        marginTop: 46,
        alignSelf: "center"
    },
    loremIpsum: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 51,
        marginTop: 12,
        marginLeft: 20
    },
    loremIpsum3: {
        fontFamily: "roboto-regular",
        color: "#121212",
        marginTop: 17,
        marginLeft: 28
    },
    loremIpsum5: {
        fontFamily: "roboto-regular",
        color: "#121212",
        fontSize: 25,
        marginTop: 48,
        marginLeft: 5
    }
});

export default Movie_detail;
