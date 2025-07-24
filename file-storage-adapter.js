/**
 * 文件存储适配器 - 模拟服务器端文件操作
 * 在实际部署时，这些操作需要真正的服务器端支持
 */

class FileStorageAdapter {
    constructor() {
        this.isServerMode = false; // 在实际部署时设置为true
        this.baseUrl = './posts/';
    }

    /**
     * 检查是否支持文件操作
     */
    isSupported() {
        // 在浏览器环境中，我们无法直接写入文件
        // 这里返回false，使用localStorage作为后备
        return this.isServerMode;
    }

    /**
     * 读取文件
     */
    async readFile(filename) {
        try {
            const response = await fetch(`${this.baseUrl}${filename}`);
            if (response.ok) {
                return await response.json();
            } else {
                throw new Error(`无法读取文件: ${filename}`);
            }
        } catch (error) {
            console.error('读取文件失败:', error);
            throw error;
        }
    }

    /**
     * 写入文件（模拟）
     */
    async writeFile(filename, data) {
        if (!this.isServerMode) {
            // 在客户端模式下，我们无法真正写入文件
            // 这里只是模拟操作，实际数据仍存储在localStorage
            console.log('模拟写入文件:', filename, data);
            
            // 将数据保存到localStorage作为备份
            const key = `file-backup-${filename}`;
            localStorage.setItem(key, JSON.stringify(data));
            
            return { success: true, message: '文件已保存到本地存储' };
        }

        // 在服务器模式下，这里应该调用真正的API
        try {
            const response = await fetch('/api/files', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    filename: filename,
                    data: data
                })
            });

            if (response.ok) {
                return await response.json();
            } else {
                throw new Error('服务器写入失败');
            }
        } catch (error) {
            console.error('写入文件失败:', error);
            throw error;
        }
    }

    /**
     * 删除文件（模拟）
     */
    async deleteFile(filename) {
        if (!this.isServerMode) {
            console.log('模拟删除文件:', filename);
            
            // 从localStorage中删除备份
            const key = `file-backup-${filename}`;
            localStorage.removeItem(key);
            
            return { success: true, message: '文件已从本地存储删除' };
        }

        // 在服务器模式下，这里应该调用真正的API
        try {
            const response = await fetch(`/api/files/${filename}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                return await response.json();
            } else {
                throw new Error('服务器删除失败');
            }
        } catch (error) {
            console.error('删除文件失败:', error);
            throw error;
        }
    }

    /**
     * 列出目录中的文件
     */
    async listFiles(directory = '') {
        try {
            const response = await fetch(`${this.baseUrl}index.json`);
            if (response.ok) {
                const indexData = await response.json();
                return indexData.articles || [];
            } else {
                throw new Error('无法读取文件索引');
            }
        } catch (error) {
            console.error('列出文件失败:', error);
            return [];
        }
    }

    /**
     * 确保目录存在（模拟）
     */
    async ensureDirectory(directory) {
        if (!this.isServerMode) {
            console.log('模拟创建目录:', directory);
            return { success: true };
        }

        // 在服务器模式下的实现
        try {
            const response = await fetch('/api/directories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ directory: directory })
            });

            return response.ok;
        } catch (error) {
            console.error('创建目录失败:', error);
            return false;
        }
    }

    /**
     * 备份数据到文件
     */
    async backupToFile() {
        try {
            // 获取所有localStorage数据
            const articles = JSON.parse(localStorage.getItem('blog-articles') || '[]');
            const categories = JSON.parse(localStorage.getItem('blog-categories') || '[]');
            const settings = JSON.parse(localStorage.getItem('blog-settings') || '{}');

            const backupData = {
                timestamp: new Date().toISOString(),
                articles: articles,
                categories: categories,
                settings: settings
            };

            // 创建下载链接
            const dataStr = JSON.stringify(backupData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = `blog-backup-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            URL.revokeObjectURL(url);

            return { success: true, message: '备份文件已下载' };
        } catch (error) {
            console.error('备份失败:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 从文件恢复数据
     */
    async restoreFromFile(file) {
        try {
            const text = await file.text();
            const backupData = JSON.parse(text);

            // 验证备份数据格式
            if (!backupData.articles || !Array.isArray(backupData.articles)) {
                throw new Error('无效的备份文件格式');
            }

            // 恢复数据到localStorage
            localStorage.setItem('blog-articles', JSON.stringify(backupData.articles));
            
            if (backupData.categories) {
                localStorage.setItem('blog-categories', JSON.stringify(backupData.categories));
            }
            
            if (backupData.settings) {
                localStorage.setItem('blog-settings', JSON.stringify(backupData.settings));
            }

            return { 
                success: true, 
                message: `成功恢复 ${backupData.articles.length} 篇文章`,
                articlesCount: backupData.articles.length
            };
        } catch (error) {
            console.error('恢复失败:', error);
            return { success: false, error: error.message };
        }
    }

    /**
     * 导出单篇文章为文件
     */
    async exportArticle(article) {
        try {
            const articleData = {
                id: article.id || Date.now().toString(),
                title: article.title,
                content: article.content,
                author: article.author || 'Anonymous',
                createTime: article.createTime,
                lastModified: article.lastModified || new Date().toISOString(),
                tags: article.tags || [],
                category: article.category || '',
                status: article.status || 'published'
            };

            const filename = this.generateFilename(article.title, articleData.id);
            const dataStr = JSON.stringify(articleData, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            URL.revokeObjectURL(url);

            return { success: true, filename: filename };
        } catch (error) {
            console.error('导出文章失败:', error);
            return { success: false, error: error.message };
        }
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
}

// 创建全局文件存储适配器实例
window.fileStorageAdapter = new FileStorageAdapter();
