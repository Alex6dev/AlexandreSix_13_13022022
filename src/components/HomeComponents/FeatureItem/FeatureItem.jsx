import React from 'react';
import './FeatureItem.css';
import iconChat from '../../../assets/iconChat.png';
import iconMoney from '../../../assets/iconMoney.png';
import iconSecurity from '../../../assets/iconSecurity.png';

/**show item feature 
 *  @param {object} props.element
 *  @param {string} props.element.img
 *  @param {string} props.element.title
 *  @param {string} props.element.text
 * @returns {JSX}
 */

export default function FeatureItem(props){

  let variableImg;
  switch(props.element.img){
    case 'pictureChat': 
    variableImg=iconChat
      break;
      
    case 'pictureMoney':
    variableImg=iconMoney
      break;
    
    case 'pictureSecurity':
    variableImg=iconSecurity
      break;
      
    
  }
  
  return ( 
    <>
      <div className="feature-item">
          <img src={variableImg} alt="Chat Icon" className="feature-icon" />
          <h3 className="feature-item-title">{props.element.title}</h3>
          <p>
            {props.element.text}
          </p>
        </div>
    </>
  )   

}

