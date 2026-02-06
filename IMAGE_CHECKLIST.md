# 图片路径检查清单

## 📋 所有图片路径清单

### ✅ Header & Footer
- [ ] `/logo/pokemon9-logo.png` - POKEMON9 Logo (Header)
- [ ] `/footer-banner.png` - Footer Banner (Certifications & Payment Methods)

### ✅ Game Images
- [ ] `/slot-games.jpg` - Slot Games Collection
- [ ] `/table-games.jpg` - Table Games & Live Casino
- [ ] `/jili.png` - JILI Game Logo
- [ ] `/booongo.png` - BOOONGO Game Logo
- [ ] `/ace333.png` - ACE333 Game Logo

### ✅ Bonus & Promotion Images
- [ ] `/welcomeBonus.jpg` - Welcome Bonus Information
- [ ] `/promotions.jpg` - Promotions Calendar

### ✅ Registration & Login Images
- [ ] `/register.jpg` - Registration Form
- [ ] `/login.jpg` - Login Page

### ✅ Payment Images
- [ ] `/transaction.jpg` - Transaction Panel

### ✅ Favicon & Icons
- [ ] `/favicon.ico` - Favicon (ICO format)
- [ ] `/favicon.svg` - Favicon (SVG format)
- [ ] `/apple-touch-icon.png` - Apple Touch Icon (180x180)
- [ ] `/web-app-manifest-192x192.png` - Web App Icon (192x192)
- [ ] `/web-app-manifest-512x512.png` - Web App Icon (512x512)

## 🔍 检查方法

### 方法 1: 使用检查工具（推荐）

1. **打开检查工具**：
   - 将 `scripts/check-images.html` 复制到项目根目录
   - 在浏览器中打开 `check-images.html`
   - 工具会自动检查所有图片路径

2. **查看结果**：
   - ✅ 绿色 = 图片加载成功
   - ❌ 红色 = 图片未找到或加载失败
   - ⏳ 蓝色 = 正在加载

### 方法 2: 浏览器开发者工具

1. **打开开发者工具** (F12)
2. **切换到 Network 标签**
3. **筛选 Images**
4. **刷新页面**
5. **检查所有图片请求**：
   - 绿色状态码 (200) = 成功
   - 红色状态码 (404) = 未找到

### 方法 3: 手动检查

在浏览器控制台运行以下代码：

```javascript
const images = [
  '/logo/pokemon9-logo.png',
  '/footer-banner.png',
  '/slot-games.jpg',
  '/table-games.jpg',
  '/jili.png',
  '/booongo.png',
  '/ace333.png',
  '/welcomeBonus.jpg',
  '/promotions.jpg',
  '/register.jpg',
  '/login.jpg',
  '/transaction.jpg',
  '/favicon.ico',
  '/apple-touch-icon.png',
];

images.forEach(path => {
  const img = new Image();
  img.onload = () => console.log(`✅ ${path} - OK`);
  img.onerror = () => console.error(`❌ ${path} - NOT FOUND`);
  img.src = path;
});
```

## 📁 文件位置

所有图片文件应该放在 `public/` 文件夹中：

```
public/
├── logo/
│   └── pokemon9-logo.png
├── footer-banner.png
├── slot-games.jpg
├── table-games.jpg
├── jili.png
├── booongo.png
├── ace333.png
├── welcomeBonus.jpg
├── promotions.jpg
├── register.jpg
├── login.jpg
├── transaction.jpg
├── favicon.ico
├── favicon.svg
├── apple-touch-icon.png
├── web-app-manifest-192x192.png
└── web-app-manifest-512x512.png
```

## ⚠️ 常见问题

### 问题 1: 图片显示为 404
**原因**: 文件路径不正确或文件不存在
**解决**: 
- 检查文件是否在 `public/` 文件夹中
- 检查文件名是否完全匹配（区分大小写）
- 检查路径是否正确（以 `/` 开头）

### 问题 2: 图片显示但很模糊
**原因**: 图片分辨率太低
**解决**: 使用更高分辨率的图片

### 问题 3: 图片加载很慢
**原因**: 图片文件太大
**解决**: 压缩图片文件大小

## 🧪 快速测试命令

在项目根目录运行开发服务器后，在浏览器中访问：

```
http://localhost:3000/logo/pokemon9-logo.png
http://localhost:3000/footer-banner.png
http://localhost:3000/slot-games.jpg
... 等等
```

如果图片能直接访问，说明路径正确。

## 📝 检查清单

- [ ] 所有图片文件都在 `public/` 文件夹中
- [ ] 所有图片路径都以 `/` 开头
- [ ] 文件名完全匹配（区分大小写）
- [ ] 图片格式正确（PNG, JPG, ICO, SVG）
- [ ] 使用检查工具验证所有图片
- [ ] 在浏览器中测试所有页面
- [ ] 检查移动端显示

---

**提示**: 使用 `scripts/check-images.html` 工具可以快速检查所有图片路径！
