import {userConstants} from '../_constant'
import {userService} from '../_service'

export const userAction={
    login,
    logout,
    profiledetail,
};
function login(username,password){
    console.log("oke auth")
    return dispatch=>{
        dispatch(request({username}));
        
        userService.login(username,password)
        .then(
            user=>{
                dispatch(success(user));

            },
            error => {
                dispatch(failure(error.toString()));
                
            }
        );
    };
    function request(user) {return {type:userConstants.LOGIN_REQUEST,user}}
    function success(user) {return {type:userConstants.LOGIN_SUCCESS,user}}
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