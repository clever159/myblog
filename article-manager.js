/**
 * 文章管理器 - 基于文件存储的博客文章管理系统
 * 支持JSON格式的文章存储和管理
 */

class ArticleManager {
    constructor() {
        this.articlesPath = './posts/';
        this.indexPath = './posts/index.json';
        this.articles = [];
        this.categories = [];
        this.init();
    }

    /**
     * 初始化文章管理器
     */
    async init() {
        try {
            await this.loadArticleIndex();
            await this.loadCategories();
        } catch (error) {
            console.warn('初始化文章管理器失败，使用localStorage作为后备:', error);
            this.fallbackToLocalStorage();
        }
    }

    /**
     * 加载文章索引
     */
    async loadArticleIndex() {
        try {
            const response = await fetch(this.indexPath);
            if (response.ok) {
                const data = await response.json();
                this.articles = data.articles || [];
                console.log('成功加载文章索引，共', this.articles.length, '篇文章');
            } else {
                throw new Error('无法加载文章索引');
            }
        } catch (error) {
            console.warn('加载文章索引失败:', error);
            this.articles = [];
        }
    }

    /**
     * 保存文章索引
     */
    async saveArticleIndex() {
        const indexData = {
            lastUpdated: new Date().toISOString(),
            totalArticles: this.articles.length,
            articles: this.articles
        };

        try {
            // 在实际应用中，这里需要服务器端API支持
            console.log('保存文章索引:', indexData);
            // 同时保存到localStorage作为备份
            localStorage.setItem('blog-articles-index', JSON.stringify(indexData));
            return true;
        } catch (error) {
            console.error('保存文章索引失败:', error);
            return false;
        }
    }

    /**
     * 根据ID加载单篇文章
     */
    async loadArticleById(id) {
        try {
            const articleInfo = this.articles.find(article => article.id === id);
            if (!articleInfo) {
                throw new Error('文章不存在');
            }

            const response = await fetch(`${this.articlesPath}${articleInfo.filename}`);
            if (response.ok) {
                const articleData = await response.json();
                return articleData;
            } else {
                throw new Error('无法加载文章内容');
            }
        } catch (error) {
            console.error('加载文章失败:', error);
            return null;
        }
    }

    /**
     * 根据索引加载文章（兼容现有系统）
     */
    async loadArticleByIndex(index) {
        if (index < 0 || index >= this.articles.length) {
            return null;
        }
        
        const articleInfo = this.articles[index];
        return await this.loadArticleById(articleInfo.id);
    }

