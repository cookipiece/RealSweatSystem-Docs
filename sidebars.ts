import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'はじめに',
      collapsed: false,
      items: ['quick-start', 'package-guide', 'tools'],
    },
    {
      type: 'category',
      label: '使い方',
      collapsed: false,
      items: ['usage/modes', 'usage/tuning', 'usage/effects'],
    },
    'performance',
    'compatibility',
    'troubleshooting',
    'update-changelog',
    'license',
  ],
};

export default sidebars;
