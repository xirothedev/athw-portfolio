const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

const inputImage = path.join(__dirname, "../public/image.png")
const outputDir = path.join(__dirname, "../public")

// Các size cần tạo cho favicon và metadata
const sizes = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "favicon-32x32.png" },
  { size: 48, name: "favicon-48x48.png" },
  { size: 64, name: "favicon-64x64.png" },
  { size: 96, name: "favicon-96x96.png" },
  { size: 128, name: "favicon-128x128.png" },
  { size: 180, name: "apple-touch-icon.png" }, // Apple touch icon
  { size: 192, name: "android-chrome-192x192.png" }, // Android
  { size: 512, name: "android-chrome-512x512.png" }, // PWA
]

// Tạo favicon.ico từ 16x16 và 32x32
async function createIco() {
  try {
    const ico16 = await sharp(inputImage).resize(16, 16).png().toBuffer()
    const ico32 = await sharp(inputImage).resize(32, 32).png().toBuffer()

    // Tạo ICO đơn giản (multi-resolution ICO với 2 sizes)
    // Lưu ý: sharp không hỗ trợ tạo ICO trực tiếp, nên ta sẽ tạo PNG và đổi tên
    // Hoặc có thể sử dụng package khác như to-ico
    console.log("✓ Created PNG files for ICO conversion")
    console.log(
      "  Note: For true .ico format, consider using a tool like ImageMagick or online converter"
    )

    // Tạo favicon.ico từ 32x32 (fallback)
    await sharp(inputImage).resize(32, 32).png().toFile(path.join(outputDir, "favicon.ico"))
    console.log("✓ Created favicon.ico (32x32 PNG format)")
  } catch (error) {
    console.error("Error creating ICO:", error)
  }
}

// Tạo tất cả các size PNG
async function createPngSizes() {
  console.log("\nGenerating favicon sizes...\n")

  for (const { size, name } of sizes) {
    try {
      await sharp(inputImage)
        .resize(size, size, {
          fit: "cover",
          background: { r: 255, g: 255, b: 255, alpha: 0 },
        })
        .png()
        .toFile(path.join(outputDir, name))

      console.log(`✓ Created ${name} (${size}x${size})`)
    } catch (error) {
      console.error(`✗ Error creating ${name}:`, error)
    }
  }
}

// Tạo manifest.json cho PWA
async function createManifest() {
  const manifest = {
    name: "My Muse | A Love Story",
    short_name: "My Muse",
    description: "A soft & dreamy portfolio dedicated to my beautiful girlfriend",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#f5f5f5",
    background_color: "#ffffff",
    display: "standalone",
  }

  fs.writeFileSync(path.join(outputDir, "site.webmanifest"), JSON.stringify(manifest, null, 2))
  console.log("✓ Created site.webmanifest")
}

// Main function
async function main() {
  console.log("🎨 Starting favicon generation...\n")
  console.log(`Input: ${inputImage}`)
  console.log(`Output: ${outputDir}\n`)

  // Kiểm tra file input có tồn tại không
  if (!fs.existsSync(inputImage)) {
    console.error(`✗ Error: Input image not found at ${inputImage}`)
    process.exit(1)
  }

  await createPngSizes()
  await createIco()
  await createManifest()

  console.log("\n✨ Favicon generation complete!")
  console.log("\nNext steps:")
  console.log("1. Update src/app/layout.tsx with the new favicon paths")
  console.log(
    "2. For true .ico format, convert favicon-32x32.png to .ico using ImageMagick or online tool"
  )
}

main().catch(console.error)
