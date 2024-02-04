import React from 'react'
import CoverImage from '../../resources/coverImage.jpg'
import './Home.css'
import Offer from '../Offer/Offer'

const Home = () => {
  return (
    <div>
    <div className='homeDiv'>
        <img className='coverImg' src={CoverImage} alt="Laptop" />
        <p className='heroText animate-charcter'>  Unbox Brilliance</p>
        <button className= 'heroButton'>Shop Now</button>
        
    </div>
    <Offer/>
    </div>

  )
}

export default Home