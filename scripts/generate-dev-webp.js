import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public/images');

/**
 * 開発環境用：public/images/ 内のJPG/PNG画像からWebPを生成
 * 既存のWebPファイルがある場合はスキップ
 */
async function generateDevWebP() {
  console.log('🔄 開発環境用WebP画像を確認中...\n');

  // public/images/ ディレクトリが存在するか確認
  try {
    await fs.access(publicDir);
  } catch (error) {
    console.log(`⚠️  ${publicDir} が存在しません。スキップします。\n`);
    return;
  }

  // public/images/ 内のJPG/PNG画像を取得
  const imageFiles = await glob('**/*.{jpg,jpeg,png}', {
    cwd: publicDir,
    absolute: false,
  });

  if (imageFiles.length === 0) {
    console.log('✅ 処理対象の画像がありません\n');
    return;
  }

  let generated = 0;
  let skipped = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);
    const dirName = path.dirname(file);
    const webpPath = path.join(publicDir, dirName, `${baseName}.webp`);

    try {
      // WebPファイルが既に存在するかチェック
      const webpExists = await fs.access(webpPath).then(() => true).catch(() => false);

      if (webpExists) {
        skipped++;
        continue;
      }

      // WebP生成
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(webpPath);

      console.log(`✅ 生成: ${path.relative(publicDir, webpPath)}`);
      generated++;
    } catch (error) {
      console.error(`❌ エラー: ${file}`, error.message);
    }
  }

  console.log(`\n📊 処理完了: ${generated}個生成, ${skipped}個スキップ\n`);
}

generateDevWebP().catch(console.error);
