// 游戏数据
const games = [
    {
        id: 1,
        title: "Garden Bloom",
        description: "Match colorful flowers in this relaxing puzzle game. Create beautiful garden patterns!",
        category: "Puzzle",
        imageSrc: "https://i.ibb.co/02bJM8N/garden-bloom.jpg",
        iframeSrc: "https://html5.gamemondi.com/d6187a5f5fe849ddb0eb6f7534621b89/?gd_sdk_referrer_url=https://gamedistribution.com/games/garden-bloom",
        featured: true,
        rating: 4.5,
        plays: "1.5M"
    },
    {
        id: 2,
        title: "Bubble Tower 3D",
        description: "Aim and shoot bubbles to collapse the tower in this addictive 3D puzzle game.",
        category: "Puzzle",
        imageSrc: "https://i.ibb.co/MhKg1V5/bubble-tower-3d.jpg",
        iframeSrc: "https://html5.gamemondi.com/d1d6a8d1447f44a387dad4249ba07c44/?gd_sdk_referrer_url=https://gamedistribution.com/games/bubble-tower-3d",
        featured: true,
        rating: 4.3,
        plays: "2.1M"
    },
    {
        id: 3,
        title: "Cannon Balls 3D",
        description: "Fire cannon balls to destroy targets in this physics-based 3D action game.",
        category: "Action",
        imageSrc: "https://i.ibb.co/Px5DTkb/cannon-balls-3d.jpg",
        iframeSrc: "https://html5.gamemondi.com/bb7722e59a9e49dd9c11a0a50e6b69c3/?gd_sdk_referrer_url=https://gamedistribution.com/games/cannon-balls-3d",
        featured: true,
        rating: 4.7,
        plays: "1.8M"
    },
    {
        id: 4,
        title: "Tower Crash 3D",
        description: "Test your physics skills by removing blocks without toppling the tower.",
        category: "Strategy",
        imageSrc: "https://i.ibb.co/zbDQdFt/tower-crash-3d.jpg",
        iframeSrc: "https://html5.gamemondi.com/4603fe3a3fee4688a3fa3e61bfc4a6fd/?gd_sdk_referrer_url=https://gamedistribution.com/games/tower-crash-3d",
        featured: true,
        rating: 4.6,
        plays: "3.2M"
    },
    {
        id: 5,
        title: "Element Blocks",
        description: "Master the elements in this unique puzzle challenge.",
        category: "Puzzle",
        imageSrc: "https://i.ibb.co/51Nvk2J/element-blocks.jpg",
        iframeSrc: "https://html5.gamemondi.com/21a108c901704aa69dd6f5ab10f9c1e4/?gd_sdk_referrer_url=https://gamedistribution.com/games/element-blocks",
        featured: false,
        rating: 4.2,
        plays: "950K"
    },
    {
        id: 6,
        title: "ZooBoom",
        description: "Match and connect animals in this colorful puzzle adventure.",
        category: "Puzzle",
        imageSrc: "https://i.ibb.co/sWx6tHp/zooboom.jpg",
        iframeSrc: "https://html5.gamemondi.com/0eba31e67953402c96da3aa6c5ceb2ca/?gd_sdk_referrer_url=https://gamedistribution.com/games/zooboom",
        featured: false,
        rating: 4.0,
        plays: "1.2M"
    },
    {
        id: 7,
        title: "Moto X3M Pool Party",
        description: "Race motorcycles through water-themed obstacle courses in this thrilling racing game.",
        category: "Racing",
        imageSrc: "https://i.ibb.co/vw1KrLT/moto-x3m.jpg",
        iframeSrc: "https://html5.gamemondi.com/99aca2cbed4f4b2583216cbb4ad51c97/?gd_sdk_referrer_url=https://gamedistribution.com/games/moto-x3m-pool-party",
        featured: false,
        rating: 4.7,
        plays: "3.5M"
    },
    {
        id: 8,
        title: "Bubble Woods",
        description: "Pop colorful bubbles in this enchanting forest adventure.",
        category: "Puzzle",
        imageSrc: "https://i.ibb.co/jHPR6Rn/bubble-woods.jpg",
        iframeSrc: "https://html5.gamemondi.com/3c3c196eff40482f9bd3534ae94ca40e/?gd_sdk_referrer_url=https://gamedistribution.com/games/bubble-woods",
        featured: false,
        rating: 4.1,
        plays: "760K"
    },
    {
        id: 9,
        title: "3D Free Kick",
        description: "Score amazing free kicks in this realistic 3D soccer game.",
        category: "Sports",
        imageSrc: "https://i.ibb.co/N1WFd34/3d-free-kick.jpg",
        iframeSrc: "https://html5.gamemondi.com/e08564d11913424eb273d5d4bd53853d/?gd_sdk_referrer_url=https://gamedistribution.com/games/3d-free-kick",
        featured: false,
        rating: 4.3,
        plays: "2.4M"
    },
    {
        id: 10,
        title: "8 Ball Billiards",
        description: "Play classic 8-ball billiards against challenging opponents.",
        category: "Sports",
        imageSrc: "https://i.ibb.co/wpNFw0B/8-ball-billiards.jpg",
        iframeSrc: "https://html5.gamemondi.com/2a51824be19f446db3bc5c91983a0f8c/?gd_sdk_referrer_url=https://gamedistribution.com/games/8-ball-billiards-classic",
        featured: false,
        rating: 4.4,
        plays: "4.2M"
    },
    {
        id: 11,
        title: "Archery World Tour",
        description: "Test your archery skills in locations around the globe.",
        category: "Sports",
        imageSrc: "https://i.ibb.co/PWJ9n3M/archery-world-tour.jpg",
        iframeSrc: "https://html5.gamemondi.com/b2fd5df9f41e44a7be71edafe2d986fa/?gd_sdk_referrer_url=https://gamedistribution.com/games/archery-world-tour",
        featured: false,
        rating: 4.3,
        plays: "1.6M"
    },
    {
        id: 12,
        title: "Totemia Cursed Marbles",
        description: "Match and shoot marbles to break the ancient curse.",
        category: "Puzzle",
        imageSrc: "https://i.ibb.co/Vt3XcXw/totemia-cursed-marbles.jpg",
        iframeSrc: "https://html5.gamemondi.com/b5eb56f1ed2049639747e8ed9a1e783c/?gd_sdk_referrer_url=https://gamedistribution.com/games/totemia-cursed-marbles",
        featured: false,
        rating: 4.1,
        plays: "820K"
    },
    {
        id: 13,
        title: "Table Tennis World Tour",
        description: "Compete in table tennis tournaments around the world with realistic physics.",
        category: "Sports",
        imageSrc: "https://i.ibb.co/ZWSdSc4/table-tennis.jpg",
        iframeSrc: "https://html5.gamemondi.com/9a4a9fd7d7604b31b7fe45d1d2fd8e75/?gd_sdk_referrer_url=https://gamedistribution.com/games/table-tennis-world-tour",
        featured: false,
        rating: 4.4,
        plays: "2.0M"
    },
    {
        id: 14,
        title: "Onet Connect Classic",
        description: "Match identical tiles to clear the board in this relaxing puzzle game.",
        category: "Puzzle",
        imageSrc: "https://i.ibb.co/HXhSK3g/onet-connect.jpg",
        iframeSrc: "https://html5.gamemondi.com/66168b65a8a24fe6b27ff13b92ab81ba/?gd_sdk_referrer_url=https://gamedistribution.com/games/onet-connect-classic",
        featured: false,
        rating: 4.3,
        plays: "1.8M"
    }
];

