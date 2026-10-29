import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import product from './src/product';

const config: Config = {
  title: 'Real Sweat System Docs',
  tagline: 'Real-time sweat for VRChat PC avatars.',
  favicon: 'img/cooki-icon-32.png',
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
        },
        blog: false,
        theme: {customCss: ['./src/css/custom.css', './src/css/product.css']},
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
      // The id follows the version, so a visitor who closed an older version's bar sees this one.
      id: `current_version_${product.version.replace(/\./g, '_')}`,
      content: `<strong>${product.name} v${product.version}</strong>`,
      isCloseable: true,
    },
    navbar: {
      hideOnScroll: false,
      title: 'Real Sweat System',
      logo: {alt: 'CookiTools', src: 'img/cooki-icon-64.png', width: 24, height: 24},
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Docs'},
        {to: '/docs/troubleshooting', label: 'Troubleshooting', position: 'left'},
        {type: 'custom-cookiFamily', position: 'right'},
        {type: 'localeDropdown', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
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
            {label: 'Gumroad', href: 'https://cookipiece.gumroad.com/l/real-sweat-system-vrchat'},
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
      copyright: `© ${new Date().getFullYear()} Cooki · CookiTools`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.vsDark},
  } satisfies Preset.ThemeConfig,
};

export default config;
