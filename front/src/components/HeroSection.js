import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import './Glitch.css'
import '../App.css'
import { Link } from 'react-router-dom';

function HeroSection({scrollFunc}) {
    const forwardToScroll = (idName) => () => {
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
                    <div src={process.env.PUBLIC_URL + "/images/charly-flu.jpg"} className="me__img c-glitch me__englobe"> 
                        <img src={process.env.PUBLIC_URL + '/images/charly-flu.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                        <img src={process.env.PUBLIC_URL + '/images/charly-flu.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                        <img src={process.env.PUBLIC_URL + '/images/charly-flu.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                        <img src={process.env.PUBLIC_URL + '/images/charly-flu.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                        <img src={process.env.PUBLIC_URL + '/images/charly-flu.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                    </div>
                </div>
                <div className='about__text'>
                    <h1>Hi, welcome on my online portfolio !</h1>
                    <p>My name is Charly FLU, I'm a developer.</p>
                    <p className="single__line__text">I'm currently studying at the <Link className="link__about" to="https://iutrs.unistra.fr" target="_blank">University of Robert Schuman</Link> in France. </p>
                    <p>I built this website to show you my skills and my projects, and most of all, because I always wanted to have my own website to experiment things.</p>
                    <p className="warning">This is still under development !</p>
                    
                    <div className="hero-btns">
                        <Button className='btns' buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            link='/#projects'
                            onClick={forwardToScroll('projects')}
                            >
                            MY FAVOURITE PROJECTS
                        </Button>
                        <Button className='btns' buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            link='/#skills'
                            onClick={forwardToScroll('skills')}
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