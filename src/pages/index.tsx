import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

type HomeCopy = {
  eyebrow: string;
  tagline: string;
  description: string;
  start: string;
  troubleshoot: string;
  note: string;
  purchase: string;
  cards: Array<{title: string; text: string; href: string; link: string}>;
};

const copy: Record<string, HomeCopy> = {
  ja: {
    eyebrow: 'VRChat Avatar System · PC Only',
    tagline: '動くほど、汗が増える。',
    description: '肌に浮かぶ汗、重力に沿う流れ、落下する汗、床の濡れ跡、体の湯気と吐息まで。Real Sweat System の導入・設定・トラブル解決を案内します。',
    start: '5分でセットアップ',
    troubleshoot: '問題を解決する',
    note: '初めての方は Quick Start から始めてください。',
    purchase: '\u8cfc\u5165\u5148',
    cards: [
      {title: 'クイックスタート', text: '必要条件の確認から最初の動作テストまで、最短手順で案内します。', href: '/docs/quick-start', link: 'セットアップを開始'},
      {title: '設定ガイド', text: '汗量、感度、テッセレーション、各エフェクトの意味と負荷を確認できます。', href: '/docs/usage/tuning', link: '設定を確認'},
      {title: 'トラブル解決', text: 'Write Defaults、Face Tracking、ビルド、表示、セキュリティ警告を症状別に解決します。', href: '/docs/troubleshooting', link: '症状から探す'},
    ],
  },
  en: {
    eyebrow: 'VRChat Avatar System · PC Only',
    tagline: 'Move more. Sweat more.',
    description: 'Learn how to install, tune, and troubleshoot Real Sweat System—from surface sweat and gravity-driven flow to falling drops, floor stains, body steam, and breath.',
    start: '5-minute setup',
    troubleshoot: 'Solve a problem',
    note: 'New users should begin with Quick Start.',
    purchase: 'Purchase',
    cards: [
      {title: 'Quick Start', text: 'Check requirements, run setup, and confirm the first in-game test.', href: '/docs/quick-start', link: 'Start setup'},
      {title: 'Tuning Guide', text: 'Understand sweat amount, sensitivity, tessellation, effects, and their performance impact.', href: '/docs/usage/tuning', link: 'Open tuning guide'},
      {title: 'Troubleshooting', text: 'Resolve Write Defaults, face tracking, build, rendering, and security-warning issues by symptom.', href: '/docs/troubleshooting', link: 'Find a solution'},
    ],
  },
  ko: {
    eyebrow: 'VRChat 아바타 시스템 · PC 전용',
    tagline: '움직일수록, 땀이 흐른다.',
    description: '피부에 맺히는 땀과 중력을 따르는 흐름부터 낙하 물방울, 바닥 자국, 몸의 스팀과 입김까지. Real Sweat System의 설치·조정·문제 해결을 안내합니다.',
    start: '5분 설치 시작',
    troubleshoot: '문제 해결하기',
    note: '처음 사용하는 경우 Quick Start부터 진행하세요.',
    purchase: '\uad6c\ub9e4\ucc98',
    cards: [
      {title: '빠른 시작', text: '필수 조건 확인부터 셋업 실행과 첫 인게임 테스트까지 빠르게 진행합니다.', href: '/docs/quick-start', link: '셋업 시작'},
      {title: '튜닝 가이드', text: '땀양, 감도, 테셀레이션, 이펙트의 의미와 성능 영향을 확인합니다.', href: '/docs/usage/tuning', link: '튜닝 확인'},
      {title: '문제 해결', text: 'Write Defaults, 페이스트래킹, 빌드, 표시, 보안 경고 문제를 증상별로 해결합니다.', href: '/docs/troubleshooting', link: '증상으로 찾기'},
    ],
  },
};

export default function Home(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const current = copy[i18n.currentLocale] ?? copy.en;
  const logo = useBaseUrl('/img/realsweat-logo-black.png');

  return (
    <Layout title={current.tagline} description={current.description}>
      <main>
        <section className={styles.hero}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.heroInner}>
            <div className={styles.copyBlock}>
              <span className={styles.eyebrow}>{current.eyebrow}</span>
              <img className={styles.brandLogo} src={logo} alt="Real Sweat System" />
              <Heading as="h1" className={styles.heroTitle}>{current.tagline}</Heading>
              <p className={styles.heroDescription}>{current.description}</p>
              <div className={styles.buttons}>
                <Link className="button button--primary button--lg" to="/docs/quick-start">{current.start}</Link>
                <Link className="button button--secondary button--lg" to="/docs/troubleshooting">{current.troubleshoot}</Link>
              </div>
              <p className={styles.note}>{current.note}</p>
              <div className={styles.purchase}>
                <span className={styles.purchaseLabel}>{current.purchase}</span>
                <div className={styles.purchaseLinks}>
                  <a
                    href="https://cooki.booth.pm/items/8645678"
                    target="_blank"
                    rel="noopener noreferrer">
                    BOOTH <span aria-hidden="true">&#8599;</span>
                  </a>
                  <a
                    href="https://cookipiece.gumroad.com/l/real-sweat-system-vrchat"
                    target="_blank"
                    rel="noopener noreferrer">
                    Gumroad <span aria-hidden="true">&#8599;</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.visual} aria-hidden="true">
              <div className={styles.orbit} />
              <div className={styles.dropLarge}><span>100%</span></div>
              <div className={styles.dropSmall} />
              <div className={styles.flowLine} />
              <div className={styles.version}>Docs · v1.1.0</div>
            </div>
          </div>
        </section>

        <section className={styles.cardsSection}>
          <div className="container">
            <div className={styles.cards}>
              {current.cards.map((card, index) => (
                <article className={styles.card} key={card.title}>
                  <span className={styles.cardIndex}>0{index + 1}</span>
                  <Heading as="h2">{card.title}</Heading>
                  <p>{card.text}</p>
                  <Link to={card.href}>{card.link} →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.metaStrip}>
          <div className="container">
            <span>PC VRChat</span><span>JA · EN · KO</span><span>Base · Effects · Full Pack</span><span>Current v1.1.0</span>
          </div>
        </section>
      </main>
    </Layout>
  );
}
