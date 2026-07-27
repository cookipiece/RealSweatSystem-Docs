import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: ['package-guide', 'quick-start'],
    },
    {
      type: 'category',
      label: 'Usage',
      collapsed: false,
      items: [
        'usage/modes',
        'usage/tuning',
        'usage/effects',
        'performance',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: false,
      items: ['troubleshooting', 'compatibility'],
    },
    {
      type: 'category',
      label: 'Advanced & Reference',
      collapsed: true,
      items: ['technical-specifications', 'tools'],
    },
    'update-changelog',
    'license',
  ],
};

export default sidebars;
