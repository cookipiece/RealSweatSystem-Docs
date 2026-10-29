/**
 * RealSweat docs: home page data. The shared home page (src/pages/index.tsx)
 * and the family switcher read this file. Edit freely; it is per site.
 */
import type {ProductData} from '@site/src/cookitools';

const product: ProductData = {
  key: 'rss',
  name: 'Real Sweat System',
  version: '2.0.0',
  // Store thumbnail (the published BOOTH main image), square. The only place its path is written.
  image: '/img/home/thumbnail.webp',
  links: {
    quickStart: '/docs/quick-start',
    troubleshooting: '/docs/troubleshooting',
    booth: 'https://booth.pm/ja/items/8645678',
    gumroad: 'https://cookipiece.gumroad.com/l/real-sweat-system-vrchat',
    purchaseVerification: '',
  },
  fallbackLocale: 'en',
  copy: {
    ko: {
      kicker: 'CookiTools · VRChat PC 아바타용',
      sentence:
        'PC용 VRChat 아바타에 실시간 땀 표현을 더하는 시스템입니다. 래디얼 메뉴에서 땀 %를 직접 조절하거나, 몸을 움직이면 땀이 쌓이고 멈추면 천천히 마르는 자동 모드를 사용할 수 있습니다.',
      quickStart: '빠른 시작',
      troubleshooting: '문제 해결',
      docsVersion: 'v{version} 기준 문서',
      purchase: '구매',
      purchaseVerification: '구매 인증',
      pending: '준비 중',
      imageAlt: 'Real Sweat System 상품 썸네일: 등에 땀이 맺힌 VRChat 아바타',
      imageCaption: '',
      imagePlaceholder: '상품 썸네일 자리 (출시 때 넣습니다)',
      stepsTitle: '처음 설치하는 순서',
      steps: [
        {
          title: '프로젝트 확인',
          text: 'VRChat 아바타가 들어 있는 Unity 프로젝트에 Modular Avatar가 설치되어 있고 Console에 컴파일 오류가 없는지 확인합니다. 아바타는 먼저 백업해 주십시오.',
          to: '/docs/quick-start',
        },
        {
          title: '패키지 임포트',
          text: '구매한 제품의 UnityPackage(Base Module, Effects Module 또는 둘 다)를 임포트합니다. 둘 다 쓸 때는 같은 버전으로 맞춰 주십시오.',
          to: '/docs/package-guide',
        },
        {
          title: '설치 창에서 설치',
          text: 'CookiTools → RealSweatSystem → Setup／Uninstall을 열고 아바타를 고른 뒤 [설치 / 업데이트]를 누릅니다.',
          to: '/docs/quick-start',
        },
        {
          title: 'Play Mode에서 확인',
          text: '땀 표시를 켜고 자동 모드를 잠시 끈 뒤 땀 %를 0%에서 100%까지 바꿔 봅니다. 최종 업로드 전에는 VRChat Build & Test로 확인해 주십시오.',
          to: '/docs/usage/modes',
        },
      ],
      requirementsTitle: '필요한 것',
      requirements: [
        ['Unity', '2022.3 (VRChat 아바타 프로젝트)'],
        ['VRChat SDK', 'Avatars SDK3'],
        ['Modular Avatar', '필수입니다. VCC에서 설치합니다.'],
        ['플랫폼', 'Direct3D 11을 사용하는 PC 아바타. Quest 단독 실행 환경은 지원하지 않습니다.'],
        ['자동 모드', 'Humanoid 아바타에서 사용할 수 있습니다. 다른 아바타에서도 수동 모드는 사용할 수 있습니다.'],
      ],
    },
    ja: {
      kicker: 'CookiTools · VRChat PC アバター用',
      sentence:
        'PC版VRChatアバターにリアルタイムの汗表現を追加するシステムです。ラジアルメニューで汗 %を直接操作するほか、体の動きに応じて汗が増え、動きを止めるとゆっくり乾く自動モードを利用できます。',
      quickStart: 'クイックスタート',
      troubleshooting: 'トラブル解決',
      docsVersion: 'v{version} 対応ドキュメント',
      purchase: '購入',
      purchaseVerification: '購入認証',
      pending: '準備中',
      imageAlt: 'Real Sweat System の商品サムネイル：背中に汗が浮かぶ VRChat アバター',
      imageCaption: '',
      imagePlaceholder: '商品サムネイルの場所（発売時に入れます）',
      stepsTitle: 'はじめての導入手順',
      steps: [
        {
          title: 'プロジェクトを確認',
          text: 'VRChatアバターが入ったUnityプロジェクトに Modular Avatar が導入済みで、Consoleにコンパイルエラーが無いことを確認します。先にアバターをバックアップしてください。',
          to: '/docs/quick-start',
        },
        {
          title: 'パッケージをインポート',
          text: '購入した製品のUnityPackage（Base Module、Effects Module または両方）をインポートします。両方を使う場合は同じバージョンにそろえてください。',
          to: '/docs/package-guide',
        },
        {
          title: 'Setup でインストール',
          text: 'CookiTools → RealSweatSystem → Setup／Uninstall を開き、アバターを選んで［インストール / 更新］を押します。',
          to: '/docs/quick-start',
        },
        {
          title: 'Play Mode で確認',
          text: '汗の表示をオンにし、自動モードを一時的にオフにして、汗 % を0%から100%まで動かします。最終アップロードの前に VRChat Build & Test で確認してください。',
          to: '/docs/usage/modes',
        },
      ],
      requirementsTitle: '必要なもの',
      requirements: [
        ['Unity', '2022.3（VRChat アバタープロジェクト）'],
        ['VRChat SDK', 'Avatars SDK3'],
        ['Modular Avatar', '必須です。VCCからインストールします。'],
        ['プラットフォーム', 'Direct3D 11 を使用するPC版アバター。Quest単体版には対応していません。'],
        ['自動モード', 'Humanoidアバターで使用できます。それ以外のアバターでも手動モードは使用できます。'],
      ],
    },
    en: {
      kicker: 'CookiTools · For VRChat PC avatars',
      sentence:
        'Adds real-time sweat effects to PC VRChat avatars. Set Sweat % directly from the radial menu, or use Auto Mode to build sweat from body movement and let it dry gradually after movement stops.',
      quickStart: 'Quick start',
      troubleshooting: 'Troubleshooting',
      docsVersion: 'Docs for v{version}',
      purchase: 'Buy',
      purchaseVerification: 'Purchase verification',
      pending: 'coming soon',
      imageAlt: 'Real Sweat System store thumbnail: a VRChat avatar with sweat on her back',
      imageCaption: '',
      imagePlaceholder: 'Product thumbnail (added at release)',
      stepsTitle: 'First install',
      steps: [
        {
          title: 'Check the project',
          text: 'Open the Unity project with your VRChat avatar, and confirm that Modular Avatar is installed and the Console has no compile errors. Back up the avatar first.',
          to: '/docs/quick-start',
        },
        {
          title: 'Import the package',
          text: 'Import the UnityPackage for the product you bought: Base Module, Effects Module, or both. When you use both, keep them on the same version.',
          to: '/docs/package-guide',
        },
        {
          title: 'Install in Setup',
          text: 'Open CookiTools → RealSweatSystem → Setup／Uninstall, select the avatar and press [Install / Update].',
          to: '/docs/quick-start',
        },
        {
          title: 'Test in Play Mode',
          text: 'Turn Sweat Display on, turn Auto Mode off for a moment, and move Sweat % from 0% to 100%. Before the final upload, check with VRChat Build & Test.',
          to: '/docs/usage/modes',
        },
      ],
      requirementsTitle: 'Requirements',
      requirements: [
        ['Unity', '2022.3 (VRChat avatar project)'],
        ['VRChat SDK', 'Avatars SDK3'],
        ['Modular Avatar', 'Required. Install it from VCC.'],
        ['Platform', 'PC avatar using Direct3D 11. Quest standalone is not supported.'],
        ['Auto Mode', 'Available on Humanoid avatars. Other avatars can still use Manual Mode.'],
      ],
    },
  },
};

export default product;
