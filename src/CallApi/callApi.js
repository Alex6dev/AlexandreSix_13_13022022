import axios from 'axios' 

const apiUrl=`http://localhost:3001`; 

export async function callApi(params){
    const response= await axios.post(apiUrl+'/user/login', params)
    console.log(response) 
}