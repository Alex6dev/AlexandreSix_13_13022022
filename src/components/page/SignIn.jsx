import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './SignIn.css';
import * as connectionActions from '../../features/connection'


/**show Page Sign-in
 *  
 * @returns {JSX}
 */

 export default function SignIn(){
    const dispatch = useDispatch()
    const [email, setEmail]=useState()
    const [password, setPassword]=useState()
    const [remember,setRemember]=useState()
    function submit(){
        dispatch(connectionActions.emailAction({email,password})) 
    }


    /*useEffect(()=>{
        if(token){
            return navigate("/profile")
        }
    },[token])*/
  return ( 
    <>   
        <main className="main bg-dark space">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label><input type="text" id="username" onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="button" className="sign-in-button" onClick={()=>submit()}>Sign In</button>

                </form>
            </section>
        </main>
    </>
  )   

}
