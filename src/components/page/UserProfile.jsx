import React from 'react';
import AccountCard from '../AccountCard/AccountCard'; 
import './UserProfile.css';

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

  return ( 
    <>   
        
        <main className="main bg-dark">
            <div className="header title-welcome">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
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

}
