import ProjectItem from './ProjectItem';
import { PROJECT_FILTERS } from '../../hooks/useFilteredProjects';

const LAYOUTS = {
  [PROJECT_FILTERS.ALL]: [
    { start: 0, end: 2 },
    { start: 2, end: 5 },
    { start: 5, end: 7 },
  ],
  default: [
    { start: 0, end: 2 },
    { start: 2, end: 5 },
  ],
};

function ProjectsList({ projects, activeFilter }) {
  const layout = LAYOUTS[activeFilter] ?? LAYOUTS.default;

  return (
    <>
      {layout.map((row, idx) => (
        <ul key={idx} className='projects_items'>
          {projects.slice(row.start, row.end).map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </ul>
      ))}
    </>
  );
}

export default ProjectsList;
