import Login from './screens/login.js';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './Main';
import Search from './screens/search';
import SignUp from './screens/register';
const Stack = createStackNavigator();

const AuthNavigationStack = () => {
 return (
   <Stack.Navigator initialRouteName={"login"}>
     <Stack.Screen
       name={"login"}
       component={Login}
       options={{
         title: 'Login Page',
       }}
     />
     <Stack.Screen
       name={"SignUp"}
       component={SignUp}
       options={{
         title: 'SignUp Page',
       }}
     />
     
     <Stack.Screen name='Home' component={Main} />
     <Stack.Screen name='search' component={Search} />
     
   </Stack.Navigator>
 );
};
export default AuthNavigationStack;