import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './screens/home';
import Profile from './screens/profile';
import Recents from './screens/recents';
import Settings from './screens/setting';


const Tab = createMaterialBottomTabNavigator();

const Main = (props: Props) => {
  const { navigation } = props;
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      activeColor="#02ad94"
      inactiveColor="#dedede"
      style={{ backgroundColor: '#000' }}
      barStyle={{ backgroundColor: '#0f0f0f', padding: 4 }}>
      <Tab.Screen
        name={"Home"}
        children={() => <Home />}

        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Settings}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="camera-metering-spot"
              color={color}
              size={28}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recents"
        component={Recents}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={28}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
