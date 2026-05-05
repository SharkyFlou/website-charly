import { useTranslation } from 'react-i18next';
import './Contact.css';
import SlideInOnScroll from '../ui/SlideInOnScroll';

const CONTACT_LINKS = [
    {
        href: 'https://www.linkedin.com/in/charlyflu',
        icon: 'fa-brands fa-linkedin',
        label: 'in/charlyflu/',
    },
    {
        href: 'mailto:charly.flu.67.150@gmail.com',
        icon: 'fa-solid fa-envelope',
        label: 'charly.flu.67.150@gmail.com',
    },
    {
        href: 'https://github.com/SharkyFlou',
        icon: 'fa-brands fa-github',
        label: 'SharkyFlou',
    },
];

function Contact() {
    const { t } = useTranslation();
    return (
        <>
            <div className='bar_contact' />
            <div className='contact'>
                <div id='contact' />
                <SlideInOnScroll>
                    <h1>{t('Contact')}</h1>
                </SlideInOnScroll>
                <SlideInOnScroll>
                    <div className='contact_container'>
                        {CONTACT_LINKS.map((link) => (
                            <a
                                key={link.href}
                                className='contact_item_link'
                                href={link.href}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className={link.icon}></i>
                                {link.label}
                            </a>
                        ))}
                    </div>
                </SlideInOnScroll>
            </div>
        </>
    );
}

export default Contact;
