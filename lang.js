// 语言配置
const languages = {
    zh: {
        // 通用导航
        home: '🏠 首页',
        newPost: '✍️ 新文章',
        settings: '⚙️ 设置',
        
        // 首页
        searchPlaceholder: '🔍 搜索文章...',
        search: '搜索',
        clear: '清除',
        sortBy: '排序方式...',
        sortDateNew: '📅 最新优先',
        sortDateOld: '📅 最旧优先',
        sortTitle: '🔤 标题 A-Z',
        sortWords: '📊 字数',
        filterByTags: '按标签筛选:',
        noTagsAvailable: '暂无标签',
        noArticlesFound: '未找到文章。创建您的第一篇赛博文章！',
        createNewPost: '✍️ 创建新文章',
        view: '👁️ 查看',
        edit: '✍️ 编辑',
        delete: '🗑️ 删除',
        deleteConfirm: '删除',
        words: '字',
        exportAll: '📦 导出全部',
        statistics: '📊 统计',
        
        // 编辑器
        editorTitle: '赛博编辑器',
        titlePlaceholder: '输入文章标题...',
        save: '💾 保存',
        saveAsDraft: '📝 保存为草稿',
        preview: '👁️ 预览',
        backToList: '🔙 返回列表',
        titleEmpty: '❌ 标题不能为空！',
        savedSuccessfully: '✅ 文章保存成功！',
        draftSaved: '📝 草稿保存成功！',
        lastSaved: '最后保存',
        never: '从未',
        wordCount: '字数',
        charCount: '字符数',
        setTarget: '🎯 设置目标',
        shortcuts: '💡 快捷键: Ctrl+S (保存), Ctrl+D (草稿), Ctrl+P (预览)',
        
        // 文章页面
        edit: '✍️ 编辑',
        back: '🔙 返回列表',
        export: '📥 导出',
        share: '📤 分享',
        previous: '⬅️ 上一篇',
        next: '➡️ 下一篇',
        readTime: '阅读时间',
        minutes: '分钟',
        tags: '标签',
        articleNotFound: '文章未找到',
        articleNotFoundDesc: '请求的文章无法找到。',
        
        // 设置页面
        settingsTitle: '赛博设置',
        dataManagement: '📊 数据管理',
        exportData: '📤 导出数据',
        importData: '📥 导入数据',
        clearAll: '🗑️ 清空所有数据',
        removeDuplicates: '🔄 移除重复项',
        optimizeStorage: '⚡ 优化存储',
        appearanceSettings: '🎨 外观设置',
        cyberTheme: '🔮 赛博主题',
        neonTheme: '💡 霓虹主题',
        matrixTheme: '🟢 矩阵主题',
        toggleAnimations: '✨ 切换动画',
        editorPreferences: '📝 编辑器偏好',
        defaultFontSize: '📏 默认字体大小',
        autoSaveSettings: '💾 自动保存设置',
        titleManagement: '🔍 标题管理',
        checkDuplicateTitles: '🔍 检查重复标题',
        removeDuplicateTitles: '🗑️ 移除重复标题',
        
        // 通用消息
        confirmLeave: '确定要离开吗？未保存的更改将丢失。',
        titleExists: '⚠️ 标题已存在！创建时间:',
        overwriteWarning: '保存将覆盖现有文章。',
        overwriteConfirm: '要覆盖它吗？',
        overwriteSuccess: '✅ 文章覆盖成功！',
        exportSuccess: '✅ 文章导出成功！',
        linkCopied: '📋 文章链接已复制到剪贴板！',
        shareArticle: '📤 分享这篇文章：\n',
        
        // 统计信息
        blogStats: '📊 赛博博客统计 📊',
        totalArticles: '📝 总文章数',
        published: '📖 已发布',
        drafts: '📝 草稿',
        totalWords: '📖 总字数',
        avgWords: '📊 平均字数',
        totalTags: '🏷️ 总标签数',
        tagsLabel: '🏷️ 标签'
    },
    
    en: {
        // Common navigation
        home: '🏠 Home',
        newPost: '✍️ New Post',
        settings: '⚙️ Settings',
        
        // Index page
        searchPlaceholder: '🔍 Search articles...',
        search: 'SEARCH',
        clear: 'CLEAR',
        sortBy: 'Sort by...',
        sortDateNew: '📅 Newest First',
        sortDateOld: '📅 Oldest First',
        sortTitle: '🔤 Title A-Z',
        sortWords: '📊 Word Count',
        filterByTags: 'Filter by Tags:',
        noTagsAvailable: 'No tags available',
        noArticlesFound: 'No articles found. Create your first cyber post!',
        createNewPost: '✍️ Create New Post',
        view: '👁️ View',
        edit: '✍️ Edit',
        delete: '🗑️ Delete',
        deleteConfirm: 'Delete',
        words: 'words',
        exportAll: '📦 Export All',
        statistics: '📊 Statistics',
        
        // Editor
        editorTitle: 'Cyber Editor',
        titlePlaceholder: 'Enter article title...',
        save: '💾 Save',
        saveAsDraft: '📝 Save as Draft',
        preview: '👁️ Preview',
        backToList: '🔙 Back to List',
        titleEmpty: '❌ Title cannot be empty!',
        savedSuccessfully: '✅ Article saved successfully!',
        draftSaved: '📝 Draft saved successfully!',
        lastSaved: 'Last saved',
        never: 'Never',
        wordCount: 'Words',
        charCount: 'Characters',
        setTarget: '🎯 Set Target',
        shortcuts: '💡 Shortcuts: Ctrl+S (Save), Ctrl+D (Draft), Ctrl+P (Preview)',
        
        // Article page
        edit: '✍️ Edit',
        back: '🔙 Back to List',
        export: '📥 Export',
        share: '📤 Share',
        previous: '⬅️ Previous',
        next: '➡️ Next',
        readTime: 'Read time',
        minutes: 'minutes',
        tags: 'Tags',
        articleNotFound: 'Article Not Found',
        articleNotFoundDesc: 'The requested article could not be found.',
        
        // Settings page
        settingsTitle: 'Cyber Settings',
        dataManagement: '📊 Data Management',
        exportData: '📤 Export Data',
        importData: '📥 Import Data',
        clearAll: '🗑️ Clear All Data',
        removeDuplicates: '🔄 Remove Duplicates',
        optimizeStorage: '⚡ Optimize Storage',
        appearanceSettings: '🎨 Appearance Settings',
        cyberTheme: '🔮 Cyber Theme',
        neonTheme: '💡 Neon Theme',
        matrixTheme: '🟢 Matrix Theme',
        toggleAnimations: '✨ Toggle Animations',
        editorPreferences: '📝 Editor Preferences',
        defaultFontSize: '📏 Default Font Size',
        autoSaveSettings: '💾 Auto-save Settings',
        titleManagement: '🔍 Title Management',
        checkDuplicateTitles: '🔍 Check Duplicate Titles',
        removeDuplicateTitles: '🗑️ Remove Duplicate Titles',
        
        // Common messages
        confirmLeave: 'Are you sure you want to leave? Any unsaved changes will be lost.',
        titleExists: '⚠️ Title already exists! Created:',
        overwriteWarning: 'Saving will overwrite the existing article.',
        overwriteConfirm: 'Do you want to overwrite it?',
        overwriteSuccess: '✅ Article overwritten successfully!',
        exportSuccess: '✅ Article exported successfully!',
        linkCopied: '📋 Article link copied to clipboard!',
        shareArticle: '📤 Share this article:\n',
        
        // Statistics
        blogStats: '📊 CYBER BLOG STATISTICS 📊',
        totalArticles: '📝 Total Articles',
        published: '📖 Published',
        drafts: '📝 Drafts',
        totalWords: '📖 Total Words',
        avgWords: '📊 Average Words per Article',
        totalTags: '🏷️ Total Tags',
        tagsLabel: '🏷️ Tags'
    }
};

