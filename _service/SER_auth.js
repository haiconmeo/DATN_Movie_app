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

    return fetch("http://192.168.1.3:8000/api/auth/login/",requestOptions)
    .then(handleResponse)
    .then(user=>{
        console.log("oke auth")
        // AsyncStorage.setItem('user123456', JSON.stringify(user));
        const saveUserId = async userId => {
            try {
              await AsyncStorage.setItem('user123456', JSON.stringify(user));
            } catch (error) {
              // Error retrieving data
              console.log(error.message);
            }
          };
        return user;
    });
}
function  logout (){
    // AsyncStorage.removeItem('user123456')
    const deleteUserId = async () => {
        try {
          await AsyncStorage.removeItem('user123456');
        } catch (error) {
          // Error retrieving data
          console.log(error.message);
        }
      }
}

function profile_detail(pk){
    
    return axios({
        method: "GET",
        url: "http://192.168.1.3:8000/api/auth/profile/"+pk
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

