import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public/images');
const distDir = path.join(rootDir, 'dist/images');

/**
 * public/images/ 内の画像を圧縮し、WebP版も生成してdist/images/に出力
 */
async function optimizeImages() {
  console.log('🖼️  画像最適化を開始します...\n');

  // Step 1: dist/images を完全削除（古いファイルを残さないため）
  try {
    await fs.rm(distDir, { recursive: true, force: true });
    console.log('🗑️  古いdist/imagesを削除しました');
  } catch (error) {
    // ディレクトリが存在しない場合は無視
  }

  // Step 2: dist/images ディレクトリを新規作成
  await fs.mkdir(distDir, { recursive: true });

  // Step 3: public/images/ 内の不要なWebPファイルを削除
  const webpFiles = await glob('**/*.webp', {
    cwd: publicDir,
    absolute: false,
  });

  if (webpFiles.length > 0) {
    console.log(`\n⚠️  public/images/内に${webpFiles.length}個のWebPファイルを発見しました`);
    console.log('   これらは自動生成されるため削除します...\n');

    for (const file of webpFiles) {
      const filePath = path.join(publicDir, file);
      await fs.unlink(filePath);
      console.log(`   🗑️  削除: ${file}`);
    }
    console.log('');
  }

  // public/images/ 内の画像ファイルを取得
  const imageFiles = await glob('**/*.{jpg,jpeg,png,svg}', {
    cwd: publicDir,
    absolute: false,
  });

  console.log(`📁 処理対象: ${imageFiles.length}個の画像ファイル\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(publicDir, file);
    const outputDir = path.join(distDir, path.dirname(file));
    const ext = path.extname(file).toLowerCase();
    const baseName = path.basename(file, ext);

    // 出力先ディレクトリを作成
    await fs.mkdir(outputDir, { recursive: true });

    const outputPath = path.join(outputDir, path.basename(file));
    const webpPath = path.join(outputDir, `${baseName}.webp`);

    try {
      if (ext === '.svg') {
        // SVGはそのままコピー
        await fs.copyFile(inputPath, outputPath);
        console.log(`✅ SVG: ${file} → コピー完了`);
      } else {
        // JPG/PNG: 圧縮 + WebP変換

        // 元画像を圧縮（形式に応じて適切な圧縮を適用）
        let sharpInstance = sharp(inputPath);

        if (ext === '.jpg' || ext === '.jpeg') {
          sharpInstance = sharpInstance.jpeg({ quality: 80 });
        } else if (ext === '.png') {
          sharpInstance = sharpInstance.png({ quality: 80, compressionLevel: 9 });
        }

        await sharpInstance.toFile(outputPath);

        // WebP版を生成
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(webpPath);

        console.log(`✅ ${file}`);
        console.log(`   → ${path.basename(outputPath)} (圧縮)`);
        console.log(`   → ${path.basename(webpPath)} (WebP)\n`);
      }
    } catch (error) {
      console.error(`❌ エラー: ${file}`, error.message);
    }
  }

  console.log('\n🎉 画像最適化が完了しました！');
  console.log(`📂 出力先: ${distDir}`);
}

optimizeImages().catch(console.error);
