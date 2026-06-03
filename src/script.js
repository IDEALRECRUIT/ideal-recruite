// SCSSのインポート
import './sass/main.scss'

// 画像の使用例（WebP変換）
// import sampleImage from '../public/images/sample.jpg?webp'


// ================================================
// ヘッダー：FVを過ぎたら白背景
// ================================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  const fv = document.querySelector('.fv');

  if (!header || !fv) return;

  function updateHeaderBackground() {
    const fvRect = fv.getBoundingClientRect();
    // FVの下端がビュートップを過ぎたら白背景
    if (fvRect.bottom <= 0) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
  }

  updateHeaderBackground(); // 初期表示時
  window.addEventListener('scroll', updateHeaderBackground, { passive: true });
}

// ================================================
// ページトップボタン：FVを過ぎたら表示、footerに入ったら非表示
// ================================================
function initPageTop() {
  const pageTop = document.getElementById('js-page-top');
  const fv = document.querySelector('.fv');
  const footer = document.querySelector('.footer');

  if (!pageTop || !fv || !footer) return;

  function updatePageTopVisibility() {
    const fvRect = fv.getBoundingClientRect();
    const footerRect = footer.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // FVの下端を過ぎていて、かつfooterがまだ画面に入っていないときだけ表示
    const isVisible =
      fvRect.bottom <= 0 && footerRect.top > viewportHeight;

    if (isVisible) {
      pageTop.classList.add('is-visible');
      pageTop.setAttribute('aria-hidden', 'false');
    } else {
      pageTop.classList.remove('is-visible');
      pageTop.setAttribute('aria-hidden', 'true');
    }
  }

  updatePageTopVisibility();
  window.addEventListener('scroll', updatePageTopVisibility, { passive: true });

  // クリックでページトップへスムーズスクロール
  const link = pageTop.querySelector('.page-top__link');
  if (link) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ================================================
// ドロワーメニューの開閉
// ================================================
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initPageTop();

  const hamburger = document.getElementById('js-hamburger');
  const drawer = document.getElementById('js-drawer');
  const body = document.body;

  if (hamburger && drawer) {
    const header = document.querySelector('.header');
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('is-active');

      // ドロワーメニューの開閉
      drawer.classList.toggle('is-active', isOpen);

      // bodyのスクロール制御
      body.classList.toggle('is-drawer-open', isOpen);

      // ヘッダーを白背景に（ドロワー開時）
      if (header) header.classList.toggle('js-drawer-open', isOpen);

      // アクセシビリティ用の属性更新
      hamburger.setAttribute('aria-expanded', isOpen);
      drawer.setAttribute('aria-hidden', !isOpen);
    });

    // ドロワー内のリンクをクリックしたらメニューを閉じる
    const drawerLinks = drawer.querySelectorAll('a');
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        drawer.classList.remove('is-active');
        body.classList.remove('is-drawer-open');
        hamburger.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
      });
    });
  }
});

