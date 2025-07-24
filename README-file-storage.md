# 博客文件存储系统说明

## 📁 文件存储结构

本博客系统现在支持基于文件的存储方式，文章以JSON格式存储在文件系统中。

### 目录结构
```
blog/
├── posts/                          # 文章存储目录
│   ├── index.json                  # 文章索引文件
│   ├── categories.json             # 分类配置文件
│   ├── 2024-01-20-welcome-to-cyber-blog.json
│   ├── 2024-01-20-markdown-writing-guide.json
│   └── 2024-01-20-future-technology-trends.json
├── article-manager.js              # 文章管理器
├── file-storage-adapter.js         # 文件存储适配器
└── index.html                      # 主页面
```

## 📄 文件格式说明

### 1. 文章索引文件 (posts/index.json)
```json
{
  "lastUpdated": "2024-01-20T10:00:00.000Z",
  "totalArticles": 3,
  "articles": [
    {
      "id": "welcome-to-cyber-blog",
      "filename": "2024-01-20-welcome-to-cyber-blog.json",
      "title": "欢迎来到赛博博客",
      "createTime": "2024-01-20T10:00:00.000Z",
      "lastModified": "2024-01-20T10:00:00.000Z",
      "status": "published",
      "tags": ["欢迎", "介绍", "赛博朋克"],
      "category": "general",
      "wordCount": 256
    }
  ]
}
```

### 2. 单篇文章文件格式
```json
{
  "id": "welcome-to-cyber-blog",
  "title": "欢迎来到赛博博客",
  "content": "<h2>🚀 欢迎进入赛博空间</h2><p>文章内容...</p>",
  "author": "Cyber Blogger",
  "createTime": "2024-01-20T10:00:00.000Z",
  "lastModified": "2024-01-20T10:00:00.000Z",
  "tags": ["欢迎", "介绍", "赛博朋克"],
  "category": "general",
  "status": "published",
  "wordCount": 256,
  "readTime": 2
}
```

### 3. 分类配置文件 (posts/categories.json)
```json
[
  {
    "id": "general",
    "name": "综合",
    "description": "综合性文章和日常分享",
    "createTime": "2024-01-20T10:00:00.000Z"
  }
]
```

## 🚀 部署方式

### 方式一：静态文件服务器（推荐）

1. **使用 Python 简单服务器**
```bash
# 在博客根目录运行
python -m http.server 8000
# 或者 Python 3
python3 -m http.server 8000
```

2. **使用 Node.js serve**
```bash
# 安装 serve
npm install -g serve
# 在博客根目录运行
serve -p 8000
```

3. **使用 Nginx**
```nginx
server {
    listen 80;
    server_name your-blog.com;
    root /path/to/your/blog;
    index index.html;
    
    location / {
        try_files $uri $uri/ =404;
    }
    
    location /posts/ {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods GET;
    }
}
```

### 方式二：GitHub Pages

1. 将博客文件推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择源分支（通常是 main 或 gh-pages）
4. 访问 `https://username.github.io/repository-name`

### 方式三：Netlify

1. 将代码推送到 Git 仓库
2. 在 Netlify 中连接仓库
3. 设置构建命令（如果需要）
4. 部署完成

## 🔧 本地开发

### 当前状态
- ✅ 文章读取功能已实现
- ✅ 支持 localStorage 后备方案
- ✅ 文章索引管理
- ⚠️ 文章写入需要服务器端支持

### 开发模式
在本地开发时，系统会自动使用 localStorage 作为后备存储方案。

### 添加新文章
1. 在 `posts/` 目录中创建新的 JSON 文件
2. 更新 `posts/index.json` 文件
3. 文件名格式：`YYYY-MM-DD-title-slug-id.json`

## 📝 文章管理

### 创建文章
```javascript
const articleData = {
    title: "文章标题",
    content: "<p>文章内容</p>",
    tags: ["标签1", "标签2"],
    category: "category-id",
    status: "published"
};

await window.articleManager.saveArticle(articleData);
```

### 读取文章
```javascript
// 按索引读取
const article = await window.articleManager.loadArticleByIndex(0);

// 按ID读取
const article = await window.articleManager.loadArticleById("article-id");
```

### 获取文章列表
```javascript
const articles = window.articleManager.getArticlesList({
    includeDrafts: false,
    category: "technology",
    tag: "AI",
    search: "关键词",
    sortBy: "createTime",
    sortOrder: "desc"
});
```

## 🛡️ 安全考虑

### 文件权限
- 确保 `posts/` 目录可读
- 生产环境中限制写入权限
- 使用适当的服务器配置

### 内容验证
- 文章内容经过 HTML 转义
- 输入长度限制
- 文件名安全检查

### 备份策略
- 定期备份 `posts/` 目录
- 使用版本控制系统
- 自动备份到云存储

## 🔄 数据迁移

### 从 localStorage 迁移到文件
```javascript
// 导出现有数据
await window.fileStorageAdapter.backupToFile();

// 手动创建文章文件
// 更新 index.json
```

### 批量导入
```javascript
// 从备份文件恢复
const fileInput = document.getElementById('fileInput');
const file = fileInput.files[0];
await window.fileStorageAdapter.restoreFromFile(file);
```

## 🚧 未来改进

### 服务器端支持
- 实现文章创建/编辑 API
- 文件上传和管理
- 用户权限控制

### 高级功能
- 文章版本控制
- 自动备份
- 内容搜索索引
- 图片资源管理

## 📞 技术支持

如果在部署过程中遇到问题：

1. 检查浏览器控制台错误信息
2. 确认文件路径和权限设置
3. 验证 JSON 文件格式
4. 查看网络请求状态

## 📚 相关文档

- [Markdown 语法指南](posts/2024-01-20-markdown-writing-guide.json)
- [博客功能介绍](posts/2024-01-20-welcome-to-cyber-blog.json)
- [技术架构说明](posts/2024-01-20-future-technology-trends.json)
