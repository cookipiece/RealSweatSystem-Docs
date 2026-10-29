/**
 * Registers the CookiTools family switcher as navbar item type 'custom-cookiFamily'.
 * Shared by every CookiTools docs site. Swizzled by wrapping (no eject).
 */
import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import FamilyNavbarItem from '@site/src/components/FamilyNavbarItem';

export default {
  ...ComponentTypes,
  'custom-cookiFamily': FamilyNavbarItem,
};
