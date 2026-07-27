import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'はじめに',
      collapsed: false,
      items: ['package-guide', 'quick-start'],
    },
    {
      type: 'category',
      label: '使い方',
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
      label: '問題解決',
      collapsed: false,
      items: ['troubleshooting', 'compatibility'],
    },
    {
      type: 'category',
      label: '上級・参考',
      collapsed: true,
      items: ['technical-specifications', 'tools'],
    },
    'update-changelog',
    'license',
  ],
};

export default sidebars;
