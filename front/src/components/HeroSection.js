import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import './Glitch.css'
import '../App.css'
import { Link } from 'react-router-dom';
import SlideInOnScroll from './SlideInOnScroll'
import { scrollTo } from './Scroll'

function HeroSection({ t }) {
    const forwardToScroll = (idName) => () => {
        scrollTo(idName);
    };


    return (

        <div className='hero-container'>
            {/*<video autoPlay loop muted > 
            <source src="/videos/video-1.mp4" type="video/mp4" /> 
        </video>
        */}
            <SlideInOnScroll>
                <div className='about__container'>
                    <div className='about__img__container'>
                        <div src={process.env.PUBLIC_URL + "/images/charly-flu-3.jpg"} className="me__img c-glitch me__englobe">
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                            <img src={process.env.PUBLIC_URL + '/images/charly-flu-3.jpg'} alt='Profile of Charly FLU' className='me__img c-glitch__img' />
                        </div>
                    </div>
                    <div className='about__text'>
                        <h1>{t("home__title")}</h1>
                        <p>{t("home__intro__pt1")}</p>
                        <p className="single__line__text">{t("home__intro__pt2")} <Link className="link__about" to="https://iutrs.unistra.fr" target="_blank">{t("home__intro__pt3")}</Link> {t("home__intro__pt4")} </p>
                        <p className="single__line__text">{t("home__intro__pt6")} <Link className="link__about" to="https://abas-bs.com/fr" target="_blank">{t("home__intro__pt7")}</Link> {t("home__intro__pt8")} </p>
                        <p>{t("home__intro__pt5")}</p>
                        <p className="warning">{t("home__intro__pt9")}</p>

                        <div className="hero-btns">
                            <Button className='btns' buttonStyle='btn--outline'
                                buttonSize='btn--large'
                                link='/#projects'
                                onClick={forwardToScroll('projects__id')}
                            >
                                {t("home__projects__title")}
                            </Button>
                            <Button className='btns' buttonStyle='btn--primary'
                                buttonSize='btn--large'
                                link='/#skills'
                                onClick={forwardToScroll('skills__id')}
                            >
                                {t("home__skills__title")}
                                {/*<i className="fa-solid fa-address-book"></i>*/}
                            </Button>

                        </div>
                    </div>
                </div>
            </SlideInOnScroll>
        </div>
    )
}

export default HeroSection