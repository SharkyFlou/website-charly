import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            {/*<video autoPlay loop muted > 
            <source src="/videos/video-1.mp4" type="video/mp4" /> 
        </video>
        */}
            <h1>WELCOME ON  CHARLY FLU'S WEBSITE</h1>
            <p>Quick presentation ?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    LET ME INTRODUCE MYSELF
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large'>
                    MY CONTACT
                    <i class="fa-solid fa-address-book"></i>
                </Button>
            </div>

        </div>
    )
}

export default HeroSection