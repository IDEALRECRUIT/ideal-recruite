import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Viteプラグイン: SCSS module/_index.scss 自動生成
 * src/sass/module/ 内の _*.scss ファイルを自動検出して _index.scss に @use を追記
 */
export default function autoSassImport() {
  const modulePath = path.resolve(__dirname, 'src/sass/module');
  const indexFile = path.join(modulePath, '_index.scss');

  /**
   * module ディレクトリ内の SCSS ファイルをスキャンして _index.scss を生成
   */
  function generateModuleIndex() {
    try {
      // _index.scss 以外の _*.scss ファイルを検索
      const pattern = path.join(modulePath, '_*.scss');
      const files = glob.sync(pattern);

      // _index.scss を除外してファイル名を抽出
      const modules = files
        .filter(file => path.basename(file) !== '_index.scss')
        .map(file => {
          const basename = path.basename(file);
          // _common.scss → common
          return basename.replace(/^_/, '').replace(/\.scss$/, '');
        })
        .sort(); // アルファベット順にソート

      // _index.scss の内容を生成
      let content = `// このファイルは自動生成されます\n`;
      content += `// vite-plugin-auto-sass-import.js によって更新されます\n\n`;

      if (modules.length === 0) {
        content += `// モジュールファイルが見つかりませんでした\n`;
        content += `// src/sass/module/ に _*.scss ファイルを追加してください\n`;
      } else {
        modules.forEach(module => {
          content += `@use '${module}';\n`;
        });
      }

      // ファイルに書き込み
      fs.writeFileSync(indexFile, content, 'utf-8');
      console.log(`✅ module/_index.scss を自動生成しました (${modules.length}個のモジュール)`);

      if (modules.length > 0) {
        console.log(`   インポートされたモジュール: ${modules.join(', ')}`);
      }
    } catch (error) {
      console.error('❌ module/_index.scss の生成に失敗しました:', error);
    }
  }

  return {
    name: 'vite-plugin-auto-sass-import',

    // サーバー起動時に実行
    buildStart() {
      console.log('🔄 SCSS module インデックスを生成しています...');
      generateModuleIndex();
    },

    // 開発サーバー設定
    configureServer(server) {
      // module ディレクトリを監視
      const watcher = server.watcher;

      watcher.on('add', (file) => {
        // src/sass/module/ 内の _*.scss ファイルが追加されたら再生成
        if (file.includes('src/sass/module') && file.endsWith('.scss') && path.basename(file).startsWith('_') && path.basename(file) !== '_index.scss') {
          console.log(`📝 新しいモジュールを検出: ${path.basename(file)}`);
          generateModuleIndex();
        }
      });

      watcher.on('unlink', (file) => {
        // src/sass/module/ 内の _*.scss ファイルが削除されたら再生成
        if (file.includes('src/sass/module') && file.endsWith('.scss') && path.basename(file).startsWith('_') && path.basename(file) !== '_index.scss') {
          console.log(`🗑️  モジュールが削除されました: ${path.basename(file)}`);
          generateModuleIndex();
        }
      });
    },
  };
}
