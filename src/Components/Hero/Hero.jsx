import React from 'react'
import './Hero.css'
import arrow_icon from '../Assests/arrow.png'
import hero_image from '../Assests/hero.jpg'

const Hero = () => {
  return (
    <div className="hero">
    <div className="hero-left">
    <h2>DAILY TIFFEN, DAILY SMILES.</h2>
    <div>
    <p>A delicious</p>
    <p>meal just a </p>

        {/* <div className="hero-hand-icon">
            <img src={hand_icon} alt="" />
        </div> */}
        
        <p>Tiffin away!</p>
    </div>
    <div className="hero-latest-btn">
        <div>Discover Your Flavour!</div>
        <img src={arrow_icon.png} alt="" />
    </div>
    </div>
    <div className="hero-right">
      <img src={hero_image} alt="" />
    </div>
    </div>
  )
}

export default Hero
