import { NavigationContainer } from '@react-navigation/native';
import AuthNavigationStack from './AuthNavigationStack '
import Main from './Main'
import * as React from 'react';
import Login from './screens/login';

import { useDispatch, useSelector } from 'react-redux'
import { userAction } from './_action'
const AppNavigator = ()=>{
    const loggingIn = useSelector(state=>state.authentication.authed);
    // let loggingIn =false;
    console.log("manh",loggingIn)
    const selectStack = () => {
        if (!loggingIn) {
          return <AuthNavigationStack />;
        } else {
          return <Main />;
        }
    };
    return (
        <NavigationContainer>
        {selectStack()}
        </NavigationContainer>
    );

};
export default AppNavigator;