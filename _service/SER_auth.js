import axios from 'axios';
import { AsyncStorage } from 'react-native';
export const userService = {
    login,
    logout,
    profile_detail,
    load_user_ser

};
function login(username,password){
    console.log("oke ser")
    const requestOptions={
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify({username,password})
    };

    return fetch("http://192.168.1.212:8000/api/auth/login/",requestOptions)
    .then(handleResponse)
    .then(user=>{
        AsyncStorage.setItem('user123456', JSON.stringify(user.token));
 
              console.log("loiasdasdasdasdasdasd",user.token);
              return [user.token, user.user];

        
    });
}

function load_user_ser(token){
    let headers = {
        "Content-Type": "application/json",
    };

    if (token) {
        headers["Authorization"] = `Token ${token}`;
    }
    return fetch("http://192.168.1.212:8000/api/auth/user/", { headers, })
    .then(handleResponse)
        .then(res => {
            if (res.status < 500) {
                return res.json().then(data => {
                    console.log("asdasdasd dmm",data)
                    return { data };
                })
            } else {
                console.log("Server Error!");
                
            }
        })

}
function  logout (){

    const deleteUserId = async () => {
        try {
          await AsyncStorage.removeItem('user123456');
        } catch (error) {

          console.log(error.message);
        }
      }
}

function profile_detail(pk){
    
    return axios({
        method: "GET",
        url: "http://192.168.1.212:8000/api/auth/profile/"+pk
    })
    .then(Profile=>{
        // console.log(Profile.data);
        return Profile.data;
    });
}
function handleResponse(response) {
    console.log("oke loi dang nhap")
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

