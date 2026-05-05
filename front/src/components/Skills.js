import './Skills.css';
import SkillItem from './SkillItem';
import Tabs from './Tabs';
import SlideInOnScroll from './SlideInOnScroll';
import { SKILLS_TABS } from '../data/skills';

function Skills({ t }) {
    return (
        <>
            <div className='bar_skills' />
            <div className='skills'>
                <div id='skills' />
                <SlideInOnScroll>
                    <h1>{t('skills_title')}</h1>
                </SlideInOnScroll>
                <SlideInOnScroll>
                    <div className='skills_container'>
                        <Tabs>
                            {SKILLS_TABS.map((tab) => (
                                <div key={tab.id} id={tab.id} label={t(tab.labelKey)}>
                                    {tab.items.map((item) => (
                                        <SkillItem
                                            key={`${tab.id}-${item.text}`}
                                            src={item.src}
                                            text={item.text}
                                            level={t(item.levelKey) + item.suffix}
                                            alt={item.alt}
                                        />
                                    ))}
                                </div>
                            ))}
                        </Tabs>
                    </div>
                </SlideInOnScroll>
            </div>
        </>
    );
}

export default Skills;
