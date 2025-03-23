// 游戏数据
const games = [
    {
        id: 1,
        title: "Garden Bloom",
        description: "Match colorful flowers in this relaxing puzzle game. Create beautiful garden patterns!",
        category: "Puzzle",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Garden+Bloom",
        iframeSrc: "https://www.addictinggames.com/embed/html5-games/23795",
        featured: true,
        rating: 4.5,
        plays: "1.5M"
    },
    {
        id: 2,
        title: "Bubble Tower 3D",
        description: "Aim and shoot bubbles to collapse the tower in this addictive 3D puzzle game.",
        category: "Puzzle",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Bubble+Tower+3D",
        iframeSrc: "https://wanted5games.com/games/html5/bubble-tower-3d-new-en-s-iga-cloud/index.html",
        featured: true,
        rating: 4.3,
        plays: "2.1M"
    },
    {
        id: 3,
        title: "Cannon Balls 3D",
        description: "Fire cannon balls to destroy targets in this physics-based 3D action game.",
        category: "Action",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Cannon+Balls+3D",
        iframeSrc: "https://www.gameflare.com/embed/cannon-balls-3d/",
        featured: true,
        rating: 4.7,
        plays: "1.8M"
    },
    {
        id: 4,
        title: "Tower Crash 3D",
        description: "Test your physics skills by removing blocks without toppling the tower.",
        category: "Strategy",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Tower+Crash+3D",
        iframeSrc: "https://www.gameflare.com/embed/tower-crash-3d/",
        featured: true,
        rating: 4.6,
        plays: "3.2M"
    },
    {
        id: 5,
        title: "Element Blocks",
        description: "Master the elements in this unique puzzle challenge.",
        category: "Puzzle",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Element+Blocks",
        iframeSrc: "https://www.gameflare.com/embed/element-blocks/",
        featured: false,
        rating: 4.2,
        plays: "950K"
    },
    {
        id: 6,
        title: "ZooBoom",
        description: "Match and connect animals in this colorful puzzle adventure.",
        category: "Puzzle",
        imageSrc: "https://via.placeholder.com/300x200.png?text=ZooBoom",
        iframeSrc: "https://www.gameflare.com/embed/zooboom/",
        featured: false,
        rating: 4.0,
        plays: "1.2M"
    },
    {
        id: 7,
        title: "Moto X3M Pool Party",
        description: "Race motorcycles through water-themed obstacle courses in this thrilling racing game.",
        category: "Racing",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Moto+X3M+Pool+Party",
        iframeSrc: "https://www.gameflare.com/embed/moto-x3m-pool-party/",
        featured: false,
        rating: 4.7,
        plays: "3.5M"
    },
    {
        id: 8,
        title: "Bubble Woods",
        description: "Pop colorful bubbles in this enchanting forest adventure.",
        category: "Puzzle",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Bubble+Woods",
        iframeSrc: "https://www.gameflare.com/embed/bubble-woods/",
        featured: false,
        rating: 4.1,
        plays: "760K"
    },
    {
        id: 9,
        title: "3D Free Kick",
        description: "Score amazing free kicks in this realistic 3D soccer game.",
        category: "Sports",
        imageSrc: "https://via.placeholder.com/300x200.png?text=3D+Free+Kick",
        iframeSrc: "https://www.gameflare.com/embed/3d-free-kick/",
        featured: false,
        rating: 4.3,
        plays: "2.4M"
    },
    {
        id: 10,
        title: "8 Ball Billiards Classic",
        description: "Play classic 8-ball pool with realistic physics and smooth controls.",
        category: "Sports",
        imageSrc: "https://via.placeholder.com/300x200.png?text=8+Ball+Billiards",
        iframeSrc: "https://www.gameflare.com/embed/8-ball-billiards-classic/",
        featured: false,
        rating: 4.5,
        plays: "2.9M"
    },
    {
        id: 11,
        title: "Archery World Tour",
        description: "Test your precision in this global archery competition.",
        category: "Sports",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Archery+World+Tour",
        iframeSrc: "https://www.gameflare.com/embed/archery-world-tour/",
        featured: false,
        rating: 4.0,
        plays: "1.3M"
    },
    {
        id: 12,
        title: "Totemia: Cursed Marbles",
        description: "Match and crush colorful marbles to break the ancient curse.",
        category: "Puzzle",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Totemia+Cursed+Marbles",
        iframeSrc: "https://www.gameflare.com/embed/totemia-cursed-marbles/",
        featured: false,
        rating: 4.2,
        plays: "840K"
    },
    {
        id: 13,
        title: "Table Tennis World Tour",
        description: "Compete in table tennis tournaments around the world with realistic physics.",
        category: "Sports",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Table+Tennis+World+Tour",
        iframeSrc: "https://www.gameflare.com/embed/table-tennis-world-tour/",
        featured: false,
        rating: 4.4,
        plays: "2.0M"
    },
    {
        id: 14,
        title: "Onet Connect Classic",
        description: "Match identical tiles to clear the board in this relaxing puzzle game.",
        category: "Puzzle",
        imageSrc: "https://via.placeholder.com/300x200.png?text=Onet+Connect+Classic",
        iframeSrc: "https://www.gameflare.com/embed/onet-connect-classic/",
        featured: false,
        rating: 4.3,
        plays: "1.8M"
    }
];

// 初始化应用
function init() {
    console.log('初始化应用...');
    
    // 移除加载指示器
    const loadingIndicator = document.getElementById('games-loading');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
    
    // 初始化各个模块
    renderFeaturedGames();
    renderAllGames();
    setupThemeToggle();
    setupGameModal();
    setupSlideControls();
    setupCategoryFilters();
    setupSearch();
    
    console.log('初始化完成!');
}

// 渲染精选游戏
function renderFeaturedGames() {
    console.log('渲染精选游戏...');
    const container = document.getElementById('featured-games');
    if (!container) {
        console.error('找不到精选游戏容器');
        return;
    }
    
    const featuredGames = games.filter(game => game.featured);
    console.log(`找到${featuredGames.length}个精选游戏`);
    
    // 清空容器
    container.innerHTML = '';
    
    featuredGames.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = 'featured-game w-full md:w-full flex-shrink-0';
        gameElement.dataset.gameId = game.id;
        
        // 生成星星HTML
        const stars = generateRatingStars(game.rating);
        
        gameElement.innerHTML = `
            <div class="featured-game-content">
                <div class="game-category featured-category">${game.category}</div>
                <img src="${game.imageSrc}" alt="${game.title}" class="w-full h-full object-cover">
                <div class="featured-game-info">
                    <h3 class="text-xl font-bold mb-1">${game.title}</h3>
                    <p class="text-gray-300 mb-2">${game.description}</p>
                    <div class="featured-game-footer">
                        <div class="featured-rating">
                            <div class="rating-stars">${stars}</div>
                            <span class="game-plays">${game.plays} Plays</span>
                        </div>
                        <button class="play-now-btn bg-white text-black px-4 py-2 rounded-md font-medium">Play Now</button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(gameElement);
        
        // 添加点击事件
        const playButton = gameElement.querySelector('.play-now-btn');
        playButton.addEventListener('click', () => openGameModal(game));
    });
    
    console.log('精选游戏渲染完成');
}

// 渲染所有游戏
function renderAllGames() {
    console.log('渲染所有游戏...');
    const container = document.getElementById('all-games');
    if (!container) {
        console.error('找不到all-games容器');
        return;
    }
    
    console.log(`将渲染${games.length}个游戏卡片`);
    
    // 清除除加载指示器外的所有内容
    const loadingIndicator = document.getElementById('games-loading');
    let children = Array.from(container.children);
    children.forEach(child => {
        if (child !== loadingIndicator) {
            child.remove();
        }
    });
    
    // 创建游戏卡片
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.dataset.gameId = game.id;
        gameCard.dataset.category = game.category.toLowerCase();
        
        // 生成星星HTML
        const stars = generateRatingStars(game.rating);
        
        gameCard.innerHTML = `
            <div class="game-category">${game.category}</div>
            <img src="${game.imageSrc}" alt="${game.title}" class="game-image">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <div class="game-card-footer">
                    <div class="game-rating">
                        <div class="rating-stars">${stars}</div>
                        <span class="game-plays">${game.plays} Plays</span>
                    </div>
                    <a href="#" class="play-now-btn">Play Now</a>
                </div>
            </div>
        `;
        
        // 添加点击事件
        const playButton = gameCard.querySelector('.play-now-btn');
        playButton.addEventListener('click', (e) => {
            e.preventDefault();
            openGameModal(game);
        });
        
        container.appendChild(gameCard);
    });
    
    console.log('所有游戏渲染完成');
}

// 生成星星评分
function generateRatingStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // 添加实心星星
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // 添加半星
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // 添加空星
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

// 设置主题切换
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) {
        console.error('找不到主题切换按钮');
        return;
    }
    
    // 检查用户是否已设置偏好
    const savedTheme = localStorage.getItem('theme');
    
    // 如果用户没有设置偏好，则检查系统偏好
    if (!savedTheme) {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (!prefersDarkScheme) {
            document.body.classList.add('light-theme');
            themeToggle.classList.add('dark');
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    } else if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.classList.add('dark');
    }
    
    themeToggle.addEventListener('click', function() {
        // 切换按钮样式
        this.classList.toggle('dark');
        
        // 切换主题
        const isLightTheme = document.body.classList.toggle('light-theme');
        
        // 保存用户偏好
        localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
        
        console.log(`主题已切换为: ${isLightTheme ? '亮色' : '暗色'}`);
    });
}

// 设置游戏模态框
function setupGameModal() {
    const closeModal = document.getElementById('close-modal');
    const gameModal = document.getElementById('game-modal');
    
    if (!closeModal || !gameModal) {
        console.error('模态框元素缺失');
        return;
    }
    
    closeModal.addEventListener('click', function() {
        gameModal.classList.remove('active');
        gameModal.classList.add('hidden');
        
        // 停止iframe内容加载
        const gameFrame = document.getElementById('game-frame');
        if (gameFrame) {
            gameFrame.src = '';
        }
    });
}

// 打开游戏模态框
function openGameModal(game) {
    console.log(`打开游戏: ${game.title}`);
    const gameModal = document.getElementById('game-modal');
    const modalTitle = document.getElementById('modal-game-title');
    const gameFrame = document.getElementById('game-frame');
    
    if (!gameModal || !modalTitle || !gameFrame) {
        console.error('模态框元素缺失');
        return;
    }
    
    modalTitle.textContent = game.title;
    gameFrame.src = game.iframeSrc;
    
    gameModal.classList.remove('hidden');
    gameModal.classList.add('active');
}

// 设置轮播控制
function setupSlideControls() {
    const prevSlide = document.getElementById('prev-slide');
    const nextSlide = document.getElementById('next-slide');
    const featuredGames = document.getElementById('featured-games');
    const indicators = document.querySelectorAll('#slide-indicators button');
    
    if (!prevSlide || !nextSlide || !featuredGames || !indicators.length) {
        console.error('轮播控制元素缺失');
        return;
    }
    
    let currentSlide = 0;
    const slideCount = document.querySelectorAll('.featured-game').length;
    console.log(`轮播设置: ${slideCount}张幻灯片`);
    
    // 更新指示器状态
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.remove('bg-gray-600');
                indicator.classList.add('bg-white');
            } else {
                indicator.classList.remove('bg-white');
                indicator.classList.add('bg-gray-600');
            }
        });
    }
    
    // 切换到指定幻灯片
    function goToSlide(index) {
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        
        currentSlide = index;
        featuredGames.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateIndicators();
    }
    
    // 上一张
    prevSlide.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    // 下一张
    nextSlide.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    // 指示器点击
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // 自动轮播
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
    
    // 初始化指示器
    updateIndicators();
}

// 设置类别筛选
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.game-filter button');
    const gameCards = document.querySelectorAll('.game-card');
    
    if (!filterButtons.length || !gameCards.length) {
        console.error('筛选按钮或游戏卡片缺失');
        return;
    }
    
    console.log(`设置${filterButtons.length}个筛选按钮`);
    
    // 存储当前激活的筛选器
    window.activeFilter = 'all';
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(`筛选: ${this.textContent}`);
            
            // 更新按钮样式
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-gray-800', 'text-white');
                btn.classList.add('text-gray-400');
            });
            
            this.classList.remove('text-gray-400');
            this.classList.add('bg-gray-800', 'text-white');
            
            // 记录当前过滤器
            window.activeFilter = this.textContent.toLowerCase();
            
            // 获取当前搜索词
            const searchDesktop = document.getElementById('search-input');
            const searchMobile = document.getElementById('mobile-search-input');
            const currentSearch = (searchDesktop && searchDesktop.value.trim()) || 
                                 (searchMobile && searchMobile.value.trim()) || 
                                 '';
            
            // 结合搜索词和类别进行过滤
            filterGames(window.activeFilter, currentSearch);
        });
    });
}

// 根据类别和搜索词过滤游戏
function filterGames(category, searchQuery = '') {
    console.log(`过滤游戏: 类别=${category}, 搜索=${searchQuery}`);
    const gameCards = document.querySelectorAll('.game-card');
    const noSearchResults = document.getElementById('no-search-results');
    let matchCount = 0;
    
    gameCards.forEach(card => {
        const gameCategory = card.dataset.category;
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.game-description').textContent.toLowerCase();
        
        // 重置之前的高亮
        if (searchQuery) {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('.game-description');
            if (titleEl) titleEl.innerHTML = titleEl.textContent;
            if (descEl) descEl.innerHTML = descEl.textContent;
        }
        
        // 检查类别匹配
        const categoryMatch = category === 'all' || gameCategory === category;
        
        // 检查搜索匹配
        const searchMatch = !searchQuery || 
            title.includes(searchQuery.toLowerCase()) || 
            description.includes(searchQuery.toLowerCase()) ||
            gameCategory.includes(searchQuery.toLowerCase());
        
        if (categoryMatch && searchMatch) {
            matchCount++;
            card.style.display = '';
            
            // 如果有搜索词，高亮匹配的文本
            if (searchQuery) {
                highlightText(card.querySelector('h3'), searchQuery);
                highlightText(card.querySelector('.game-description'), searchQuery);
            }
        } else {
            card.style.display = 'none';
        }
    });
    
    // 显示无结果提示
    if (noSearchResults) {
        if (matchCount === 0) {
            noSearchResults.classList.remove('hidden');
        } else {
            noSearchResults.classList.add('hidden');
        }
    }
    
    return matchCount;
}

// 设置搜索功能
function setupSearch() {
    console.log('设置搜索功能...');
    const searchInput = document.getElementById('search-input');
    const mobileSearchInput = document.getElementById('mobile-search-input');
    const mobileSearchButton = document.getElementById('mobile-search-button');
    const mobileSearch = document.getElementById('mobile-search');
    const noSearchResults = document.getElementById('no-search-results');
    
    if (!searchInput || !mobileSearchInput || !mobileSearchButton || !mobileSearch || !noSearchResults) {
        console.error('搜索元素缺失');
        return;
    }
    
    // 移动设备搜索框切换
    mobileSearchButton.addEventListener('click', function() {
        mobileSearch.classList.toggle('show');
        if (mobileSearch.classList.contains('show')) {
            setTimeout(() => mobileSearchInput.focus(), 300);
        }
    });
    
    // 桌面搜索处理
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        // 同步两个搜索框
        mobileSearchInput.value = query;
        // 使用当前激活的筛选器
        filterGames(window.activeFilter || 'all', query);
    });
    
    // 移动设备搜索处理
    mobileSearchInput.addEventListener('input', function() {
        const query = this.value.trim();
        // 同步两个搜索框
        searchInput.value = query;
        // 使用当前激活的筛选器
        filterGames(window.activeFilter || 'all', query);
    });
    
    console.log('搜索功能设置完成');
}

// 高亮匹配的文本
function highlightText(element, query) {
    if (!element) return;
    
    const text = element.textContent;
    const queryLower = query.toLowerCase();
    const textLower = text.toLowerCase();
    
    if (!textLower.includes(queryLower)) return;
    
    let html = '';
    let lastIndex = 0;
    
    // 查找所有匹配项并高亮
    let startIndex = textLower.indexOf(queryLower);
    while (startIndex !== -1) {
        // 添加前面的文本
        html += text.substring(lastIndex, startIndex);
        
        // 添加高亮的匹配文本
        html += `<span class="search-highlight">${text.substring(startIndex, startIndex + query.length)}</span>`;
        
        // 更新索引
        lastIndex = startIndex + query.length;
        startIndex = textLower.indexOf(queryLower, lastIndex);
    }
    
    // 添加剩余的文本
    html += text.substring(lastIndex);
    
    element.innerHTML = html;
}

// 当DOM内容加载完成时初始化应用
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM内容已加载完成');
    // 延迟100毫秒加载，确保DOM已完全准备好
    setTimeout(init, 100);
}); 