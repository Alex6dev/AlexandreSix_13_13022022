import axios from 'axios' 

const apiUrl=`http://localhost:3001/api/v1`; 

export async function axiosToken(params){
    return await axios.post(apiUrl+'/user/login', params)
        .then(response=>{
            return response.data.body.token
        })

}