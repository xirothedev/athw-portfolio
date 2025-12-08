# Favicon Generator Script

Script này tự động tạo các favicon và icon ở nhiều kích thước khác nhau từ file `public/image.png`.

## Cách sử dụng

1. **Cài đặt dependencies:**

   ```bash
   npm install
   # hoặc
   pnpm install
   ```

2. **Chạy script:**
   ```bash
   npm run generate-favicons
   # hoặc
   pnpm generate-favicons
   ```

## Output

Script sẽ tạo các file sau trong thư mục `public/`:

- `favicon.ico` - Favicon chính (32x32)
- `favicon-16x16.png` - Favicon 16x16
- `favicon-32x32.png` - Favicon 32x32
- `favicon-48x48.png` - Favicon 48x48
- `favicon-64x64.png` - Favicon 64x64
- `favicon-96x96.png` - Favicon 96x96
- `favicon-128x128.png` - Favicon 128x128
- `apple-touch-icon.png` - Apple touch icon (180x180)
- `android-chrome-192x192.png` - Android icon (192x192)
- `android-chrome-512x512.png` - PWA icon (512x512)
- `site.webmanifest` - Web manifest cho PWA

## Lưu ý

- File `favicon.ico` được tạo từ PNG 32x32. Để có file ICO thực sự, bạn có thể:
  - Sử dụng ImageMagick: `convert favicon-32x32.png favicon.ico`
  - Sử dụng công cụ online như [favicon.io](https://favicon.io/favicon-converter/)
  - Sử dụng package `to-ico` nếu cần

## Metadata

Các favicon đã được cấu hình trong `src/app/layout.tsx` và sẽ tự động được sử dụng bởi Next.js.
