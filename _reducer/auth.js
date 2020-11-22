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

  const initState = user_manh ? {loggedIn:true,user_manh,fail_login:false, user_data: {}}:{};

export const authentication = (state = initState, action) =>{
    switch(action.type) {
        case 'USER_LOADING':
            return {...state, loggedIn:true };

        case 'USER_LOADED':

            state = {...state, loggedIn:true,user_manh,fail_login:false};

            return state
        case userConstants.LOGIN_REQUEST:
            return {
                loggedIn:true,
                user:action.user,
                fail_login:true
            };
        case userConstants.LOGIN_SUCCESS:
            
            return {
                loggedIn:true,
                user:action.token,
                fail_login:false
            };
        case userConstants.LOGIN_FAILURE:
                return {fail_login:true};
        case 'LOAD_USER_DATA':
            return {
                user_data: {...action.userdata}
            }
        case 'AUTHENTICATION_ERROR':
        case 'LOGIN_FAILED':
        case 'REGISTRATION_FAILED':
        case userConstants.LOGOUT:
            return{loggedIn:false,authed:false};
        default:
            return state
    }
}