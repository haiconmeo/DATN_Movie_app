import {userConstants} from '../_constant'
import { AsyncStorage } from 'react-native';
let user =JSON.parse(JSON.stringify(AsyncStorage.getItem('user')));

const initState = user ? {loggedIn:true,user,authed:true}:{loggedIn:false,authed:true};

export const authentication = (state = initState, action) =>{
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn:true,
                user:action.user,
                authed:false
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                loggedIn:true,
                user:action.user,
                authed:true
            };
        case userConstants.LOGIN_FAILURE:
            return {...state,loggedIn:false};
        case userConstants.LOGOUT:
            return{loggedIn:false,authed:false};
        default:
            return state
    }
}