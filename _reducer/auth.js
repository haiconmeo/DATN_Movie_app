import {userConstants} from '../_constant'
import { AsyncStorage } from 'react-native';

const user_manh = async () => {
    let userId ;
    try {
      userId = await AsyncStorage.getItem('user123456') || 'none';
      console.log("userId",userId)
      return userId;
    } catch (error) {

      console.log(error.message);
    }
    return null;
  }

const initState = user_manh ? {loggedIn:true,user:user_manh,authed:true}:{loggedIn:false,authed:false};

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