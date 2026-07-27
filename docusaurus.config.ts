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
    defaultLocale: 'en',
    locales: ['en', 'ja', 'ko'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en-US'},
      ja: {label: '日本語', htmlLang: 'ja-JP'},
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
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
        {to: '/docs/quick-start', label: 'Quick Start', position: 'left'},
        {to: '/docs/troubleshooting', label: 'Troubleshooting', position: 'left'},
        {type: 'localeDropdown', position: 'right'},
        {href: 'https://booth.pm/ja/items/8645678', label: 'BOOTH', position: 'right'},
        {href: 'https://cookipiece.gumroad.com/l/real-sweat-system-vrchat', label: 'Gumroad', position: 'right'},
        {href: 'https://github.com/cookipiece/RealSweatSystem-Docs', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {label: 'Quick Start', to: '/docs/quick-start'},
            {label: 'Compatibility', to: '/docs/compatibility'},
            {label: 'Troubleshooting', to: '/docs/troubleshooting'},
          ],
        },
        {
          title: 'Product',
          items: [
            {label: 'BOOTH', href: 'https://booth.pm/ja/items/8645678'},
            {label: 'Changelog', to: '/docs/update-changelog'},
            {label: 'Terms & License', to: '/docs/license'},
          ],
        },
        {
          title: 'Project',
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
