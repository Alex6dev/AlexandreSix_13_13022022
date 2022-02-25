
import connectionReduce from './features/connection'
import { configureStore, createReducer } from '@reduxjs/toolkit'; 

export default configureStore({
    reducer:{
        connection: connectionReduce,

    }
})


