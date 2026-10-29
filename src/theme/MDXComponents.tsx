/**
 * Shared by every CookiTools docs site (a wrap, not an eject).
 * - Wraps every Markdown table in a box that scrolls sideways on its own,
 *   so a wide table never makes the whole page scroll.
 * - <ProductName /> prints product.name from src/product.ts, so the product
 *   name is written in one place for every page and language.
 */
import type {ComponentProps} from 'react';
import MDXComponents from '@theme-original/MDXComponents';
import product from '@site/src/product';

function Table(props: ComponentProps<'table'>) {
  return (
    <div className="ct-table">
      <table {...props} />
    </div>
  );
}

function ProductName() {
  return <>{product.name}</>;
}

export default {
  ...MDXComponents,
  table: Table,
  ProductName,
};
