import { createSlice} from "@reduxjs/toolkit"


const connectionSlice= createSlice({
    name:'connection',
    initialState:{
        isAuthenticated:false,
        token:null,
        firstName:null,
        lastName:null,

    },
    reducers:{
        getToken:  (state,action)=>{
            return {
                ...state,
                isAuthenticated:true,
                token:`${action.payload}`
            }
            
        },
        getUser:  (state,action)=>{
            return {
                ...state,
                firstName:action.payload.firstName,
                lastName:action.payload.lastName
            }
            
        }
    }
})

const { actions, reducer } = connectionSlice
export const { getToken,getUser } = actions
export default reducer