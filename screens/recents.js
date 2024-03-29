import * as React from 'react';
import { useEffect, useState } from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, TouchableOpacity, FlatList,TextInput } from 'react-native';
import Item from './Item';
import {Screens} from './../screen_navi';

const Recents = (props) => {
  const {navigation} = props;
  const [value, onChangeText] = useState();
  const [data, setData] = useState("");
  const baseURL = "http://django-api.eba-jmjspmms.ap-southeast-1.elasticbeanstalk.com/api/movie/1";
  useEffect(function () {
    fetch(baseURL)
      .then((e) => e.json())
      .then((rep) => setData(rep))
      .catch((err) => {
        setData([]);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.searchBoxContainer}>
        <TextInput
          placeholder="Search Movies"
          placeholderTextColor="rgba(255,255,255,0.3)"
          style={styles.SearchBox}
          onChangeText={text => onChangeText(text)}
        />
        <Ionicons
          name="md-search"
          size={22}
          color="rgba(255,255,255,0.3)"
          style={styles.searchBoxIcon}
          onPress={() => navigation.navigate(Screens.SEARCH,{value})}
        />
      </View>
      {data === "" ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
          <FlatList
            data={data}
            renderItem={({ item }) => <Item name={item} navigate={navigation}/>}
            keyExtractor={(item) => item.id}
          />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
    flexDirection: "column",
    marginTop: 20,
    justifyContent: "center",
  },
  loadingText: {
    alignSelf: "center",
  },
  searchBoxContainer: {
    backgroundColor: 'rgba(33,33,33,0.9)',
    elevation: 10,
    borderRadius: 4,
    marginTop: 20,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    fontSize: 16,
    color:'white'
  },
  searchBoxIcon: {
    position: 'absolute',
    right: 20,
    top: 14,
  },
});

export default Recents;
