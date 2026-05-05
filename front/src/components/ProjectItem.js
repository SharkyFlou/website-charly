import './Projects.css';
import ImageSlider from './ImageSlider';
import SlideInOnScroll from './SlideInOnScroll';

function ProjectItem({ project }) {
    return (
        <SlideInOnScroll>
            <li className='projects_item'>
                <div className='projects_item_container'>
                    <figure className='projects_item_pic-wrap' data-category={project.title}>
                        <ImageSlider
                            slides={project.slides}
                            path={project.path}
                            alt={project.alt}
                            timeWaitMore={project.timeWaitMore}
                        />
                    </figure>
                    <div className='projects_item_info'>
                        <h5 className='projects_item_text'>{project.description}</h5>

                        {project.languages.map((language, index) => (
                            <a
                                key={index}
                                className='language_item_link'
                                href={language.link}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <h5 className='language_item_text'>{language.name}</h5>
                            </a>
                        ))}
                    </div>
                </div>
            </li>
        </SlideInOnScroll>
    );
}

export default ProjectItem;
