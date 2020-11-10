import React, { Component } from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, ImageBackground, TextInput, ScrollView, Dimensions } from "react-native";
import HeaderX from "../components/HeaderX";
import Svg, { Ellipse } from "react-native-svg";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
function Settings(props) {
  const { height } = Dimensions.get('window');
  const [inputs, setInputs] = useState({
    Firstname: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Cmnd: ''

  });
  const [state, setState] = useState({
    screenHeight: 0,
  })


  const onContentSizeChange = (contentWidth, contentHeight) => {
    // Save the content height in state
    setState({ screenHeight: contentHeight });
  };
  const scrollEnabled = state.screenHeight > height;
  return (
    <View>
      <HeaderX icon2Name="power" style={styles.headerX}></HeaderX>
      
      <ScrollView style={{height:height }}

        >


          <ImageBackground
            style={{height:height, marginBottom:100}}
            imageStyle={{}}
            source={require('./../assets/images/1.png')}
          >
            <View style={styles.form}>
              <View style={styles.usernameColumn}>
                <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                    onChangeText={(text2) => setInputs(inputs => ({ ...inputs, Firstname: text2 }))}

                  ></TextInput>
                </View>
                <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                    onChangeText={(text2) => setInputs(inputs => ({ ...inputs, Firstname: text2 }))}

                  ></TextInput>
                </View>
                <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                    onChangeText={(text2) => setInputs(inputs => ({ ...inputs, Firstname: text2 }))}

                  ></TextInput>
                </View>
                <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                    onChangeText={(text2) => setInputs(inputs => ({ ...inputs, Firstname: text2 }))}

                  ></TextInput>
                </View>
                <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                    onChangeText={(text2) => setInputs(inputs => ({ ...inputs, Firstname: text2 }))}

                  ></TextInput>
                </View>
                <View style={styles.username}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.usernameInput}
                    onChangeText={(text2) => setInputs(inputs => ({ ...inputs, Firstname: text2 }))}

                  ></TextInput>
                </View>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name="lock"
                    style={styles.icon2}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.passwordInput}
                    onChangeText={(text) => setInputs(inputs => ({ ...inputs, LastName: text }))}
                  ></TextInput>
                </View>

              </View>
              <View style={styles.usernameColumnFiller}></View>
              <TouchableOpacity
                // onPress={() => props.navigation.navigate(MainScreen)}
                // onPress={handleSubmit}
                style={styles.button}
              >
                <Text style={styles.text2}>Login</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  headerX: {
    height: 80,
    elevation: 15,
    shadowOffset: {
      height: 7,
      width: 1
    },
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.1,
    shadowRadius: 5
  },
  usernameInput: {

    height: 40,
    color: "rgba(255,255,255,1)",
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  background: {
    flex: 1
  },
  
  logo: {
    width: 102,
    height: 111,
    alignSelf: "center"
  },
  endWrapperFiller: {
    flex: 1
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 96,
    marginBottom: 4
  },
  rect7: {
    height: 8,
    backgroundColor: "#25cdec",
    marginRight: 4
  },
  text3Column: {
    marginBottom: 6,
    marginLeft: 2,
    marginRight: -1
  },
  form: {
    height: 230,
    marginTop: 59
  },
  username: {
    height: 59,
    backgroundColor: "rgba(251,247,247,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 11
  },
  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {

    height: 40,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 11,
    marginLeft: 11,
    marginTop: 14
  },
  password: {
    height: 59,
    backgroundColor: "rgba(253,251,251,0.25)",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 11
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 40,
    color: "rgba(255,255,255,1)",
    flex: 1,
    marginRight: 17,
    marginLeft: 8,
    marginTop: 14
  },
  usernameColumn: {},
  usernameColumnFiller: {
    flex: 1
  },
  button: {
    height: 59,
    backgroundColor: "rgba(31,178,204,1)",
    borderRadius: 5,
    justifyContent: "center"
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoColumn: {
    marginTop: 130,
    marginLeft: 41,
    marginRight: 41
  },
  logoColumnFiller: {
    flex: 1
  },
  footerTexts: {
    height: 14,
    flexDirection: "row",
    marginBottom: 36,
    marginLeft: 37,
    marginRight: 36
  },
  button2: {
    width: 104,
    height: 14,
    alignSelf: "flex-end"
  },
  createAccountFiller: {
    flex: 1
  },
  createAccount: {
    color: "rgba(255,255,255,0.5)"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  needHelp: {
    color: "rgba(255,255,255,0.5)",
    alignSelf: "flex-end",
    marginRight: -1
  }

});

export default Settings;
