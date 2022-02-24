
import connectionReducer from './features/connection';
import { configureStore } from '@reduxjs/toolkit'; 

export default configureStore({
    reducer:{
        connection: connectionReducer,

    }
})
