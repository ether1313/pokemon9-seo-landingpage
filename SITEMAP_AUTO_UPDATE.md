# Sitemap 自动更新说明

## 🎯 功能说明

sitemap.xml 中的 `lastmod` 日期现在可以自动更新了！

## 📋 自动更新方式

### 方式 1: 构建时自动更新（推荐）

每次运行 `npm run build` 时，sitemap.xml 中的所有 `lastmod` 日期会自动更新为当前日期。

**无需任何额外操作！** Vite 插件会在构建开始时自动更新。

### 方式 2: 手动运行脚本

如果需要手动更新 sitemap，可以运行：

```bash
npm run update-sitemap
```

或者直接运行脚本：

```bash
node scripts/update-sitemap.js
```

## 🔧 工作原理

### Vite 插件（自动）
- 文件：`vite-plugins/update-sitemap-plugin.ts`
- 在构建开始时自动运行
- 更新所有页面的 `lastmod` 日期为当前日期

### 手动脚本（可选）
- 文件：`scripts/update-sitemap.js`
- 可以随时手动运行
- 更新所有页面的 `lastmod` 日期

### 高级脚本（可选）
- 文件：`scripts/update-sitemap-advanced.js`
- 支持更新特定页面：
  ```bash
  node scripts/update-sitemap-advanced.js "https://pokemon9aud.com/pokemon9-casino-review"
  ```

## 📅 日期格式

所有 `lastmod` 日期使用 ISO 8601 格式：`YYYY-MM-DD`

例如：`2024-12-19`

## ✅ 验证更新

运行脚本后，检查 `public/sitemap.xml` 文件，所有 `<lastmod>` 标签应该显示当前日期。

## 🔄 工作流程

1. **开发时**：无需手动更新，正常开发即可
2. **构建时**：运行 `npm run build`，sitemap 自动更新
3. **部署前**：sitemap 已包含最新日期，直接部署

## 📝 注意事项

- ✅ 构建时会自动更新，无需手动操作
- ✅ 所有页面的 `lastmod` 会统一更新为当前日期
- ✅ 日期格式符合 XML sitemap 标准
- ⚠️ 如果只想更新特定页面，使用高级脚本

## 🚀 快速测试

运行以下命令测试脚本：

```bash
npm run update-sitemap
```

然后检查 `public/sitemap.xml` 文件，确认所有 `lastmod` 日期已更新。

---

**提示**: 每次构建时 sitemap 会自动更新，确保搜索引擎总是看到最新的修改日期！
