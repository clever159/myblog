# 个人博客（Hexo 7 + NexT）

> 基于 Hexo + NexT，内置本地搜索、RSS、Sitemap、GitHub Pages 与 Vercel 部署配置。

## 环境要求
- Node.js ≥ 18（推荐 LTS）
- Git ≥ 2.40

## 快速开始
```bash
# 安装依赖
npm install

# 本地预览（开发）
npm run dev
# 或
npm run start

# 构建静态文件（输出到 public/）
npm run build

# 清理构建缓存
npm run clean
```

## 常用写作
- 新建文章
```bash
npx hexo new post "文章标题"
```
- 新建页面
```bash
npx hexo new page about
```
- 文章 Front‑Matter 示例（置于 Markdown 顶部）
```yml
---
title: 标题
date: 2025-08-11 10:00:00
tags: [Hexo, 笔记]
categories: [技术]
---
```

## 目录结构（关键项）
- `_config.yml`：站点配置（语言、主题、URL、部署等）
- `themes/next/_config.yml`：NexT 主题配置（菜单、搜索、社交、统计等）
- `source/_posts/`：Markdown 文章
- `source/about/`、`source/tags/`、`source/categories/`：页面
- `.github/workflows/deploy.yml`：GitHub Pages（Actions 版）
- `vercel.json`：Vercel 部署配置

## 已启用的功能
- RSS：`/atom.xml`
- Sitemap：`/sitemap.xml`
- Robots：`/robots.txt`
- NexT 本地搜索：`local_search.enable: true`
- 图片懒加载：`lazyload: true`

## 站点配置（已替你填写）
编辑 `blog/_config.yml`：
- `title/author/language`：已设置中文
- `theme: next`
- `url: https://Ruoshui599.github.io`
- 部署：
```yml
deploy:
  type: git
  repo: https://github.com/Ruoshui599/Ruoshui599.github.io.git
  branch: main
```

## 主题配置（可选）
编辑 `themes/next/_config.yml`：
- 菜单：已启用 首页/分类/标签/归档/关于/站点地图
- 社交：已加入 GitHub：`https://github.com/Ruoshui599`
- 本地搜索与懒加载：已启用

## 部署到 GitHub Pages（用户主页，推荐）
发布到 `https://Ruoshui599.github.io` 根域，源码与页面分离：
- 源码仓库：`myblog`（示例名，可自定义）
- Pages 仓库：`Ruoshui599/Ruoshui599.github.io`

步骤：
1) 生成与部署（需已登录 GitHub 或使用 PAT）
```bash
npm run clean && npm run build
npm run deploy:pages
```
2) 首次部署后等待 1-3 分钟，访问 `https://Ruoshui599.github.io`

## 部署到 Vercel（静态托管）
- 导入源码仓库
- Build Command：`npm run build`
- Output Directory：`public`
- 已包含 `vercel.json`

## 同时推送到两个仓库（源码 + Pages）
假设：
- 源码仓库：`https://github.com/Ruoshui599/myblog.git`
- Pages 仓库：`https://github.com/Ruoshui599/Ruoshui599.github.io.git`

添加远程并推送源码：
```bash
git branch -M main
git remote add origin https://github.com/Ruoshui599/myblog.git
git push -u origin main
```

发布静态文件到用户主页仓库（Pages 仓库）：
```bash
npm run build
npm run deploy:pages
```

> 若命令行提示需要登录，请先在本机 Git Credential Manager 登录 GitHub，或使用 PAT：
> `https://<TOKEN>@github.com/Ruoshui599/Ruoshui599.github.io.git`

## 可自定义项
- 站点信息：`_config.yml` 的 `title`、`subtitle`、`description`、`author`
- 导航与社交：`themes/next/_config.yml` 的 `menu`、`social`
- 评论与统计：同上文件里的 `utterances` / `gitalk` / `google_analytics` 等

## 故障排查
- 本地预览打不开：端口被占用时可 `npm run dev -- --port 4001`
- 资源 404：确认 `_config.yml` 的 `url` 与实际部署路径一致
- Push 失败：先配置 Git 用户与邮箱
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

