import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Real Sweat System Docs',
  tagline: 'Move more. Sweat more.',
  favicon: 'img/cookie-icon.png',
  future: {v4: true},
  url: 'https://cookipiece.github.io',
  baseUrl: '/RealSweatSystem-Docs/',
  organizationName: 'cookipiece',
  projectName: 'RealSweatSystem-Docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {onBrokenMarkdownLinks: 'warn'},
  },
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'ko'],
    localeConfigs: {
      ja: {label: '日本語', htmlLang: 'ja-JP'},
      en: {label: 'English', htmlLang: 'en-US'},
      ko: {label: '한국어', htmlLang: 'ko-KR'},
    },
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
          showLastUpdateTime: true,
          editUrl: 'https://github.com/cookipiece/RealSweatSystem-Docs/edit/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        language: ['en', 'ja', 'ko'],
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'VRChat, Real Sweat System, avatar, sweat, shader, documentation'},
    ],
    colorMode: {respectPrefersColorScheme: true},
    announcementBar: {
      id: 'current_version_1_0_2',
      content: '<strong>Real Sweat System v1.0.2</strong>',
      backgroundColor: '#d9f5f7',
      textColor: '#20323a',
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Real Sweat System',
        src: 'img/realsweat-logo-black.png',
        srcDark: 'img/realsweat-logo-white.png',
      },
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'ドキュメント'},
        {to: '/docs/quick-start', label: 'クイックスタート', position: 'left'},
        {to: '/docs/troubleshooting', label: 'トラブル解決', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://booth.pm/ja/items/8645678', label: 'BOOTH', position: 'right'},
        {href: 'https://github.com/cookipiece/RealSweatSystem-Docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ドキュメント',
          items: [
            {label: 'クイックスタート', to: '/docs/quick-start'},
            {label: '対応環境', to: '/docs/compatibility'},
            {label: 'トラブル解決', to: '/docs/troubleshooting'},
          ],
        },
        {
          title: '製品',
          items: [
            {label: 'BOOTH', href: 'https://booth.pm/ja/items/8645678'},
            {label: '更新履歴', to: '/docs/update-changelog'},
            {label: '利用規約・ライセンス', to: '/docs/license'},
          ],
        },
        {
          title: 'プロジェクト',
          items: [
            {label: 'GitHub', href: 'https://github.com/cookipiece/RealSweatSystem-Docs'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cooki. Documentation for Real Sweat System.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
