import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import viteImagemin from 'vite-plugin-imagemin';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import autoSassImport from './vite-plugin-auto-sass-import.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** ビルド後のCSS内の /images/ を ../images/ に書き換え（dist/assets から dist/images を参照） */
function rewriteCssImagePaths() {
  return {
    name: 'rewrite-css-image-paths',
    closeBundle() {
      const cssPath = path.resolve(__dirname, 'dist/assets/styles.css');
      if (!fs.existsSync(cssPath)) return;
      let css = fs.readFileSync(cssPath, 'utf8');
      css = css.replace(/url\("?\/images\//g, 'url("../images/');
      fs.writeFileSync(cssPath, css);
    },
  };
}

export default defineConfig({
  // 相対パスで出力（file:// やサブディレクトリ配置で読み込めるようにする）
  base: './',

  // ルートディレクトリをsrcに設定
  root: 'src',

  // エイリアス設定（SCSS用）
  resolve: {
    alias: {
      '@sass': path.resolve(__dirname, './src/sass'),
    },
  },

  // publicフォルダを使用
  publicDir: '../public',

  // 画像最適化プラグイン（中級講座で使用）
  plugins: [
    // SCSS module/_index.scss 自動生成
    autoSassImport(),

    // ビルド後のCSS内 /images/ を相対パスに書き換え
    rewriteCssImagePaths(),

    // 画像をWebPに変換
    imagetools({
      defaultDirectives: (url) => {
        if (url.searchParams.has('webp')) {
          return new URLSearchParams({
            format: 'webp',
            quality: '80'
          });
        }
        return new URLSearchParams();
      }
    }),

    // ビルド時に画像を圧縮
    viteImagemin({
      gifsicle: { optimizationLevel: 7 },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      webp: { quality: 80 },
    }),
  ],

  // ビルド設定
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: false, // デフォルトは非圧縮（学習用）
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
        syukyaku: path.resolve(__dirname, 'src/syukyaku/index.html'),
      },
      output: {
        // JSファイル名を固定（ハッシュなし）
        entryFileNames: 'assets/script.js',

        // CSSファイル名を固定（ハッシュなし）
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').at(-1);
          if (/css/i.test(extType)) {
            return 'assets/styles.css';
          }
          // 画像などその他のアセット
          return 'assets/[name][extname]';
        },
      },
    },
  },

  // 開発サーバー設定
  server: {
    port: 3000,
    open: true,
    // WSLで編集している場合、ファイル変更を検知するためにポーリングを有効化
    watch: {
      usePolling: true,
    },
  },
});
