import './LanguageSelector.css';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';

const COUNTRIES = [
    { value: 'fr', image: '/flags/fr.png' },
    { value: 'en', image: '/flags/en.png' },
];

const findLanguageOption = (code) =>
    COUNTRIES.find((c) => c.value === code) ?? COUNTRIES.find((c) => c.value === 'fr');

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [searchParams, setSearchParams] = useSearchParams();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        const next = new URLSearchParams(searchParams);
        next.set('language', lng);
        setSearchParams(next, { replace: true });
    };

    const currentOption = findLanguageOption(i18n.language);

    return (
        <div className='language_selector'>
            <Select
                value={currentOption}
                options={COUNTRIES}
                className='language_selector_dropdown'
                isSearchable={false}
                onChange={(option) => option && changeLanguage(option.value)}
                formatOptionLabel={(country) => (
                    <div className='country_option'>
                        <img
                            src={country.image}
                            className='dropdown_selector_language'
                            alt={`country-${country.value}`}
                        />
                    </div>
                )}
            />
        </div>
    );
};

export default LanguageSelector;
