import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public/images');

async function compressInPlace() {
  console.log('🖼️  画像のインプレース圧縮を開始します...\n');

  // 対象ファイルをスキャン
  const files = await glob('**/*.{jpg,jpeg,png,webp}', {
    cwd: publicDir,
    absolute: true,
  });

  console.log(`📁 処理対象: ${files.length}個の画像ファイル\n`);

  let totalSaved = 0;
  let successCount = 0;

  for (const filePath of files) {
    const ext = path.extname(filePath).toLowerCase();
    const relativePath = path.relative(publicDir, filePath);
    
    // 一時ファイルパス
    const tempPath = `${filePath}.temp${ext}`;

    try {
      const stats = await fs.stat(filePath);
      const originalSize = stats.size;

      if (originalSize === 0) continue;

      let sharpInstance = sharp(filePath);

      // 画質を保ちつつファイルサイズを小さくする (quality: 85)
      if (ext === '.jpg' || ext === '.jpeg') {
        sharpInstance = sharpInstance.jpeg({ quality: 85, progressive: true });
      } else if (ext === '.png') {
        sharpInstance = sharpInstance.png({ quality: 85, compressionLevel: 9 });
      } else if (ext === '.webp') {
        sharpInstance = sharpInstance.webp({ quality: 85 });
      }

      await sharpInstance.toFile(tempPath);

      const tempStats = await fs.stat(tempPath);
      const newSize = tempStats.size;

      if (newSize < originalSize) {
        // サイズが縮小した場合のみ上書き
        await fs.rename(tempPath, filePath);
        const saved = originalSize - newSize;
        totalSaved += saved;
        successCount++;
        console.log(`✅ 圧縮成功: ${relativePath}`);
        console.log(`   ${(originalSize / 1024).toFixed(1)} KB → ${(newSize / 1024).toFixed(1)} KB (-${(saved / 1024).toFixed(1)} KB, -${((saved / originalSize) * 100).toFixed(1)}%)`);
      } else {
        // サイズが小さくならなかった場合は一時ファイルを削除して元のファイルを維持
        await fs.unlink(tempPath);
        console.log(`➖ スキップ (変化なし): ${relativePath}`);
      }
    } catch (error) {
      console.error(`❌ エラー: ${relativePath}`, error.message);
      // 一時ファイルの残骸があれば削除
      try {
        await fs.unlink(tempPath);
      } catch (e) {}
    }
  }

  console.log('\n🎉 画像の圧縮が完了しました！');
  console.log(`📊 処理結果: ${successCount} 個のファイルを圧縮`);
  console.log(`💾 合計節約容量: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB`);
}

compressInPlace().catch(console.error);
