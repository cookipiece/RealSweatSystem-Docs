/**
 * CookiTools docs home page. The same file in every CookiTools docs site.
 * All text, links and the image come from src/product.ts.
 */
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import product from '@site/src/product';
import styles from './index.module.css';

function OutLink({href, children}: {href: string; children: ReactNode}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </a>
  );
}

export default function Home(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const t = product.copy[i18n.currentLocale] ?? product.copy[product.fallbackLocale];
  const image = useBaseUrl(product.image || '/');
  const {links} = product;

  return (
    <Layout title={product.name} description={t.sentence}>
      <main className={clsx(styles.page, 'ct-home')}>
        <section className={styles.hero}>
          <div className={styles.text}>
            <p className={styles.kicker}>{t.kicker}</p>
            <Heading as="h1" className={styles.title}>
              {product.name}
            </Heading>
            <p className={styles.sentence}>{t.sentence}</p>
            <div className={styles.actions}>
              <Link className={clsx('button button--primary', styles.button)} to={links.quickStart}>
                {t.quickStart}
              </Link>
              <Link className={clsx('button button--secondary', styles.button)} to={links.troubleshooting}>
                {t.troubleshooting}
              </Link>
            </div>
            <ul className={styles.meta}>
              <li>{t.docsVersion.replace('{version}', product.version)}</li>
              {(links.booth || links.gumroad) && (
                <li>
                  <span className={styles.metaLabel}>{t.purchase}</span>
                  {links.booth && <OutLink href={links.booth}>BOOTH</OutLink>}
                  {links.gumroad && <OutLink href={links.gumroad}>Gumroad</OutLink>}
                </li>
              )}
              <li>
                {links.purchaseVerification ? (
                  <Link to={links.purchaseVerification}>{t.purchaseVerification}</Link>
                ) : (
                  <span className={styles.pending}>
                    {t.purchaseVerification} · {t.pending}
                  </span>
                )}
              </li>
            </ul>
          </div>

          {/* Square store thumbnail, shown whole (never cropped). */}
          <figure className={styles.figure}>
            <div className={clsx(styles.frame, !product.image && styles.frameEmpty)}>
              {product.image ? (
                <img src={image} alt={t.imageAlt} width={880} height={880} decoding="async" />
              ) : (
                <div className={styles.placeholder}>{t.imagePlaceholder}</div>
              )}
            </div>
            {product.image && t.imageCaption && (
              <figcaption className={styles.caption}>{t.imageCaption}</figcaption>
            )}
          </figure>
        </section>

        <section className={styles.below}>
          <div>
            <Heading as="h2" className={styles.sectionTitle}>
              {t.stepsTitle}
            </Heading>
            <ol className={styles.steps}>
              {t.steps.map((step) => (
                <li key={step.title}>
                  <div>
                    {step.to ? (
                      <Link className={styles.stepTitle} to={step.to}>
                        {step.title}
                      </Link>
                    ) : (
                      <span className={styles.stepTitle}>{step.title}</span>
                    )}
                    <p className={styles.stepText}>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <Heading as="h2" className={styles.sectionTitle}>
              {t.requirementsTitle}
            </Heading>
            <dl className={styles.requirements}>
              {t.requirements.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
    </Layout>
  );
}
