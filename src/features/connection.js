import { createSlice ,createReducer,createAction} from "@reduxjs/toolkit"
import { response } from "msw"
import {  axiosToken } from "../CallApi/callApi"

const connectionSlice= createSlice({
    name:'connection',
    initialState:{
        isAuthenticated:false,
        user:{},
        token:''
    },
    reducers:{
        getToken: async (state,action)=>{
            
            console.log(action.payload)
            console.log({email:'steve@rogers.com',password:'password456'})
            const reponseAxios=await axiosToken(action.payload)
            
            return {
                ...state,
                token:`${reponseAxios}`
            }
            
        },
    }
})

const { actions, reducer } = connectionSlice
export const { getToken } = actions
export default reducer