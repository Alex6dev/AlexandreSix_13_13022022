import { createSlice } from "@reduxjs/toolkit"


const connectionSlice= createSlice({
    name:'user',
    initialState:{
        user:{},
    },
    reducers:{
        get:  (state,action)=>{
            return {
                ...state,
            }
            
        },
    }
})

const { actions, reducer } = connectionSlice
export const { get } = actions
export default reducer