// 语言切换功能
let currentLang = localStorage.getItem('blog-language') || 'zh';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('blog-language', lang);
    updatePageLanguage();
}

function getCurrentLang() {
    return currentLang;
}

function t(key) {
    return languages[currentLang][key] || languages['en'][key] || key;
}

function updatePageLanguage() {
    // 更新所有带有 data-lang 属性的元素
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (element.tagName === 'INPUT' && element.type === 'text') {
            element.placeholder = t(key);
        } else {
            element.textContent = t(key);
        }
    });
    
    // 更新语言切换按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang-code') === currentLang);
    });
}

function createLanguageSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        display: flex;
        gap: 5px;
        background: rgba(0, 0, 0, 0.8);
        border: 1px solid #00ffff;
        border-radius: 8px;
        padding: 5px;
    `;
    
    switcher.innerHTML = `
        <button class="lang-btn ${currentLang === 'zh' ? 'active' : ''}" data-lang-code="zh" onclick="switchLanguage('zh')" style="background: ${currentLang === 'zh' ? '#00ffff' : 'transparent'}; color: ${currentLang === 'zh' ? '#000' : '#00ffff'}; border: 1px solid #00ffff; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 0.8rem;">中文</button>
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang-code="en" onclick="switchLanguage('en')" style="background: ${currentLang === 'en' ? '#00ffff' : 'transparent'}; color: ${currentLang === 'en' ? '#000' : '#00ffff'}; border: 1px solid #00ffff; padding: 5px 10px; border-radius: 5px; cursor: pointer; font-size: 0.8rem;">EN</button>
    `;
    
    document.body.appendChild(switcher);
}

// 页面加载时初始化语言
document.addEventListener('DOMContentLoaded', function() {
    createLanguageSwitcher();
    updatePageLanguage();
});
