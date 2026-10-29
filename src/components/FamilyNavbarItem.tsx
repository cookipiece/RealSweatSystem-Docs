/**
 * "CookiTools" dropdown in the navbar: RealSweat / RealWet / RealRain.
 * Shared by every CookiTools docs site. Links keep the visitor's language.
 * Config: {type: 'custom-cookiFamily', position: 'right'}
 */
import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import {family, familyUrl} from '@site/src/cookitools';
import product from '@site/src/product';

type Props = {mobile?: boolean; position?: 'left' | 'right'; className?: string};

export default function FamilyNavbarItem(props: Props): ReactNode {
  const {i18n} = useDocusaurusContext();
  const items = family.map((member) => {
    const url = familyUrl(member, i18n.currentLocale);
    const current = member.key === product.key;
    const className = `ct-fam ct-fam--${member.key}${current ? ' ct-fam--current' : ''}`;
    if (!url) {
      return {
        type: 'html' as const,
        value: `<span class="dropdown__link ${className} ct-fam--soon">${member.short}</span>`,
      };
    }
    return {
      label: member.short,
      href: url,
      target: '_self',
      className,
      'aria-current': current ? ('page' as const) : undefined,
    };
  });
  return <DropdownNavbarItem {...props} label="CookiTools" className="ct-fam-toggle" items={items} />;
}
