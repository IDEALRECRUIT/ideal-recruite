# Vite + SCSS テンプレート with Claude Code

---

## ✨ 特徴

- ✅ **SCSS自動インポート** - module配下のSCSSファイルを自動検出・インポート
- ✅ **開発時WebP自動生成** - 開発サーバー起動時に画像を自動変換
- ✅ **自動画像最適化** - ビルド時にWebP変換・圧縮を自動実行
- ✅ **SCSS（BEM）** - モジュール化されたスタイル管理
- ✅ **高速ビルド** - Viteによる爆速開発体験
- ✅ **簡単セットアップ** - setup.jsで自動的にプロジェクト名を変更

---

## 🚀 クイックスタート

### **1. ZIPファイルをダウンロード**

配布されたZIPファイル（`vite-scss-template.zip`）をダウンロード

### **2. ZIPを解凍**

ダウンロードしたZIPファイルを解凍し、任意の場所に配置

### **3. プロジェクトフォルダに移動**

```bash
cd vite-scss-template
```

### **4. セットアップスクリプトを実行**

```bash
node setup.js my-restaurant
```

自動的に以下が更新されます：
- `package.json` の `name` フィールド
- `index.html` の `<title>` タグ

### **5. 依存関係をインストール**

```bash
npm install
```

### **6. 開発サーバーを起動**

```bash
npm run dev
```

**自動実行される処理：**
1. 🔄 WebP画像を自動生成（`public/images/`のJPG/PNGから）
2. 🔄 SCSS module/_index.scssを自動生成
3. 🚀 Vite開発サーバーが起動

ブラウザで `http://localhost:3000` が開きます。


## 📂 プロジェクト構造

```
my-restaurant/
├── src/
│   ├── sass/
│   │   ├── global/           # 変数・関数・リセット
│   │   ├── module/           # Block単位のSCSS（自動生成）
│   │   │   └── _index.scss   # 自動生成・自動更新
│   │   └── styles.scss
│   └── main.js
├── public/
│   └── images/               # 画像を配置（自動でWebP変換）
├── scripts/
│   ├── generate-dev-webp.js  # 開発用WebP自動生成
│   └── optimize-images.js    # ビルド用画像最適化
├── vite-plugin-auto-sass-import.js  # SCSS自動インポートプラグイン
├── index.html
├── vite.config.js
├── package.json
├── setup.js                  # プロジェクト名自動変更スクリプト
└── README.md
```

---

## 🛠️ 利用可能なコマンド

```bash
# 開発サーバー起動（WebP自動生成 + HMR有効）
npm run dev

# 本番ビルド（画像最適化 + Viteビルド）
npm run build

# ビルド結果をプレビュー
npm run preview

# 開発用WebP生成のみ実行
npm run generate:webp:dev

# ビルド用画像最適化のみ実行
npm run optimize:images
```

---

## 🎨 画像の扱い方

### **開発時（自動WebP生成）**

#### **1. 画像を配置**

```bash
public/images/
├── hero-bg.jpg        # 配置
├── service-1.png      # 配置
└── logo.svg           # 配置
```

#### **2. 開発サーバー起動**

```bash
npm run dev
```

#### **3. 自動的にWebP生成**

```bash
public/images/
├── hero-bg.jpg        # 元ファイル
├── hero-bg.webp       # 自動生成 ✅
├── service-1.png      # 元ファイル
├── service-1.webp     # 自動生成 ✅
└── logo.svg           # SVGはそのまま
```

**特徴：**
- 🚀 既存のWebPはスキップ（高速起動）
- 📦 約80%の容量削減
- 🔄 HMRで即座に反映

#### **4. HTMLで参照**

```html
<!-- 開発時から .webp で参照可能 -->
<img src="/images/hero-bg.webp" alt="ヒーロー画像">

<!-- または <picture> タグでフォールバック -->
<picture>
  <source srcset="/images/hero-bg.webp" type="image/webp">
  <img src="/images/hero-bg.jpg" alt="ヒーロー画像">
</picture>
```

---

### **ビルド時（画像最適化）**

```bash
npm run build
```

```bash
dist/images/
├── hero-bg.jpg        # 圧縮済み
├── hero-bg.webp       # WebP版（最適化済み）
├── service-1.png      # 圧縮済み
├── service-1.webp     # WebP版（最適化済み）
└── logo.svg           # コピー
```

---

## 🔧 SCSS自動インポート機能

### **仕組み**

`src/sass/module/` 配下に `_*.scss` ファイルを作成すると、**自動的に `module/_index.scss` にインポート**されます。

### **使い方**

#### **1. 新しいSCSSファイルを作成**

```bash
src/sass/module/
├── _index.scss        # 自動生成（手動編集不要）
├── _header.scss       # 新規作成 ← ここ
└── _footer.scss
```

#### **2. 自動的にインポートされる**

開発サーバー起動中なら、**リアルタイムで検出**されます：

```scss
// module/_index.scss（自動生成）
@use 'header';  // ← 自動追加！
@use 'footer';
```

#### **3. グローバル変数を使う場合**

module配下のファイルでglobal変数を使う場合：

```scss
// module/_header.scss
@use "../global" as *;  // ← 相対パスで指定

.header {
  background-color: $primary-color;  // グローバル変数が使える
}
```

### **ルール**

- ✅ `_*.scss` で始まるファイルを自動検出
- ✅ `_index.scss` は除外
- ✅ アルファベット順に自動ソート
- ✅ HMR対応（リアルタイム更新）

---

## ⚙️ カスタマイズ

### **変数を変更**

`src/sass/global/_setting.scss` で色・余白・フォント等を定義：

```scss
// 色
$primary-color: #3498db;
$accent-color: #e67e22;

// ブレイクポイント
$breakpoints: (
  "sm": 375px,
  "md": 768px,
  "lg": 1024px,
  "xl": 1280px,
);
```

### **新しいBlockを追加**

Claude Codeに依頼：

```
「新しいブログカードセクションを追加してください」（デザイン画像を添付）
```

自動的に以下が生成されます：
- `src/sass/module/_blog-card.scss`
- `module/_index.scss` に `@use 'blog-card';` が自動追記
- HTML構造

---

## 🔧 トラブルシューティング

### **スタイルが反映されない**

1. ブラウザのキャッシュをクリア（Cmd+Shift+R / Ctrl+Shift+R）
2. 開発サーバーを再起動：`Ctrl+C` → `npm run dev`
3. `module/_index.scss` が自動生成されているか確認

### **画像が表示されない（開発時）**

1. `public/images/` に画像が配置されているか確認
2. `npm run dev` を実行してWebP自動生成
3. HTMLで `/images/[filename].webp` で参照しているか確認

### **SCSS自動インポートが動かない**

1. ファイル名が `_*.scss` で始まっているか確認
2. `src/sass/module/` ディレクトリに配置されているか確認
3. 開発サーバーを再起動

### **ビルドエラー**

1. `node_modules/` を削除して再インストール：
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

---

## 📖 参考ドキュメント

- [Vite公式ドキュメント](https://vitejs.dev/)
- [SASS公式ドキュメント](https://sass-lang.com/)
- [BEM命名規則](https://getbem.com/)

---

## 📝 ライセンス

MIT

---

## 🙏 貢献

Issue・Pull Requestを歓迎します！
# base-v01
