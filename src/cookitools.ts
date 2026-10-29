/**
 * CookiTools docs family. The same file in every CookiTools docs site.
 * The navbar switcher (src/components/FamilyNavbarItem.tsx) reads it, so a
 * visitor on the Korean page of one product lands on the Korean page of another.
 */

export type FamilyKey = 'rss' | 'rws' | 'rrs';

export type FamilyMember = {
  key: FamilyKey;
  /** Short name shown in the switcher. Brand names are not translated. */
  short: string;
  /** Docs root with trailing slash, or '' while the site does not exist. */
  url: string;
  /** Locale served at the root of that site (others live under /<locale>/). */
  defaultLocale: string;
  locales: string[];
};

export const family: FamilyMember[] = [
  {
    key: 'rss',
    short: 'RealSweat',
    url: 'https://cookipiece.github.io/RealSweatSystem-Docs/',
    defaultLocale: 'en',
    locales: ['en', 'ja', 'ko'],
  },
  {
    key: 'rws',
    short: 'RealWet',
    url: 'https://cookipiece.github.io/RealWetSystem-Docs/',
    defaultLocale: 'ko',
    locales: ['ko', 'ja', 'en'],
  },
  {
    key: 'rrs',
    short: 'RealRain',
    url: '',
    defaultLocale: 'ko',
    locales: ['ko', 'ja', 'en'],
  },
];

/** Text of the home page for one locale (src/product.ts fills it). */
export type HomeCopy = {
  /** Small line above the name, e.g. "CookiTools · VRChat PC 아바타용". */
  kicker: string;
  /** One plain sentence: what the product does. */
  sentence: string;
  quickStart: string;
  troubleshooting: string;
  /** e.g. "v{version} 기준 문서". {version} is replaced with ProductData.version. */
  docsVersion: string;
  purchase: string;
  purchaseVerification: string;
  pending: string;
  imageAlt: string;
  imageCaption: string;
  /** Shown in the image frame while product.image is ''. */
  imagePlaceholder: string;
  stepsTitle: string;
  steps: Array<{title: string; text: string; to?: string}>;
  requirementsTitle: string;
  requirements: Array<[label: string, value: string]>;
};

/** Everything that differs between the CookiTools docs sites' home pages. */
export type ProductData = {
  key: FamilyKey;
  name: string;
  /** The only place the version is written. The home page reads it. */
  version: string;
  /** Static path such as '/img/home/rss-home.webp', or '' for a placeholder. */
  image: string;
  links: {
    quickStart: string;
    troubleshooting: string;
    booth: string;
    gumroad: string;
    /** Purchase verification page. Written by the license work; '' until it exists. */
    purchaseVerification: string;
  };
  /** Locale used when a locale has no copy. */
  fallbackLocale: string;
  copy: Record<string, HomeCopy>;
};

/** Docs root of a family member in the given locale. */
export function familyUrl(member: FamilyMember, locale: string): string {
  if (!member.url) return '';
  if (locale === member.defaultLocale || !member.locales.includes(locale)) {
    return member.url;
  }
  return `${member.url}${locale}/`;
}
