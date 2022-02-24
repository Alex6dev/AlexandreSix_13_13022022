import { createSlice } from "@reduxjs/toolkit"
import { callApi } from "../CallApi/callApi"

const connectionSlice= createSlice({
    name:'connection',
    initialState: false ,
    reducers:{
        connecte:(state)=>{
            callApi({"email":"steve@rogers.com","password":"password456" } )
            return state===false? true:false
        }
    }
})

const { actions, reducer } = connectionSlice
export const { connecte } = actions
export default reducer