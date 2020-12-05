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
  const initState2 ={
    loggedIn:false,
    fail_login:true,
    user_data: {},
    errmsg:''
  }
//   const initState = user_manh ? {loggedIn:true,user_manh,fail_login:false, user_data: {}}:{};

export const authentication = (state = initState2, action) =>{
    switch(action.type) {
        case 'USER_LOADING':
            return {...state, loggedIn:true,fail_login:true }

        case 'USER_LOADED':

            state = {...state, loggedIn:true,fail_login:false}

            return state
        case userConstants.LOGIN_REQUEST:
            console.log("LOGIN_REQUEST")
            // Object.assgin(state.data,data);
            return {...state,
                loggedIn:true,
                fail_login:true,
                errmsg:''
            }
        case userConstants.LOGIN_SUCCESS:
            // Object.assgin(state.data,data);
            console.log("LOGIN_SUCCESS")
            return {...state,
                loggedIn:true,
                user_data:action.token,
                fail_login:false,
                errmsg:''
            }
        case userConstants.LOGIN_FAILURE:
            console.log("LOGIN_FAILURE")
            return {...state,fail_login:true,user_data:{},errmsg:action.error};
        case 'LOAD_USER_DATA':
            return {
                ...state,user_data:action.userdata,fail_login:false
            }
        case 'AUTHENTICATION_ERROR':
        case 'LOGIN_FAILED':
        case 'REGISTRATION_FAILED':
        case userConstants.LOGOUT:
            return{...state,loggedIn:false,fail_login:true,user_data:{},errmsg:''};
        default:
            return state
    }
}