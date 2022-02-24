import React from 'react';
import './Banner.css';
import pictureBanner from "../../../assets/bank-tree.jpeg"

/**show banner 
 *  
 * @returns {JSX}
 */

export default function Banner(){
  
  
  return ( 
    <>
      <div className="hero">
        <img src={pictureBanner} alt='picture of two sprouts with coins at their feet' className='hero-picture'/>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    </>
  )   

}
