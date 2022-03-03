import axios from 'axios' 

const apiUrl=`http://localhost:3001/api/v1`; 

export function axiosToken(params){
    return axios.post(apiUrl+'/user/login', params)
        .then(response=>{
            return response.data.body.token
        })

}
export function axiosProfile(token){
    return axios.post(apiUrl+'/user/profile',{},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
        .then(response=>{
            return response.data.body
        })

}

export function axiosPutUser(token,newUser){
    return axios.put(apiUrl+'/user/profile',newUser,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
        .then(response=>{
            return response.data.body
        })

}