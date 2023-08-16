import React from 'react'
import './Skills.css'
import SkillItem from './SkillItem'

function Skills({t}) {
    return (
        <>
            <div className='bar__skills'/> 
            <div className='skills' >
                <h1 id='skills'>{t("skills__title")}</h1>
                <div className='skills__container'>
                    <SkillItem 
                        src='/images/logos/java.png'
                        text='Java'
                        level={t("skill__level__advanced")+ " +"}
                        alt='java logo'
                    />
                    <SkillItem 
                        src='/images/logos/c.png'
                        text='C'
                        level={t("skill__level__advanced")}
                        alt='C logo'
                    />
                    <SkillItem 
                        src='/images/logos/c++.png'
                        text='C++'
                        level={t("skill__level__intermediate")+" +"}
                        alt='C++ logo'
                    />
                    <SkillItem 
                        src='/images/logos/csharp.png'
                        text='C#'
                        level={t("skill__level__intermediate")+" +"}
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/logos/javascript.png'
                        text='Javascript'
                        level={t("skill__level__intermediate")}
                        alt='javascript logo'
                    />
                    <SkillItem 
                        src='/images/logos/html5.png'
                        text='HTML5'
                        level={t("skill__level__advanced")+ " +"}
                        alt='HTML5 logo'
                    />
                    <SkillItem 
                        src='/images/logos/css.png'
                        text='CSS'
                        level={t("skill__level__intermediate")+" +"}
                        alt='CSS logo'
                    />
                    <SkillItem 
                        src='/images/logos/sql.png'
                        text='SQL'
                        level={t("skill__level__intermediate")+" +"}
                        alt='SQL logo'
                    />
                    <SkillItem 
                        src='/images/logos/python.png'
                        text='Python'
                        level={t("skill__level__intermediate")}
                        alt='Python logo'
                    />
                    <SkillItem 
                        src='/images/logos/php.png'
                        text='PHP'
                        level={t("skill__level__intermediate")}
                        alt='PHP logo'
                    />
                    <SkillItem 
                        src='/images/logos/git.png'
                        text='git'
                        level={t("skill__level__advanced")}
                        alt='git logo'
                    />
                    <SkillItem 
                        src='/images/logos/bash.png'
                        text='bash'
                        level={t("skill__level__intermediate")}
                        alt='bash logo'
                    />
                    <SkillItem 
                        src='/images/logos/uml.png'
                        text='UML'
                        level={t("skill__level__advanced")}
                        alt='UML logo'
                    />
                    <SkillItem 
                        src='/images/logos/junit5.png'
                        text='Junit5'
                        level={t("skill__level__beginner")+" +"}
                        alt='Junit5 logo'
                    />
                    <SkillItem 
                        src='/images/logos/nodejs.png'
                        text='node.js'
                        level={t("skill__level__intermediate")}
                        alt='Python logo'
                    />
                    <SkillItem 
                        src='/images/logos/laravel.png'
                        text='Laravel'
                        level={t("skill__level__beginner")+" +"}
                        alt='Laravel logo'
                    />
                    <SkillItem 
                        src='/images/logos/reactjs.png'
                        text='react.js'
                        level={t("skill__level__intermediate")}
                        alt='React logo'
                    />
                    <SkillItem 
                        src='/images/logos/aspnet.png'
                        text='ASP.net'
                        level={t("skill__level__intermediate")}
                        alt='ASP.net logo'
                    />
                    <SkillItem 
                        src='/images/logos/unity.png'
                        text='Unity'
                        level={t("skill__level__intermediate")+" +"}
                        alt='Unity logo'
                    />
                </div>

            </div>
        </>
    )
}

export default Skills