import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Alert 
} from "react-native";
import { useState, useEffect } from "react";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { Screens } from "../screen_navi";
import axios from "axios";
function Password(props) {
    const {navigation} = props;
    const { user } = navigation.state.params;
    const[inputs,setInputs]=useState({
        username:user,
        email:'',
        newpassword:'',
        re_enter:'',
    
      });
      function handleChange(e){
    
        const {name,value} = e.target;
        console.log("chẹcasda",value)
        setInputs(inputs=>({...inputs,[name]:value}));
      }
function handleSubmit(e){
        
        e.preventDefault();
        if (inputs['newpassword'] !== inputs['re_enter']){
          
            // Alert.alert("Mật khẩu bạn nhập không khớp!")
            Alert.alert(
                "Lỗi",
                "Mật khẩu bạn nhập không khớp!",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
            // console.log("Mật khẩu bạn nhập không khớp!")
        }
        else{
          axios.put('http://django-api.eba-jmjspmms.ap-southeast-1.elasticbeanstalk.com/api/change_pass', {
            username: inputs['username'],
            password: inputs['newpassword']
          })
          .then(function (response) {
            console.log("Mật khẩu bạn đã được đổi")
            Alert.alert(
                "Đổi mật khẩu thành công",
                "Mật khẩu bạn đã được đổi!",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
            navigation.navigate(Screens.LOGIN)
          })
          .catch(function (error) {
            console.log("Lỗi:",error)
            Alert.alert(
                "Lỗi",
                "Lỗi:",error,
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
              );
          });
        }
    
    
    
      }
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
                <Text style={styles.text3}>Reset</Text>
                <View style={styles.rect7}></View>
              </View>
            </View>
            <View style={styles.form}>
              <View style={styles.usernameColumn}>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name="lock"
                    style={styles.icon22}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="new password"
                    name="newpassword"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.passwordInput}
                    // value={inputs['newpassword']} onChange={handleChange}
                    onChangeText={(text2) => setInputs(inputs => ({ ...inputs, newpassword: text2 }))}
                  ></TextInput>
                </View>
                <View style={styles.password}>
                  <EvilIconsIcon
                    name="lock"
                    style={styles.icon2}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="re enter"
                    name='re_enter'
                    // value={inputs['re_enter']} onChange={handleChange}
                    onChangeText={(text2) => setInputs(inputs => ({ ...inputs, re_enter: text2 }))}
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={true}
                    style={styles.passwordInput}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.usernameColumnFiller}></View>
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.button}
              >
                <Text style={styles.text2}>ReSet Password</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.logoColumnFiller}></View>

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
    marginLeft: 92
  },
  endWrapperFiller: {
    flex: 1
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
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

  icon22: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    marginLeft: 20,
    alignSelf: "center"
  },
  usernameInput: {
    height: 30,
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
    marginTop: 27
  },
  icon2: {
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    marginLeft: 20,
    alignSelf: "center"
  },
  passwordInput: {
    height: 45,
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
    justifyContent: "center",
    marginTop:14
  },
  text2: {
    color: "rgba(255,255,255,1)",
    alignSelf: "center"
  },
  logoColumn: {
    marginTop: 130,
    marginLeft: 37,
    marginRight: 45
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

export default Password;