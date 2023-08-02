import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import './Glitch.css'
import '../App.css'
import { Link } from 'react-router-dom';

function HeroSection({scrollFunc, t}) {
    const forwardToScroll = (idName) => () => {
        scrollFunc(idName);
    };

    const translations = {
        "home__title": "Charly FLU",
        "home__intro__pt1": "Étudiant en 2ème année de DUT Réseaux et Télécommunications à l'IUT Robert Schuman de Strasbourg.",
        "home__intro__pt2": "Je suis actuellement en recherche d'un stage de 10 semaines à partir du 11 avril 2022.",
        "home__intro__pt3": "IUT Robert Schuman",
        "home__intro__pt4": "de Strasbourg",
        "home__intro__pt5": "Je suis à la recherche d'un stage dans le domaine des réseaux et de la cybersécurité.",
        "home__intro__pt6": "Les dates de stage sont modifiables en fonction des disponibilités de l'entreprise.",
        "home__projects__title": "Mes projets",
        "home__skills__title": "Mes compétences",
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
                    <h1>{t("home__title")}</h1>
                    <p>{t("home__intro__pt1")}</p>
                    <p className="single__line__text">{t("home__intro__pt2")} <Link className="link__about" to="https://iutrs.unistra.fr" target="_blank">{t("home__intro__pt3")}</Link> {translations["home__intro__pt4"]} </p>
                    <p>{t("home__intro__pt5")}</p>
                    <p className="warning">{t("home__intro__pt6")}</p>
                    
                    <div className="hero-btns">
                        <Button className='btns' buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            link='/#projects'
                            onClick={forwardToScroll('projects')}
                            >
                            {t("home__projects__title")}
                        </Button>
                        <Button className='btns' buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            link='/#skills'
                            onClick={forwardToScroll('skills')}
                            >
                            {t("home__skills__title")}
                            <i className="fa-solid fa-address-book"></i>
                        </Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection