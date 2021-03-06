import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { axiosPutUser } from '../../remote/callApi';
import AccountCard from '../AccountCard/AccountCard'; 
import './profile.css';
import * as connectionActions from '../../features/connection';
import Error from './Error';


let tab=[
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },                       
]



/**show Page User profile
 *  
 * @returns {JSX}
 */

 export default function UserProfile(){
    const stateReduxFirstName= useSelector((state)=>state.connection.firstName)
    const stateReduxLastName= useSelector((state)=>state.connection.lastName)
    const stateReduxToken= useSelector((state)=>state.connection.token)
    const [firstName, setFirstName]=useState()
    const [lastName, setLastName]=useState()
    const [displayEditName, setdisplayEditName]=useState(false)
    const dispatch=useDispatch()
    
    function displayFormEdit(){

        setdisplayEditName(!displayEditName)
    }
    async function editUser(){
        const axios=await axiosPutUser(stateReduxToken,{firstName,lastName})
        dispatch(connectionActions.getUser({firstName:axios.firstName,lastName:axios.lastName}))
        setdisplayEditName(!displayEditName)
    }

    //check if I am authenticated
    if(stateReduxToken){
        return ( 
            <>    
                <main className="main bg-dark">
                    <div className="header title-welcome">
                        {
                            displayEditName? (
                                <>
                                    <h1>Welcome back</h1>
                                    <form >
                                        <div className='form-first-line'>
                                            <label htmlFor="fisrtName">
                                                <input type="text" className="input-edit-user" id="firstName" className='input-new' onChange={(e)=>setFirstName(e.target.value)}/>
                                            </label>
                                        
                                            <label htmlFor="lastName">
                                                <input type="text" id="lastName" className='input-new' onChange={(e)=>setLastName(e.target.value)}/>
                                            </label>
                                        </div>
                                        <div className='form-second-line'>
                                            <button type='button' className='button-edit' onClick={()=>editUser()}>
                                                Save
                                            </button>
                                            <button type='button' className='button-edit' onClick={()=>displayFormEdit()}>
                                                Cancel
                                            </button>
                                        </div>
                                    </form>
                                </>
                            ):(
                                <>
                                    <h1>Welcome back<br />{stateReduxFirstName+" "+stateReduxLastName} !</h1>
                                    <button className="edit-button" onClick={()=>displayFormEdit()}>Edit Name</button>
                                </>
                            )
                        }
                        
                    </div>
                    <h2 className="sr-only">Accounts</h2>
                    {
                        tab.map((elt)=>
                        <AccountCard key={elt.id}/>
                        )
                    }
                </main>
            </>
        )   

        }else{
            //else page of error
            return <Error/>
        }
    
}
