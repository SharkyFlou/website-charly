import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
    const { t } = useTranslation();
    return (
        <div className='footer'>
            <div className='footer_section'>
                <a
                    href='https://github.com/SharkyFlou/website-charly/blob/main/LICENSE'
                    className='footer_link'
                    target='_blank'
                    rel='noreferrer'
                >
                    {t('footer_license_pt1')} <i className='fa-solid fa-scale-balanced'></i> {t('footer_license_pt2')}
                </a>
                <a
                    href='https://github.com/SharkyFlou/website-charly'
                    className='footer_link'
                    target='_blank'
                    rel='noreferrer'
                >
                    {t('footer_github')} <i className='fa-brands fa-github'></i>
                </a>
            </div>
            <p>
                {t('footer_built')}
                <br />
                {t('footer_thanks')}
            </p>
        </div>
    );
}

export default Footer;
