import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './login.css';
import * as connectionActions from '../../features/connection';
import { axiosToken, axiosProfile } from '../../CallApi/callApi';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


/**show Page Sign-in
 *  
 * @returns {JSX}
 */

export default function SignIn(){
    const dispatch = useDispatch()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const history=useHistory()
    var valueEmail=undefined
    const stateReduxRememberMe=useSelector((state)=>state.connection.rememberMe)
    const stateReduxEmail=useSelector((state)=>state.connection.email)
    const stateReduxToken=useSelector((state)=>state.connection.token)


    async function  getUserAxios(){
        const axios=await axiosProfile(stateReduxToken)           
        dispatch(connectionActions.getUser({firstName:axios.firstName,lastName:axios.lastName}))
    }
    function selectRememberMe(){
        dispatch(connectionActions.rememberMeChange())
    }
    
    async function submit(){
        console.log({email,password})
        console.log({emai:'steve@rogers.com',passwor:'password456'})
        const responseAxios= await axiosToken({email,password})
        if(responseAxios){
            dispatch(connectionActions.getToken({token:responseAxios,email:email}))
        }
    }
    
    function whoAmI(rememberMe){
        if(rememberMe){
            valueEmail=stateReduxEmail
            //setEmail(stateReduxEmail)
        }
    }
    whoAmI(stateReduxRememberMe)
    useEffect(()=>{
        if(stateReduxToken){      
            getUserAxios()  
            history.push("/profile")
        }
    },[stateReduxToken])

  return ( 
    <>   
        <main className="main bg-dark space bg">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label><input type="text" value={valueEmail} id="username" onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <label htmlFor="remember-me" ><input type="checkbox" id="remember-me"onClick={()=>selectRememberMe()} />Remember me</label>
                    </div>

                    <button type="button" className="sign-in-button" onClick={()=>submit()}>Sign In</button>

                </form>
            </section>
        </main>
    </>
  )   

}
