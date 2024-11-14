import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <h1><span>I'm Vivek Kumar Yadav,</span> Frontend developer based in India</h1>
        <p>I am a Computer Science Enginnering student from Kolkata,India.Interested in Web development.
            
        </p>

        <div className="hero-action">
            <div className="hero-connect">Connect With Me</div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero