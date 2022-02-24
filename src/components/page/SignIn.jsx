import React from 'react';

import './SignIn.css';


 export const connexion=()=>({
    type:"connexion",
    payload:{nameUser:"Alex"},
})
/**show Page Sign-in
 *  
 * @returns {JSX}
 */

 export default function SignIn(){

  return ( 
    <>   
        <main className="main bg-dark space">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">Username</label><input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label><input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                    </div>

                    <button type="button" className="sign-in-button" onClick={()=>{ connexion() }}>Sign In</button>

                </form>
            </section>
        </main>
    </>
  )   

}
