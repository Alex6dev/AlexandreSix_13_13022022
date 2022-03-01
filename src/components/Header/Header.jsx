import React from 'react';
import Logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';

/**show Header  
 * @returns {JSX}
 */

 export default function Header(){
   const token = useSelector((state)=>state.connection.token)
  return ( 
    <>
      <header className='header'>
        <nav className="main-nav">
          <Link className="main-nav-logo" to="/">
            <img
              className="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </Link>
          <div>
            {token?(
              <><Link to="/profile" className='main-nav-item'>
                <i className="fa fa-user-circle"></i>
                name
              </Link>

               <Link to="/profile" className='main-nav-item'>
               <i className="fa fa-user-circle"></i>
               out
             </Link></>
            ):(
              <Link className="main-nav-item" to="/login">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
            )

            }
          </div>
        </nav>
      </header>   
    </>     
  );  
}
