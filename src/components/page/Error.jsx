import React from 'react';
import './Error.css';
import { Link } from 'react-router-dom';






/**show Page User profile
 *  
 * @returns {JSX}
 */

 export default function Error(){
    
    
    return(
        <>
            <main className='main bg-dark error-main'>
                <div className='error-container'>
                    <p className='error-text'>404</p>
                    <p className='error-text'>Whoops! The page you requested does not exist.</p>
                    <Link to='/'><button type='button' className='error-btn'><p className='error-link error-text'>Return to the homepage</p></button></Link>
                </div>
            </main>    
        </>
    )
}
