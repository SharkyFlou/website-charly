import ProjectItem from './ProjectItem';
import { PROJECT_FILTERS } from '../hooks/useFilteredProjects';

const CONTAINER_WIDTH = 1120;
const TWO_COL = CONTAINER_WIDTH / 2 - 40;
const THREE_COL = CONTAINER_WIDTH / 3 - 80;

const LAYOUTS = {
  [PROJECT_FILTERS.ALL]: [
    { start: 0, end: 2, width: TWO_COL },
    { start: 2, end: 5, width: THREE_COL },
    { start: 5, end: 7, width: TWO_COL },
  ],
  default: [
    { start: 0, end: 2, width: TWO_COL },
    { start: 2, end: 5, width: THREE_COL },
  ],
};

function ProjectsList({ projects, activeFilter }) {
  const layout = LAYOUTS[activeFilter] ?? LAYOUTS.default;

  return (
    <>
      {layout.map((row, idx) => (
        <ul key={idx} className='projects_items'>
          {projects.slice(row.start, row.end).map((project) => (
            <ProjectItem key={project.id} project={project} widthMaxSize={row.width} />
          ))}
        </ul>
      ))}
    </>
  );
}

export default ProjectsList;
