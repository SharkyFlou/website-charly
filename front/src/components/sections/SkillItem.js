import './Skills.css';
import SlideInOnScroll from '../ui/SlideInOnScroll';
import GlitchImage from '../ui/GlitchImage';

function SkillItem({ src, text, level, alt }) {
    return (
        <SlideInOnScroll>
            <div className='skill'>
                <GlitchImage
                    src={src}
                    alt={alt}
                    wrapperClassName='img_container'
                    imageClassName='skill_img'
                />
                <div className='skill_caption'>
                    <h5 className='skill_text'>{text}</h5>
                    <h5 className='skill_level'>{level}</h5>
                </div>
            </div>
        </SlideInOnScroll>
    );
}

export default SkillItem;
