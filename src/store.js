import {createStore} from 'redux';
import produce from 'immer';
import { connexion } from './components/page/SignIn';
//state

const initialState={
    token: null,
    nameUser: null,

}
console.log(initialState)

//action creators



export const deconnexion=()=>({
    type:"deconnexion",
    payload:{nameUser:null},
})

function reducer(state=initialState,action){
    if(action.type==="connexion"){
        console.log("slt")
        return produce(state,(draft)=>{
            draft.nameUser=action.payload
        })
    }
    return state;
}
export const store=createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState())
});