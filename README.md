# 我的个人博客（Hexo + NexT）

## 本地开发

```bash
npm install
npx hexo server
```

## 构建

```bash
npx hexo clean && npx hexo generate
```

## 部署

- GitHub Pages（推荐CI）：使用 `.github/workflows/deploy.yml`
- Vercel：根目录包含 `vercel.json`，会运行 `npm run build` 并托管 `public`

## 重要占位符

- `_config.yml`:
  - `url`: 部署后改为你的域名或 `https://USERNAME.github.io`
  - `deploy.repo`: 替换为 `https://github.com/USERNAME/USERNAME.github.io.git`
- 主题社交 / 评论：按需在 `themes/next/_config.yml` 编辑

