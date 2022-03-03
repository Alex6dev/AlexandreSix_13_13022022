import React from 'react';
import Logo from '../../assets/argentBankLogo.png';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector,useDispatch } from 'react-redux';
import * as connectionActions from '../../features/connection';
import { useHistory } from 'react-router-dom';



/**show Header  
 * @returns {JSX}
 */

export default function Header(){
  const isConnected = useSelector((state)=>state.connection.isConnected)
  const firstName = useSelector((state)=>state.connection.firstName)
  const dispatch = useDispatch()
  const history= useHistory() 

  function signOut(){
    dispatch(connectionActions.signOut())
    history.push("/")
  }
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
            {isConnected?(
              <><Link to="/profile" className='main-nav-item'>
                <i className="fa fa-user-circle"></i>
                {firstName}
              </Link>

               <button type='button' className='main-nav-item main-button-out' onClick={()=>signOut()}>
               <svg xmlns="http://www.w3.org/2000/svg" width={25} height={20} style={{marginBottom: -0.3 + 'em'}}  viewBox="0 0 512 512" ><path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z"/></svg>
               Sign out
             </button></>
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
