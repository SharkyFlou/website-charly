import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import '../ui/Glitch.css';
import '../../styles/globals.css';
import SlideInOnScroll from '../ui/SlideInOnScroll';
import GlitchImage from '../ui/GlitchImage';
import { useScrollLink } from '../../hooks/useScrollLink';

const PROFILE_IMG = '/images/charly_22.3.jpg';

function HeroSection() {
    const { t } = useTranslation();
    const { linkProps } = useScrollLink();

    return (
        <div className='hero-container'>
            <SlideInOnScroll>
                <div className='about_container'>
                    <div className='about_img_container'>
                        <GlitchImage
                            src={PROFILE_IMG}
                            alt='Profile of Charly FLU'
                            wrapperClassName='me_img c-glitch me_englobe'
                            imageClassName='me_img c-glitch_img'
                        />
                    </div>
                    <div className='about_text'>
                        <h1>{t('home_title_pt1')}</h1>
                        <h2>{t('home_title_pt2')}</h2>
                        <p>
                            {t('home_intro_pt1')}
                            {t('home_intro_pt2')}{' '}
                            <a className='link_about' href='https://www.cnam-grandest.fr/formations/ing3400a/' target='_blank' rel='noreferrer'>
                                {t('home_intro_pt3')}
                            </a>{' '}
                            {t('home_intro_pt4')}
                            <a className='link_about' href='https://www.e-i.com/fr/index.html' target='_blank' rel='noreferrer'>
                                {t('home_intro_pt5')}{' '}
                            </a>{' '}
                            {t('home_intro_pt6')}
                            {t('home_intro_pt7')}
                        </p>

                        <div className='hero-btns inv-mobile'>
                            <Link {...linkProps('projects')} className='btn btn--large'>
                                <span>{t('home_projects_title')}</span>
                                <img src='/images/arrow_down.png' alt='Flêche vers le bas' className='arrow_down' />
                            </Link>
                            <Link {...linkProps('skills')} className='btn btn--large'>
                                <span>{t('home_skills_title')}</span>
                                <img src='/images/arrow_down.png' alt='Flêche vers le bas' className='arrow_down' />
                            </Link>
                        </div>
                    </div>
                </div>
            </SlideInOnScroll>
        </div>
    );
}

export default HeroSection;
