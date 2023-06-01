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
                        src='/images/csharp.png'
                        text='C#'
                        level='Expeeeert'
                        alt=' noooo'
                    />
                    <SkillItem 
                        src='/images/csharp.png'
                        text='C#'
                        level='Expert'
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/csharp.png'
                        text='C#'
                        level='Expert'
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/csharp.png'
                        text='C#'
                        level='Expert'
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/csharp.png'
                        text='C#'
                        level='Expert'
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/csharp.png'
                        text='C#'
                        level='Expert'
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/csharp.png'
                        text='C#'
                        level='Expert'
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/csharp.png'
                        text='C#'
                        level='Expert'
                        alt='C sharp logo'
                    />
                    <SkillItem 
                        src='/images/csharp.png'
                        text='C#'
                        level='Expert'
                        alt='C sharp logo'
                    />
                </div>

            </div>
        </>
    )
}

export default Skills