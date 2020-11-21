import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-paper';
import {Screens} from './screen_navi';
import Home from './screens/home';
import Login from './screens/login';
import Settings from './screens/setting';
import Search from './screens/search';
import SignUp from './screens/register';
import Recents from './screens/recents';
import Movie_detail from './screens/movie_detail';
import Item from './screens/Item';
import HeaderX from './components/HeaderX';
import ProfileScreen from './screens/profile';
import Password from './screens/reset_password';
const defaultNavigationOptions = {
    header: null,
};

const HomeStackNavigator = createStackNavigator(
    {
        // The main application screen is our "WelcomeScreen". Feel free to replace it with your
        // own screen and remove the example.
        [Screens.HOME]: Home,
    },
    {
        initialRouteName: Screens.HOME,
        defaultNavigationOptions,
    },
)

const LoginStackNavigator = createStackNavigator(
    {
        // The main application screen is our "WelcomeScreen". Feel free to replace it with your
        // own screen and remove the example.
        [Screens.LOGIN]: Login,
    },
    {
        initialRouteName: Screens.Login,
        defaultNavigationOptions,
    },
)

const ListMovieStackNavigator = createStackNavigator(
    {
        // The main application screen is our "WelcomeScreen". Feel free to replace it with your
        // own screen and remove the example.
        [Screens.LISTMOVIE]: Recents,
    },
    {
        initialRouteName: Screens.LISTMOVIE,
        defaultNavigationOptions,
    },
)
const ProfileStackNavigator = createStackNavigator(
    {
        // The main application screen is our "WelcomeScreen". Feel free to replace it with your
        // own screen and remove the example.
        [Screens.PROFILESCREEN]: ProfileScreen,
    },
    {
        initialRouteName: Screens.PROFILESCREEN,
        defaultNavigationOptions,
    },
)
const bottomTabNavigator = createBottomTabNavigator({
    [Screens.HOME]: {
        screen: HomeStackNavigator,
        navigationOptions: {
            title: "Home",
        },
    },
    [Screens.LISTMOVIE]: {
        screen: ListMovieStackNavigator,
        navigationOptions: {
            title: "Movie",
        },
    },
    [Screens.PROFILESCREEN]: {
        screen: ProfileStackNavigator,
        navigationOptions: {
            title: "Profile",
        },
    },
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            if (routeName === Screens.HOME) {
                iconName = 'home';
            } else if (routeName === Screens.LISTMOVIE) {
                iconName = 'th-large';
            } else if (routeName === Screens.PROFILESCREEN) {
                iconName = 'user';
            }
            return <Icon name={iconName} size={22} color={tintColor} />;
        }
    }),
    tabBarOptions: {
        activeTintColor: "#02ad94",
        inactiveTintColor: "#dedede",
        height: 120,
    },
});

const rootStackNavigator = createStackNavigator(
    {
      // The main application screen is our "WelcomeScreen". Feel free to replace it with your
      // own screen and remove the example.
      [Screens.HOME]: bottomTabNavigator,
      [Screens.LOGIN]: Login,
      [Screens.SIGNUP]: SignUp,
      [Screens.SEARCH]: Search,
      [Screens.DETAIL]: Movie_detail,
      [Screens.PROFILE]: Settings,
      [Screens.LISTMOVIE]: Recents,
      [Screens.ITEMMOVIE]: Item,
      [Screens.HEADERX]:HeaderX,
      [Screens.PROFILESCREEN]:ProfileScreen,
      [Screens.RESETPASSWORD]:Password

    },
    {
      initialRouteName: Screens.LOGIN,
      defaultNavigationOptions,
    },
  )
  
  export default createAppContainer(rootStackNavigator)