    /**
     * 保存文章
     */
    async saveArticle(articleData) {
        try {
            // 生成文章ID和文件名
            const id = articleData.id || this.generateArticleId();
            const filename = this.generateFilename(articleData.title, id);
            
            // 准备文章数据
            const article = {
                id: id,
                title: articleData.title,
                content: articleData.content,
                author: articleData.author || 'Anonymous',
                createTime: articleData.createTime || new Date().toISOString(),
                lastModified: new Date().toISOString(),
                tags: articleData.tags || [],
                category: articleData.category || '',
                status: articleData.status || 'published',
                wordCount: this.calculateWordCount(articleData.content),
                readTime: this.calculateReadTime(articleData.content)
            };

            // 在实际应用中，这里需要服务器端API支持
            console.log('保存文章到文件:', filename, article);

            // 更新文章索引
            const existingIndex = this.articles.findIndex(a => a.id === id);
            const articleInfo = {
                id: id,
                filename: filename,
                title: article.title,
                createTime: article.createTime,
                lastModified: article.lastModified,
                status: article.status,
                tags: article.tags,
                category: article.category,
                wordCount: article.wordCount
            };

            if (existingIndex >= 0) {
                this.articles[existingIndex] = articleInfo;
            } else {
                this.articles.push(articleInfo);
            }

            // 保存索引
            await this.saveArticleIndex();

            // 同时保存到localStorage作为备份
            this.saveToLocalStorage();

            return { success: true, id: id, filename: filename };
        } catch (error) {
            console.error('保存文章失败:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 删除文章
     */
    async deleteArticle(id) {
        try {
            const articleIndex = this.articles.findIndex(a => a.id === id);
            if (articleIndex === -1) {
                throw new Error('文章不存在');
            }

            const articleInfo = this.articles[articleIndex];
            
            // 在实际应用中，这里需要服务器端API支持删除文件
            console.log('删除文章文件:', articleInfo.filename);

            // 从索引中移除
            this.articles.splice(articleIndex, 1);

            // 保存索引
            await this.saveArticleIndex();

            // 同时更新localStorage
            this.saveToLocalStorage();

            return { success: true };
        } catch (error) {
            console.error('删除文章失败:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 获取所有文章列表
     */
    getArticlesList(options = {}) {
        let articles = [...this.articles];

        // 过滤草稿
        if (!options.includeDrafts) {
            articles = articles.filter(article => article.status === 'published');
        }

        // 按分类过滤
        if (options.category) {
            articles = articles.filter(article => article.category === options.category);
        }

        // 按标签过滤
        if (options.tag) {
            articles = articles.filter(article => article.tags && article.tags.includes(options.tag));
        }

        // 搜索
        if (options.search) {
            const searchTerm = options.search.toLowerCase();
            articles = articles.filter(article => 
                article.title.toLowerCase().includes(searchTerm) ||
                (article.tags && article.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
            );
        }

        // 排序
        const sortBy = options.sortBy || 'createTime';
        const sortOrder = options.sortOrder || 'desc';
        
        articles.sort((a, b) => {
            let aValue = a[sortBy];
            let bValue = b[sortBy];
            
            if (sortBy === 'createTime' || sortBy === 'lastModified') {
                aValue = new Date(aValue);
                bValue = new Date(bValue);
            }
            
            if (sortOrder === 'desc') {
                return bValue > aValue ? 1 : -1;
            } else {
                return aValue > bValue ? 1 : -1;
            }
        });

        return articles;
    }

    /**
     * 生成文章ID
     */
    generateArticleId() {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }

    /**
     * 生成文件名
     */
    generateFilename(title, id) {
        const date = new Date().toISOString().split('T')[0];
        const slug = title.toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .substring(0, 50);
        return `${date}-${slug}-${id}.json`;
    }

    /**
     * 计算字数
     */
    calculateWordCount(content) {
        return content.replace(/<[^>]*>/g, '').split(/\s+/).filter(word => word.length > 0).length;
    }

    /**
     * 计算阅读时间
     */
    calculateReadTime(content) {
        const wordCount = this.calculateWordCount(content);
        return Math.max(1, Math.ceil(wordCount / 200));
    }

    /**
     * 加载分类
     */
    async loadCategories() {
        try {
            const response = await fetch('./posts/categories.json');
            if (response.ok) {
                this.categories = await response.json();
            }
        } catch (error) {
            console.warn('加载分类失败:', error);
            this.categories = JSON.parse(localStorage.getItem('blog-categories') || '[]');
        }
    }

    /**
     * 后备方案：使用localStorage
     */
    fallbackToLocalStorage() {
        console.log('使用localStorage作为存储后备方案');
        const articles = JSON.parse(localStorage.getItem('blog-articles') || '[]');
        this.articles = articles.map((article, index) => ({
            id: article.id || `local-${index}`,
            filename: `local-${index}.json`,
            title: article.title,
            createTime: article.createTime,
            lastModified: article.lastModified,
            status: article.isDraft ? 'draft' : 'published',
            tags: article.tags || [],
            category: article.category || '',
            wordCount: this.calculateWordCount(article.content || '')
        }));
    }

    /**
     * 保存到localStorage（备份）
     */
    saveToLocalStorage() {
        const articles = this.articles.map(articleInfo => ({
            id: articleInfo.id,
            title: articleInfo.title,
            content: '', // 内容需要单独加载
            createTime: articleInfo.createTime,
            lastModified: articleInfo.lastModified,
            isDraft: articleInfo.status === 'draft',
            tags: articleInfo.tags,
            category: articleInfo.category
        }));
        localStorage.setItem('blog-articles', JSON.stringify(articles));
    }
}

// 创建全局文章管理器实例
window.articleManager = new ArticleManager();
