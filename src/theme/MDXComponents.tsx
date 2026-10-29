/**
 * Wraps every Markdown table in a box that scrolls sideways on its own,
 * so a wide table never makes the whole page scroll. Shared by every
 * CookiTools docs site.
 */
import type {ComponentProps} from 'react';
import MDXComponents from '@theme-original/MDXComponents';

function Table(props: ComponentProps<'table'>) {
  return (
    <div className="ct-table">
      <table {...props} />
    </div>
  );
}

export default {
  ...MDXComponents,
  table: Table,
};
