import axios from 'axios';
import { AsyncStorage } from 'react-native';
export const userService = {
    login,
    logout,
    profile_detail

};
function login(username,password){
    console.log("oke ser")
    const requestOptions={
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({username,password})
    };

    return fetch("https://glacial-stream-12620.herokuapp.com/api/auth/login/",requestOptions)
    .then(handleResponse)
    .then(user=>{
        console.log("oke auth")
        AsyncStorage.setItem('user', JSON.stringify(user));
        
        return user;
    });
}
function logout(){
    AsyncStorage.removeItem('user')
}

function profile_detail(pk){
    
    return axios({
        method: "GET",
        url: "http://127.0.0.1:8000/api/auth/profile/"+pk
    })
    .then(Profile=>{
        // console.log(Profile.data);
        return Profile.data;
    });
}
function handleResponse(response) {
    console.log("oke loi")
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                
                logout();
                
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

