import {userConstants} from '../_constant'
import {userService} from '../_service'

export const userAction={
    login,
    logout,
    profiledetail,
    loaduser
};


function login(username,password){
    console.log("oke auth")
    return dispatch=>{
        dispatch(request({username}));
        
        userService.login(username,password)
        .then(
            ([token, user])=>{
                console.log("user tai action", user)
                dispatch(success(token));
                dispatch(loadUserData(user))
            },
            error => {
                dispatch(failure(error.toString()));
                
            }
        );
    };
    function request(user) {return {type:userConstants.LOGIN_REQUEST,user}}
    function success(token) {return {type:userConstants.LOGIN_SUCCESS,token}}
    function loadUserData(userdata){return {type:'LOAD_USER_DATA', userdata}}
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}
function logout() {
    console.log("logout")
    userService.logout();

    return { type: userConstants.LOGOUT };
}

function profiledetail(pk){
    return dispatch=>{
        dispatch(request());
        userService.profile_detail(pk)

        .then(profile=>{
            dispatch(success(profile));
            
        })

    }
    function request(){return {type:userConstants.PROFILE_ID_REQUEST}}
    function success(profile) {return {type:userConstants.PROFILE_ID_SUCCESS,profile}}
    
}

function loaduser(token){
    return dispatch=>{
        dispatch(request());
        userService.load_user_ser(token)

        .then(profile=>{
            dispatch(success(profile));
            error => {
                dispatch(failure(error.toString()));                
            }
            
        })
        

    }
    function request(){return {type:'USER_LOADING'}}
    function success(profile) {return {type:'USER_LOADED',profile}}
    function failure(error) { return { type: AUTHENTICATION_ERROR, error } }
}