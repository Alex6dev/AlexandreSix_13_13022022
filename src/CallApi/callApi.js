import axios from 'axios' 

const apiUrl=`http://localhost:3001/api/v1`; 

export function axiosToken(params){
    return axios.post(apiUrl+'/user/login', params)
        .then(response=>{
            return response.data.body.token
        })

}