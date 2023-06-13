import React from 'react'
import './Skills.css'
import SkillItem from './SkillItem'

function Skills() {
    return (
        <>
            <div className='bar__skills'/> 
            <div className='skills' >
                <h1 id='skills'>My Skills</h1>
                <div className='skills__container'>
                    <SkillItem 
                        src='/images/logos/java.png'
                        text='Java'
                        level='Advanced +'
                        alt='java logo'
                    />
                    <SkillItem 
                        src='/images/logos/c.png'
                        text='C'
                        level='Advanced'
                        alt='C logo'
                    />
                    <SkillItem 
                        src='/images/logos/c++.png'
                        text='C++'
                        level='Intermediate +'
                        alt='C++ logo'
                    />
                    <SkillItem 
                        src='/images/logos/csharp.png'
                        text='C#'
                        level='Intermediate +'
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/logos/javascript.png'
                        text='C#'
                        level='Intermediate'
                        alt='javascript logo'
                    />
                    <SkillItem 
                        src='/images/logos/html5.png'
                        text='HTLM5'
                        level='Advanced +'
                        alt='HTML5 logo'
                    />
                    <SkillItem 
                        src='/images/logos/css.png'
                        text='CSS'
                        level='Intermediate +'
                        alt='CSS logo'
                    />
                    <SkillItem 
                        src='/images/logos/sql.png'
                        text='SQL'
                        level='Intermediate +'
                        alt='SQL logo'
                    />
                    <SkillItem 
                        src='/images/logos/python.png'
                        text='Python'
                        level='Intermediate'
                        alt='Python logo'
                    />
                    <SkillItem 
                        src='/images/logos/php.png'
                        text='PHP'
                        level='Beginner +'
                        alt='PHP logo'
                    />
                    <SkillItem 
                        src='/images/logos/git.png'
                        text='git'
                        level='Advanced'
                        alt='git logo'
                    />
                    <SkillItem 
                        src='/images/logos/bash.png'
                        text='bash'
                        level='Intermediate'
                        alt='bash logo'
                    />
                    <SkillItem 
                        src='/images/logos/UML.png'
                        text='UML'
                        level='Advanced'
                        alt='UML logo'
                    />
                    <SkillItem 
                        src='/images/logos/junit5.png'
                        text='Junit5'
                        level='Beginner +'
                        alt='Junit5 logo'
                    />
                    <SkillItem 
                        src='/images/logos/nodejs.png'
                        text='node.js'
                        level='Intermediate'
                        alt='Python logo'
                    />
                    <SkillItem 
                        src='/images/logos/laravel.png'
                        text='Laravel'
                        level='Beginner +'
                        alt='Laravel logo'
                    />
                    <SkillItem 
                        src='/images/logos/reactjs.png'
                        text='react.js'
                        level='Intermediate'
                        alt='React logo'
                    />
                    <SkillItem 
                        src='/images/logos/aspnet.png'
                        text='ASP.net'
                        level='Intermediate'
                        alt='ASP.net logo'
                    />
                    <SkillItem 
                        src='/images/logos/unity.png'
                        text='Unity'
                        level='Intermediate +'
                        alt='Unity logo'
                    />
                </div>

            </div>
        </>
    )
}

export default Skills