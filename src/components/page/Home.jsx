import React from 'react';
import Banner from '../HomeComponents/Banner/Banner';
import FeatureItem from '../HomeComponents/FeatureItem/FeatureItem'
import './Home.css'

const informationFeature=[
  {
    id:1,
    img:"pictureChat",
    title:"You are our #1 priority",
    text:"Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
  },
  {
    id:2,
    img:'pictureMoney',
    title:"More savings means higher rates",
    text:"The more you save with us, the higher your interest rate will be!",
  },
  
  
  {
    id:3,
    img:'pictureSecurity',
    title:"Security you can trust",
    text:"We use top of the line encryption to make sure your data and money is always safe.",
  }
]
/**show Page Home 
 *  
 * @returns {JSX}
 */

 export default function Home(){

  return ( 
    <>
      <main>
        <Banner/>
        <section className='features'>
          <h2 className="sr-only">Features</h2>
            {informationFeature.map((elt)=>
              <FeatureItem element={elt} key={elt.id}/>
            )}
        </section>
      </main>

    </>
  )   

}
