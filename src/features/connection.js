import { createSlice } from "@reduxjs/toolkit"
import {  axiosToken } from "../CallApi/callApi"




const connectionSlice= createSlice({
    name:'connection',
    initialState:null,
    reducers:{
        emailAction:async (state,action)=>{
            try{
            
            console.log(action.payload)
            console.log({email:'steve@rogers.com',password:'password456'})
            const token=await axiosToken(action.payload)
            
            
            if(token){return token}                
            }catch(error){ }

        },

        /*connecte:(state)=>{
            {email:'steve@rogers.com',password:'password456'}
            return null
        }*/

    }
})

const { actions, reducer } = connectionSlice
export const { emailAction } = actions
export default reducer