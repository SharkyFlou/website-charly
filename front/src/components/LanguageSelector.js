import React from "react";
import './LanguageSelector.css';
import Select from 'react-select';
import i18n from '../i18n';
import { withTranslation  } from 'react-i18next';


const LanguageSelector = ({t}) => {
    const countries = [
        { value: 'en', image: process.env.PUBLIC_URL + "/flags/en.png" },
        { value: 'fr', image: process.env.PUBLIC_URL + "/flags/fr.png" }
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }


    const currentLanguage = i18n.language;
    const currentLanguageObj = countries.find(country => country.value === currentLanguage);


    return (
        <div className="language__selector">
            <Select
                defaultValue={currentLanguageObj}
                options={countries}
                className="language__selector__dropdown"
                isSearchable={false}
                formatOptionLabel={country => (
                    <div className="country__option" onClick={() => changeLanguage(country.value)}>
                        <img src={country.image} className="dropdown__selector__language" alt={"country" + country.value} />
                    </div>
                )}
            />
        </div>
    );
};

export default withTranslation()(LanguageSelector);
