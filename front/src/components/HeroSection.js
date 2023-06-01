import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'

function HeroSection({scrollFunc}) {
    const forwardToSccroll = (idName) => () => {
        scrollFunc(idName);
    };

    return (
        <div className='hero-container'>
            {/*<video autoPlay loop muted > 
            <source src="/videos/video-1.mp4" type="video/mp4" /> 
        </video>
        */}
            <div className='about__container'>
                <div className='about__img__container'>
                    <img src={process.env.PUBLIC_URL + '/images/charly-flu.jpg'} alt='Profile of Charly FLU' className='me__img' />
                </div>
                <div className='about__text'>
                    <h1>Hi, welcome on my website</h1>
                    <p>My name is Charly FLU, I'm a developer.</p>
                    <p>I'm currently studying at the University of Robert Schuman in France. </p>
                    <p>I'm looking for an internship in the field of web development.</p>
                    <p>I built this website to show you my skills and my projects.</p>
                    
                    <div className="hero-btns">
                        <Button className='btns' buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            link='/#projects'
                            onClick={forwardToSccroll('projects')}
                            >
                            MY FAVOURITE PROJECTS
                        </Button>
                        <Button className='btns' buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            link='/#skills'
                            onClick={forwardToSccroll('skills')}
                            >
                            MY SKILLS
                            <i class="fa-solid fa-address-book"></i>
                        </Button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection