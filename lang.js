// 语言配置
const languages = {
    zh: {
        // 通用导航
        home: '🏠 首页',
        newPost: '✍️ 新文章',
        archive: '📚 归档',
        about: '👤 关于',
        settings: '⚙️ 设置',
        
        // 首页
        searchPlaceholder: '🔍 搜索文章...',
        search: '搜索',
        clear: '清除',
        advancedSearch: '🔧 高级搜索',
        sortBy: '排序方式...',
        sortDateNew: '📅 最新优先',
        sortDateOld: '📅 最旧优先',
        sortTitle: '🔤 标题 A-Z',
        sortWords: '📊 字数',
        sortRelevance: '🎯 相关性',

        // 高级搜索
        searchScope: '搜索范围：',
        searchTitle: '标题',
        searchContent: '内容',
        searchTags: '标签',
        timeRange: '时间范围：',
        allTime: '全部时间',
        lastWeek: '最近一周',
        lastMonth: '最近一月',
        lastYear: '最近一年',
        wordRange: '字数范围：',
        minWords: '最少字数',
        maxWords: '最多字数',
        searchHistory: '🕒 搜索历史',
        hotSearches: '🔥 热门搜索',
        noSearchHistory: '暂无搜索历史',
        noHotSearches: '暂无热门搜索',
        allCategories: '全部分类',
        filterByTags: '按标签筛选:',

        // 分类管理
        categoryManagement: '📁 分类管理',
        selectCategory: '选择分类...',
        addCategory: '添加分类',
        editCategory: '编辑分类',
        deleteCategory: '删除分类',
        categoryName: '分类名称',
        categoryDescription: '分类描述',
        categoryExists: '分类名称已存在！',
        categoryAddSuccess: '分类添加成功！',
        categoryDeleteConfirm: '确定要删除这个分类吗？删除后该分类下的文章将变为未分类。',
        categoryDeleteSuccess: '分类删除成功！',
        noCategory: '未分类',
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

        // 关于页面
        aboutPageTitle: '关于我',
        aboutPageSubtitle: '// Profile • Experience • Contact',
        profileName: 'Cyber Blogger',
        profileTitle: '// Full Stack Developer • Tech Enthusiast • Digital Creator',
        profileBio: '欢迎来到我的赛博空间！我是一名热爱技术的开发者，专注于创造有意义的数字体验。在这里，我分享我的技术见解、项目经验和对未来科技的思考。',
        contactEmail: '联系邮箱',
        skillsTitle: '💻 技能专长',
        experienceTitle: '🚀 经历时间线',
        blogStatsTitle: '📊 博客统计',
        interestsTitle: '🎯 兴趣爱好',
        contactTitle: '📬 联系方式',
        totalArticles: '文章总数',
        totalWords: '总字数',
        totalTags: '标签数量',
        totalCategories: '分类数量',
        runningDays: '运行天数',
        averageWords: '平均字数',

        // 归档页面
        archivePageTitle: '文章归档',
        archivePageSubtitle: '// Archive • Timeline • Statistics',
        timelineView: '📅 时间线',
        categoryView: '📁 分类',
        tagsView: '🏷️ 标签',
        statsView: '📊 统计',
        timelineArchive: '📅 时间线归档',
        categoryArchive: '📁 分类归档',
        tagsArchive: '🏷️ 标签归档',
        blogStatistics: '📊 博客统计',
        yearlyStats: '📅 年度统计',
        categoryStats: '📁 分类统计',
        noTagsFound: '暂无标签',
        noTagsDesc: '为您的文章添加标签来更好地组织内容！',
        articlesCount: '篇文章',

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
        tagManagement: '🏷️ 标签管理',
        addTagPlaceholder: '添加标签...',
        addTag: '添加',
        shortcuts: '💡 快捷键: Ctrl+S (保存), Ctrl+D (草稿), Ctrl+P (预览)',
        
        // 文章页面
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

        // 评论系统
        comments: '💬 评论',
        commentAuthorPlaceholder: '昵称 (可选)',
        commentEmailPlaceholder: '邮箱 (可选)',
        commentContentPlaceholder: '写下你的想法...',
        submitComment: '💬 发表评论',
        replyComment: '💬 回复',
        likeComment: '👍 点赞',
        deleteComment: '🗑️ 删除',
        commentSuccess: '✅ 评论发表成功！',
        replySuccess: '✅ 回复发表成功！',
        commentDeleted: '评论已删除',
        commentEmpty: '请输入评论内容！',
        commentTooLong: '评论内容不能超过500字符！',
        deleteCommentConfirm: '确定要删除这条评论吗？',
        noComments: '暂无评论，来发表第一条评论吧！',
        anonymous: '匿名用户',
        justNow: '刚刚',
        minutesAgo: '分钟前',
        hoursAgo: '小时前',
        daysAgo: '天前',

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
        tagsLabel: '🏷️ 标签',
        
        // 缺失的翻译
        emptyState: '暂无文章',
        emptyStateDesc: '开始创建您的第一篇赛博文章吧！',
        deleteArticleConfirm: '确定要删除这篇文章吗？',
        exportAllSuccess: '✅ 文章导出成功！',
        blogStatsAlert: '📊 博客统计\n\n文章总数: {total}\n总字数: {words}\n平均字数: {avg}',
        dangerZone: '⚠️ 危险区域',
        dangerZoneDesc: '谨慎操作！这些操作可能会永久删除您的数据。',
        resetSettings: '🔄 重置设置',
        factoryReset: '⚠️ 恢复出厂设置',
        backToBlog: '🔙 返回博客',
        readHistory: '👁️ 阅读记录',
        backupData: '💾 备份数据',
        showBackups: '📋 查看备份',
        validateData: '🔍 验证数据',
        repairData: '🔧 修复数据',
        systemInfo: '🖥️ 系统信息',
        cleanHistory: '🗑️ 清空历史',

        // 标签管理
        tagEmpty: '标签不能为空',
        tagTooLong: '标签长度不能超过20个字符',
        tagInvalidChars: '标签只能包含字母、数字、中文、下划线和连字符',
        tagLimitReached: '最多只能添加10个标签',
        tagExists: '标签已存在',

        // 文章页面
        articleNotFound: '文章未找到',
        articleNotFoundDesc: '抱歉，找不到这篇文章。可能已被删除或索引错误。',
        noRelatedArticles: '暂无相关文章',
        noTags: '暂无标签',

        // 设置页面消息
        noDuplicatesFound: '✅ 未发现重复标题',
        optimizeComplete: '✅ 优化完成，移除了 {count} 个重复文章。',
        optimizeNoChange: 'ℹ️ 未发现重复文章，存储已优化。',
        setFontSizePrompt: '设置默认字体大小 (12-24px):',
        fontSizeSet: '✅ 默认字体大小已设置为 {size}px',
        fontSizeInvalid: '❌ 请输入12-24之间的数字',
        autoSaveEnabled: '✅ 自动保存已开启',
        autoSaveDisabled: '✅ 自动保存已关闭',

        // 悬停提示翻译
        tooltips: {
            // 通用提示
            homeTooltip: '返回博客首页',
            newPostTooltip: '创建一篇新的博客文章',
            settingsTooltip: '打开设置页面',

            // 首页提示
            searchTooltip: '输入关键词搜索文章标题和内容',
            searchBtnTooltip: '执行搜索操作',
            clearBtnTooltip: '清除搜索条件，显示所有文章',
            sortTooltip: '选择文章排序方式',
            viewTooltip: '点击查看完整文章',
            editTooltip: '编辑这篇文章',
            deleteTooltip: '删除这篇文章',
            tagTooltip: '点击搜索此标签',
            exportAllTooltip: '将所有文章导出为JSON文件',
            statisticsTooltip: '查看博客统计信息',

            // 编辑器提示
            titleTooltip: '输入文章标题，不能为空',
            saveTooltip: '保存文章并发布',
            draftTooltip: '保存为草稿，不发布',
            previewTooltip: '在新窗口预览文章效果',
            backToListTooltip: '返回文章列表',
            setTargetTooltip: '设置写作字数目标',
            addTagTooltip: '添加新标签',
            tagInputTooltip: '输入标签名称，最多20个字符',
            removeTagTooltip: '点击移除标签',
            addTagFromSuggestedTooltip: '点击添加此标签',

            // 文章页面提示
            backTooltip: '返回文章列表',
            editArticleTooltip: '编辑当前文章',
            exportArticleTooltip: '导出当前文章为文件',
            shareTooltip: '分享文章链接',
            fontSizePlusTooltip: '增大文章字体',
            fontSizeMinusTooltip: '减小文章字体',

            // 设置页面提示
            exportDataTooltip: '导出所有博客数据为JSON文件',
            importDataTooltip: '从JSON文件导入博客数据',
            backupTooltip: '创建当前数据的备份',
            showBackupsTooltip: '查看所有备份记录',
            defaultFontSizeTooltip: '设置编辑器默认字体大小',
            autoSaveTooltip: '开启或关闭自动保存功能',
            exportTemplateTooltip: '导出文章模板',
            importTemplateTooltip: '导入文章模板',
            refreshStatsTooltip: '刷新统计数据',
            exportStatsTooltip: '导出统计数据',
            validateDataTooltip: '检查数据完整性',
            repairDataTooltip: '修复损坏的数据',
            systemInfoTooltip: '查看系统和浏览器信息',
            cleanHistoryTooltip: '清空所有阅读历史记录',
            checkDuplicateTooltip: '检查是否有重复的文章标题',
            removeDuplicateTooltip: '自动移除重复的文章标题',
            optimizeStorageTooltip: '优化本地存储空间',
            clearAllTooltip: '删除所有文章和数据，不可恢复',
            resetSettingsTooltip: '重置所有设置为默认值',
            factoryResetTooltip: '恢复出厂设置，删除所有数据'
        }
    },
    
    en: {
        // Common navigation
        home: '🏠 Home',
        newPost: '✍️ New Post',
        archive: '📚 Archive',
        about: '👤 About',
        settings: '⚙️ Settings',
        
        // Index page
        searchPlaceholder: '🔍 Search articles...',
        search: 'SEARCH',
        clear: 'CLEAR',
        advancedSearch: '🔧 Advanced Search',
        sortBy: 'Sort by...',
        sortDateNew: '📅 Newest First',
        sortDateOld: '📅 Oldest First',
        sortTitle: '🔤 Title A-Z',
        sortWords: '📊 Word Count',
        sortRelevance: '🎯 Relevance',

        // Advanced search
        searchScope: 'Search Scope:',
        searchTitle: 'Title',
        searchContent: 'Content',
        searchTags: 'Tags',
        timeRange: 'Time Range:',
        allTime: 'All Time',
        lastWeek: 'Last Week',
        lastMonth: 'Last Month',
        lastYear: 'Last Year',
        wordRange: 'Word Range:',
        minWords: 'Min Words',
        maxWords: 'Max Words',
        searchHistory: '🕒 Search History',
        hotSearches: '🔥 Hot Searches',
        noSearchHistory: 'No search history',
        noHotSearches: 'No hot searches',
        allCategories: 'All Categories',
        filterByTags: 'Filter by Tags:',

        // Category management
        categoryManagement: '📁 Category Management',
        selectCategory: 'Select Category...',
        addCategory: 'Add Category',
        editCategory: 'Edit Category',
        deleteCategory: 'Delete Category',
        categoryName: 'Category Name',
        categoryDescription: 'Category Description',
        categoryExists: 'Category name already exists!',
        categoryAddSuccess: 'Category added successfully!',
        categoryDeleteConfirm: 'Are you sure you want to delete this category? Articles in this category will become uncategorized.',
        categoryDeleteSuccess: 'Category deleted successfully!',
        noCategory: 'Uncategorized',
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

        // About page
        aboutPageTitle: 'About Me',
        aboutPageSubtitle: '// Profile • Experience • Contact',
        profileName: 'Cyber Blogger',
        profileTitle: '// Full Stack Developer • Tech Enthusiast • Digital Creator',
        profileBio: 'Welcome to my cyber space! I am a technology-loving developer focused on creating meaningful digital experiences. Here, I share my technical insights, project experiences, and thoughts on future technology.',
        contactEmail: 'Contact Email',
        skillsTitle: '💻 Skills & Expertise',
        experienceTitle: '🚀 Experience Timeline',
        blogStatsTitle: '📊 Blog Statistics',
        interestsTitle: '🎯 Interests & Hobbies',
        contactTitle: '📬 Contact Information',
        totalArticles: 'Total Articles',
        totalWords: 'Total Words',
        totalTags: 'Total Tags',
        totalCategories: 'Total Categories',
        runningDays: 'Running Days',
        averageWords: 'Average Words',

        // Archive page
        archivePageTitle: 'Article Archive',
        archivePageSubtitle: '// Archive • Timeline • Statistics',
        timelineView: '📅 Timeline',
        categoryView: '📁 Category',
        tagsView: '🏷️ Tags',
        statsView: '📊 Statistics',
        timelineArchive: '📅 Timeline Archive',
        categoryArchive: '📁 Category Archive',
        tagsArchive: '🏷️ Tags Archive',
        blogStatistics: '📊 Blog Statistics',
        yearlyStats: '📅 Yearly Statistics',
        categoryStats: '📁 Category Statistics',
        noTagsFound: 'No tags found',
        noTagsDesc: 'Add tags to your articles to better organize content!',
        articlesCount: 'articles',

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
        tagManagement: '🏷️ Tag Management',
        addTagPlaceholder: 'Add tag...',
        addTag: 'Add',
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

        // Comment system
        comments: '💬 Comments',
        commentAuthorPlaceholder: 'Name (optional)',
        commentEmailPlaceholder: 'Email (optional)',
        commentContentPlaceholder: 'Share your thoughts...',
        submitComment: '💬 Post Comment',
        replyComment: '💬 Reply',
        likeComment: '👍 Like',
        deleteComment: '🗑️ Delete',
        commentSuccess: '✅ Comment posted successfully!',
        replySuccess: '✅ Reply posted successfully!',
        commentDeleted: 'Comment deleted',
        commentEmpty: 'Please enter comment content!',
        commentTooLong: 'Comment cannot exceed 500 characters!',
        deleteCommentConfirm: 'Are you sure you want to delete this comment?',
        noComments: 'No comments yet. Be the first to comment!',
        anonymous: 'Anonymous',
        justNow: 'just now',
        minutesAgo: 'minutes ago',
        hoursAgo: 'hours ago',
        daysAgo: 'days ago',

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
        tagsLabel: '🏷️ Tags',
        
        // Missing translations
        emptyState: 'No Articles',
        emptyStateDesc: 'Start creating your first cyber article!',
        deleteArticleConfirm: 'Are you sure you want to delete this article?',
        exportAllSuccess: '✅ Articles exported successfully!',
        blogStatsAlert: '📊 Blog Statistics\n\nTotal Articles: {total}\nTotal Words: {words}\nAverage Words: {avg}',
        dangerZone: '⚠️ Danger Zone',
        dangerZoneDesc: 'Proceed with caution! These operations may permanently delete your data.',
        resetSettings: '🔄 Reset Settings',
        factoryReset: '⚠️ Factory Reset',
        backToBlog: '🔙 Back to Blog',
        readHistory: '👁️ Read History',
        backupData: '💾 Backup Data',
        showBackups: '📋 View Backups',
        validateData: '🔍 Validate Data',
        repairData: '🔧 Repair Data',
        systemInfo: '🖥️ System Info',
        cleanHistory: '🗑️ Clean History',

        // Tag management
        tagEmpty: 'Tag cannot be empty',
        tagTooLong: 'Tag length cannot exceed 20 characters',
        tagInvalidChars: 'Tags can only contain letters, numbers, Chinese characters, underscores and hyphens',
        tagLimitReached: 'Maximum 10 tags allowed',
        tagExists: 'Tag already exists',

        // Article page
        articleNotFound: 'Article Not Found',
        articleNotFoundDesc: 'Sorry, this article could not be found. It may have been deleted or the index is incorrect.',
        noRelatedArticles: 'No related articles',
        noTags: 'No tags',

        // Settings page messages
        noDuplicatesFound: '✅ No duplicate titles found',
        optimizeComplete: '✅ Optimization complete, removed {count} duplicate articles.',
        optimizeNoChange: 'ℹ️ No duplicate articles found, storage optimized.',
        setFontSizePrompt: 'Set default font size (12-24px):',
        fontSizeSet: '✅ Default font size set to {size}px',
        fontSizeInvalid: '❌ Please enter a number between 12-24',
        autoSaveEnabled: '✅ Auto-save enabled',
        autoSaveDisabled: '✅ Auto-save disabled',

        // Tooltip translations
        tooltips: {
            // Common tooltips
            homeTooltip: 'Return to blog homepage',
            newPostTooltip: 'Create a new blog post',
            settingsTooltip: 'Open settings page',

            // Index page tooltips
            searchTooltip: 'Enter keywords to search article titles and content',
            searchBtnTooltip: 'Execute search operation',
            clearBtnTooltip: 'Clear search criteria and show all articles',
            sortTooltip: 'Select article sorting method',
            viewTooltip: 'Click to view full article',
            editTooltip: 'Edit this article',
            deleteTooltip: 'Delete this article',
            tagTooltip: 'Click to search this tag',
            exportAllTooltip: 'Export all articles as JSON file',
            statisticsTooltip: 'View blog statistics',

            // Editor tooltips
            titleTooltip: 'Enter article title, cannot be empty',
            saveTooltip: 'Save article and publish',
            draftTooltip: 'Save as draft, do not publish',
            previewTooltip: 'Preview article in new window',
            backToListTooltip: 'Return to article list',
            setTargetTooltip: 'Set writing word count target',
            addTagTooltip: 'Add new tag',
            tagInputTooltip: 'Enter tag name, maximum 20 characters',
            removeTagTooltip: 'Click to remove tag',
            addTagFromSuggestedTooltip: 'Click to add this tag',

            // Article page tooltips
            backTooltip: 'Return to article list',
            editArticleTooltip: 'Edit current article',
            exportArticleTooltip: 'Export current article as file',
            shareTooltip: 'Share article link',
            fontSizePlusTooltip: 'Increase article font size',
            fontSizeMinusTooltip: 'Decrease article font size',

            // Settings page tooltips
            exportDataTooltip: 'Export all blog data as JSON file',
            importDataTooltip: 'Import blog data from JSON file',
            backupTooltip: 'Create backup of current data',
            showBackupsTooltip: 'View all backup records',
            defaultFontSizeTooltip: 'Set editor default font size',
            autoSaveTooltip: 'Enable or disable auto-save function',
            exportTemplateTooltip: 'Export article templates',
            importTemplateTooltip: 'Import article templates',
            refreshStatsTooltip: 'Refresh statistics data',
            exportStatsTooltip: 'Export statistics data',
            validateDataTooltip: 'Check data integrity',
            repairDataTooltip: 'Repair corrupted data',
            systemInfoTooltip: 'View system and browser information',
            cleanHistoryTooltip: 'Clear all reading history records',
            checkDuplicateTooltip: 'Check for duplicate article titles',
            removeDuplicateTooltip: 'Automatically remove duplicate titles',
            optimizeStorageTooltip: 'Optimize local storage space',
            clearAllTooltip: 'Delete all articles and data, irreversible',
            resetSettingsTooltip: 'Reset all settings to default values',
            factoryResetTooltip: 'Factory reset, delete all data'
        }
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

    // 更新所有带有 data-tooltip 属性的元素的 title
    document.querySelectorAll('[data-tooltip]').forEach(element => {
        const tooltipKey = element.getAttribute('data-tooltip');
        const tooltipText = languages[currentLang].tooltips[tooltipKey] || languages['en'].tooltips[tooltipKey] || '';
        if (tooltipText) {
            element.title = tooltipText;
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
