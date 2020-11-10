import React, { Component } from 'react'
import  { useState,useEffect  } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet,StatusBar ,ImageBackground } from 'react-native'
import {useDispatch,useSelector} from 'react-redux'
import { userAction } from "../_action";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { LogBox } from 'react-native';
import {MainScreen} from './../screenname'
import Main from './../Main'
const Login = (props: Props) =>{
  const { navigation } = props;
  const authed = useSelector(state=>state.authentication.authed);
  console.log("loggingIn1",authed)
  const[inputs,setInputs]=useState({
    username:'',
    password:''
  });

   function handleChange(e){
    
    const {name,value} = e.target;
    setInputs(inputs=>({...inputs,[name]:value}));
  }
  function handleSubmit(e){

    e.preventDefault();
    
    console.log(inputs)
    if (username && password){
      console.log("ok")
      
      dispatch(userAction.login(username, password));
      console.log("loggingIn2",authed)
      if (authed){
        navigation.navigate("Home");
        
      }
    }

  }
   const {username,password} =inputs;
   const dispatch =useDispatch();


      return (
        <View style={styles.root}>
          <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
          <View style={styles.background}>
            <ImageBackground
              style={styles.rect}
              imageStyle={styles.rect_imageStyle}
              source={require('./../assets/images/1.png')}
            >
              <View style={styles.logoColumn}>
                <View style={styles.logo}>
                  <View style={styles.endWrapperFiller}></View>
                  <View style={styles.text3Column}>
                    <Text style={styles.text3}>bx</Text>
                    <View style={styles.rect7}></View>
                  </View>
                </View>
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
                        onChangeText={(text2) => setInputs(inputs=>({...inputs,username:text2}))}
                        
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
                        onChangeText={(text) => setInputs(inputs=>({...inputs,password:text}))}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.usernameColumnFiller}></View>
                  <TouchableOpacity
                    // onPress={() => props.navigation.navigate(MainScreen)}
                    onPress={handleSubmit}
                    style={styles.button}
                  >
                    <Text style={styles.text2}>Login</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.logoColumnFiller}></View>
              <View style={styles.footerTexts}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate("SignUp")}
                  style={styles.button2}
                >
                  <View style={styles.createAccountFiller}></View>
                  <Text style={styles.createAccount}>Create Account</Text>
                </TouchableOpacity>
                <View style={styles.button2Filler}></View>
                <Text style={styles.needHelp}>Need Help?</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: "rgb(255,255,255)"
      },
      background: {
        flex: 1
      },
      rect: {
        flex: 1
      },
      rect_imageStyle: {},
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
        flexDirection: "row"
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

    export default Login;  