// 初始化应用
function init() {
    console.log('初始化游戏网站...');
    
    // 移除加载指示器
    const loadingIndicator = document.getElementById('games-loading');
    if (loadingIndicator) {
        loadingIndicator.remove();
    }
    
    // 预加载图片
    preloadGameImages();
    
    // 渲染游戏
    renderFeaturedGames();
    renderAllGames();
    
    // 设置交互
    setupCategoryFilters();
    setupSearch();
    setupThemeToggle();
    setupGameModal();
    setupSlideControls();
    
    console.log('游戏网站初始化完成');
}

// 预加载游戏图片
function preloadGameImages() {
    console.log('开始预加载游戏图片...');
    
    // 为每个游戏创建一个图片预加载任务
    const preloadTasks = games.map(game => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                console.log(`图片加载成功: ${game.title}`);
                resolve({ game: game.title, status: 'success' });
            };
            img.onerror = () => {
                console.log(`图片加载失败: ${game.title}, 将使用备用图片`);
                resolve({ game: game.title, status: 'error' });
            };
            img.src = game.imageSrc;
            
            // 设置超时
            setTimeout(() => {
                if (!img.complete) {
                    console.log(`图片加载超时: ${game.title}`);
                    resolve({ game: game.title, status: 'timeout' });
                }
            }, 3000);
        });
    });
    
    // 执行所有预加载任务
    Promise.all(preloadTasks).then(results => {
        const succeeded = results.filter(r => r.status === 'success').length;
        const failed = results.filter(r => r.status !== 'success').length;
        console.log(`图片预加载完成，成功: ${succeeded}, 失败: ${failed}`);
    });
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
        
        // 创建游戏图片
        const gameImage = new Image();
        gameImage.className = 'w-full h-full object-cover';
        gameImage.alt = game.title;

        // 使用图片代理加载图片
        if (window.ImageProxy) {
            window.ImageProxy.applyImageProxy(
                gameImage, 
                game.imageSrc,
                (img) => { img.src = generateFallbackImage(game.title, game.category); }
            );
        } else {
            // 后备方案，使用之前的方法
            gameImage.src = game.imageSrc;
            gameImage.onerror = function() {
                this.onerror = null;
                this.src = generateFallbackImage(game.title, game.category);
            };
        }
        
        // 创建游戏元素结构
        const gameContent = document.createElement('div');
        gameContent.className = 'featured-game-content';
        gameContent.innerHTML = `
            <div class="game-category featured-category">${game.category}</div>
            <div class="featured-image-container"></div>
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
        `;
        
        // 添加图片到容器
        const imageContainer = gameContent.querySelector('.featured-image-container');
        imageContainer.appendChild(gameImage);
        
        gameElement.appendChild(gameContent);
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
        
        // 创建游戏图片占位符
        const gameImage = new Image();
        gameImage.className = 'game-image';
        gameImage.alt = game.title;

        // 使用图片代理加载图片
        if (window.ImageProxy) {
            window.ImageProxy.applyImageProxy(
                gameImage, 
                game.imageSrc,
                (img) => { img.src = generateFallbackImage(game.title, game.category); }
            );
        } else {
            // 后备方案，使用之前的方法
            gameImage.src = game.imageSrc;
            gameImage.onerror = function() {
                this.onerror = null;
                this.src = generateFallbackImage(game.title, game.category);
            };
        }
        
        gameCard.innerHTML = `
            <div class="game-category">${game.category}</div>
            <div class="game-image-container"></div>
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
        
        // 添加图片到容器
        const imageContainer = gameCard.querySelector('.game-image-container');
        imageContainer.appendChild(gameImage);
        
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
    
    // 添加加载指示器
    gameFrame.insertAdjacentHTML('afterend', `
        <div id="game-loading" class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
            <div class="loader mb-4"></div>
            <p class="text-white">正在加载游戏...</p>
        </div>
    `);
    
    // 设置iframe的src
    gameFrame.src = game.iframeSrc;
    
    // 错误处理
    gameFrame.onerror = function() {
        handleGameLoadError(game);
    };
    
    // 监听iframe加载完成
    gameFrame.onload = function() {
        const loadingElement = document.getElementById('game-loading');
        if (loadingElement) {
            loadingElement.remove();
        }
        
        // 检查是否加载出错（可能被重定向到错误页面）
        try {
            // 尝试访问iframe内容，如果跨域将抛出错误
            // 这只是一个尝试，大多数情况下会因为跨域限制而失败
            const iframeContent = gameFrame.contentWindow.document.body.innerHTML;
            if (iframeContent.includes('404') || iframeContent.includes('not exist')) {
                handleGameLoadError(game);
            }
        } catch (e) {
            // 跨域错误，无法检查内容，假设加载成功
            console.log('无法检查iframe内容（跨域限制）:', e);
        }
    };
    
    gameModal.classList.remove('hidden');
    gameModal.classList.add('active');
    
    // 发送游戏打开事件到Google Analytics
    if (typeof gtag === 'function') {
        gtag('event', 'game_open', {
            'game_title': game.title,
            'game_id': game.id
        });
    }
}

// 处理游戏加载错误
function handleGameLoadError(game) {
    console.error(`游戏加载失败: ${game.title}`);
    const gameFrame = document.getElementById('game-frame');
    const loadingElement = document.getElementById('game-loading');
    
    if (loadingElement) {
        loadingElement.remove();
    }
    
    // 替换为错误消息
    const errorHTML = `
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 p-6 text-center">
            <i class="fas fa-exclamation-triangle text-yellow-500 text-4xl mb-4"></i>
            <h3 class="text-xl font-bold mb-2">无法加载游戏</h3>
            <p class="text-gray-400 mb-4">很抱歉，此游戏暂时无法访问。请稍后再试或选择其他游戏。</p>
            <button id="try-direct-link" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                <i class="fas fa-external-link-alt mr-2"></i>尝试直接访问
            </button>
        </div>
    `;
    
    gameFrame.insertAdjacentHTML('afterend', errorHTML);
    
    // 尝试直接访问游戏网站
    const directLinkButton = document.getElementById('try-direct-link');
    if (directLinkButton) {
        directLinkButton.addEventListener('click', function() {
            // 提取基础URL
            const baseUrl = game.iframeSrc.split('/embed/')[0];
            const gamePath = game.iframeSrc.split('/embed/')[1];
            const directUrl = baseUrl + '/games/' + (gamePath || '');
            
            // 在新标签中打开
            window.open(directUrl, '_blank');
            
            // 发送直接访问事件到Google Analytics
            if (typeof gtag === 'function') {
                gtag('event', 'direct_game_access', {
                    'game_title': game.title,
                    'game_id': game.id
                });
            }
        });
    }
    
    // 发送游戏错误事件到Google Analytics
    if (typeof gtag === 'function') {
        gtag('event', 'game_load_error', {
            'game_title': game.title,
            'game_id': game.id,
            'iframe_src': game.iframeSrc
        });
    }
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

// 生成备用图片URL（使用文本作为图片）
function generateFallbackImage(title, category) {
    // 使用国内可访问的图片服务
    const fallbackColor = getCategoryColor(category);
    
    // 创建一个SVG字符串
    const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
        <rect width="300" height="200" fill="${fallbackColor}"/>
        <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${title}</text>
        <text x="50%" y="70%" font-family="Arial" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">${category}</text>
    </svg>
    `;
    
    // 编码SVG，确保适用于中文环境
    const encoded = encodeURIComponent(svgContent)
        .replace(/'/g, '%27')
        .replace(/"/g, '%22');
    
    // 直接使用data URI，不使用base64编码，避免中文问题
    return `data:image/svg+xml,${encoded}`;
}

// 根据游戏类别获取颜色
function getCategoryColor(category) {
    const colors = {
        'Puzzle': '#3b82f6',
        'Action': '#ef4444',
        'Strategy': '#8b5cf6',
        'Racing': '#f59e0b',
        'Sports': '#10b981'
    };
    
    return colors[category] || '#6b7280';
}

// 当DOM内容加载完成时初始化应用
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM内容已加载完成');
    // 延迟100毫秒加载，确保DOM已完全准备好
    setTimeout(init, 100);
}); 