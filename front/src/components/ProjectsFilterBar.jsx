import { PROJECT_FILTERS } from '../hooks/useFilteredProjects';

const FILTER_LABELS = [
  { key: PROJECT_FILTERS.ALL, labelKey: 'projects_all' },
  { key: PROJECT_FILTERS.BEST, labelKey: 'projects_best' },
  { key: PROJECT_FILTERS.RECENT, labelKey: 'projects_recent' },
];

function ProjectsFilterBar({ activeFilter, onChange, t }) {
  return (
    <div className='projects_btns'>
      {FILTER_LABELS.map(({ key, labelKey }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={activeFilter === key ? 'btn_prj active' : 'btn_prj'}
        >
          {t(labelKey)}
        </button>
      ))}
    </div>
  );
}

export default ProjectsFilterBar;
