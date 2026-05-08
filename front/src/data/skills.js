const BEGINNER = 'skill_level_beginner';
const INTERMEDIATE = 'skill_level_intermediate';
const ADVANCED = 'skill_level_advanced';

const skill = (src, text, levelKey, alt, suffix = '') => ({ src, text, levelKey, alt, suffix });

export const SKILLS_TABS = [
  {
    id: 'TAB_1',
    labelKey: 'skill_tab_core_lang',
    items: [
      skill('/images/logos/java.png', 'Java', ADVANCED, 'java logo', ' +'),
      skill('/images/logos/c.png', 'C', ADVANCED, 'C logo'),
      skill('/images/logos/c++.png', 'C++', INTERMEDIATE, 'C++ logo', ' +'),
      skill('/images/logos/csharp.png', 'C#', ADVANCED, 'C sharp logo'),
      skill('/images/logos/cobol.png', 'Cobol', INTERMEDIATE, 'Cobol logo', ' +'),
      skill('/images/logos/python.png', 'Python', INTERMEDIATE, 'Python logo'),
      skill('/images/logos/javascript.png', 'Javascript', INTERMEDIATE, 'javascript logo'),
      skill('/images/logos/html5.png', 'HTML5', ADVANCED, 'HTML5 logo', ' +'),
      skill('/images/logos/css.png', 'CSS', INTERMEDIATE, 'CSS logo', ' +'),
      skill('/images/logos/php.png', 'PHP', INTERMEDIATE, 'PHP logo'),
      skill('/images/logos/uml.png', 'UML', ADVANCED, 'UML logo'),
      skill('/images/logos/yaml.png', 'Yaml', BEGINNER, 'Yaml logo', ' +'),
    ],
  },
  {
    id: 'TAB_2',
    labelKey: 'skill_tab_webdev',
    items: [
      skill('/images/logos/javascript.png', 'Javascript', INTERMEDIATE, 'javascript logo'),
      skill('/images/logos/html5.png', 'HTML5', ADVANCED, 'HTML5 logo', ' +'),
      skill('/images/logos/css.png', 'CSS', INTERMEDIATE, 'CSS logo', ' +'),
      skill('/images/logos/reactjs.png', 'react.js', INTERMEDIATE, 'React logo'),
    ],
  },
  {
    id: 'TAB_3',
    labelKey: 'skill_tab_backend',
    items: [
      skill('/images/logos/php.png', 'PHP', INTERMEDIATE, 'PHP logo'),
      skill('/images/logos/nodejs.png', 'node.js', INTERMEDIATE, 'node.js logo'),
      skill('/images/logos/laravel.png', 'Laravel', BEGINNER, 'Laravel logo', ' +'),
      skill('/images/logos/aspnet.png', 'ASP.net', INTERMEDIATE, 'ASP.net logo'),
    ],
  },
  {
    id: 'TAB_4',
    labelKey: 'skill_tab_tools_practices',
    items: [
      skill('/images/logos/git.png', 'git', ADVANCED, 'git logo'),
      skill('/images/logos/bash.png', 'bash', INTERMEDIATE, 'bash logo', '+'),
      skill('/images/logos/uml.png', 'UML', ADVANCED, 'UML logo'),
      skill('/images/logos/junit5.png', 'Junit5', BEGINNER, 'Junit5 logo', ' +'),
      skill('/images/logos/docker.png', 'Docker', INTERMEDIATE, 'Docker logo'),
      skill('/images/logos/yaml.png', 'Yaml', BEGINNER, 'Yaml logo', ' +'),
    ],
  },
  {
    id: 'TAB_5',
    labelKey: 'skill_tab_other',
    items: [
      skill('/images/logos/sql.png', 'SQL', INTERMEDIATE, 'SQL logo', ' +'),
      skill('/images/logos/unity.png', 'Unity', INTERMEDIATE, 'Unity logo', ' +'),
      skill('/images/logos/cassandra.png', 'Cassandra', BEGINNER, 'Cassandra logo'),
      skill('/images/logos/mongodb.png', 'MongoDB', BEGINNER, 'MongoDB logo'),
      skill('/images/logos/redis.png', 'Redis', BEGINNER, 'Redis logo'),
    ],
  },
];
