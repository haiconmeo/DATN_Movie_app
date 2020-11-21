import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Axios from "axios";
import { userAction } from "../_action";
import { View, SafeAreaView, StyleSheet,Alert } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import { Screens } from './../screen_navi';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const convert = (user) => {
  var l = {
    'id': user.id,
    'user': user.user.username,
    'fistname': user.fistname,
    'lastname': user.lastname,
    'phonenum': user.phonenum,
    'address': user.address,
    'cmmd': user.cmmd,
    'email': user.user.email

  }
  return l
}
const ProfileScreen = (props) => {
  const { navigation } = props;
  const [inputs, setInputs] = useState({
    id: '',
    user: null,
    fistname: "",
    lastname: "",
    phonenum: "",
    address: "",
    cmmd: "",
    email: ''

  });
  const dispatch = useDispatch();
  const getProfile = async () => {
    console.log("manshds", userrr.id)
    var next = userrr.id
    console.log("id", next)
    var callAPI = "http://192.168.1.212:8000/api/auth/profile_ID/" + next

    try {
      const data = await Axios.get(
        callAPI
      );

      setInputs(convert(data.data));

    }
    catch (e) {
      console.log("dmm ")
      console.log(e)
    }
  }

  const userrr = useSelector(state => state.authentication.user_data);
  useEffect(() => {
    try {
      getProfile()
    } catch (error) {

    }
    // dispatch(userAction.loaduser(token));
  }, []);
  useEffect(() => {
    getProfile()


  }, [userrr])

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar.Image
            source={{
              uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80}
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={[styles.title, {
              marginTop: 15,
              marginBottom: 5,
            }]}>{inputs['user']}</Title>
            <Caption style={styles.caption}>{inputs['fistname'], inputs['lastname']}</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{inputs['address']}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="CMND" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{inputs['cmmd']}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>{inputs['email']}</Text>
        </View>
      </View>
      <TouchableRipple onPress={() => navigation.navigate(Screens.PROFILE, { inputs })}>
        <View style={styles.menuItem}>
          <Icon name="settings-outline" color="#FF6347" size={25} />
          <Text style={styles.menuItemText}>Settings</Text>
        </View>
      </TouchableRipple>
      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate(Screens.RESETPASSWORD, { user: inputs['user'] })}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Reset password</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple onPress={() => navigation.navigate(Screens.LOGIN)}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {
          Alert.alert(
            "Support",
            "Mọi ý kiến thức mắc xin gửi về email hoanghuumanh54@gmail.com",
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
        }}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25} />
            <Text style={styles.menuItemText}>Support</Text>

          </View>
        </TouchableRipple>

      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});