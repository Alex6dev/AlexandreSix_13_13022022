import { createSlice ,createReducer,createAction} from "@reduxjs/toolkit"

import {  axiosToken } from "../CallApi/callApi"

const connectionSlice= createSlice({
    name:'connection',
    initialState:{
        isAuthenticated:false,
        user:{},
        token:null,
    },
    reducers:{
        getToken:  (state,action)=>{
            return {
                ...state,
                isAuthenticated:true,
                token:`${action.payload}`
            }
            
        },
    }
})

const { actions, reducer } = connectionSlice
export const { getToken } = actions
export default reducer