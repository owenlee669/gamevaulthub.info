// 游戏数据
const games = [
    {
        id: 1,
        title: "Garden Bloom",
        description: "Match colorful flowers in this relaxing puzzle game. Create beautiful garden patterns!",
        category: "Puzzle",
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EGarden Bloom%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPuzzle%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBubble Tower 3D%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPuzzle%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23ef4444'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECannon Balls 3D%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAction%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%238b5cf6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETower Crash 3D%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EStrategy%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EElement Blocks%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPuzzle%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EZooBoom%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPuzzle%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f59e0b'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EMoto X3M Pool Party%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3ERacing%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EBubble Woods%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPuzzle%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3E3D Free Kick%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3ESports%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3E8 Ball Billiards%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3ESports%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EArchery World Tour%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3ESports%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETotemia Cursed Marbles%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPuzzle%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%2310b981'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ETable Tennis World Tour%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3ESports%3C/text%3E%3C/svg%3E",
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
        imageSrc: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%233b82f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EOnet Connect Classic%3C/text%3E%3Ctext x='50%25' y='70%25' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EPuzzle%3C/text%3E%3C/svg%3E",
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
            // 设置初始图片源
            gameImage.src = game.imageSrc;
            
            // 图片加载错误处理
            gameImage.onerror = function() {
                this.onerror = null;
                console.log(`图片加载失败: ${game.title}`);
                
                // 尝试使用一系列备用方案
                const backupCdns = [
                    // 1. 使用ImgBB
                    game.imageSrc,
                    
                    // 2. 尝试其它CDN
                    `https://gamesite-img.netlify.app/games/${game.title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
                    
                    // 3. 使用内嵌的备用图片
                    window.GameFallbacks ? window.GameFallbacks.getFallbackGameImage(game.id, game.category, game.title) : null,
                    
                    // 4. 生成动态SVG作为最后的备选方案
                    generateFallbackImage(game.title, game.category)
                ].filter(Boolean); // 移除null或undefined值
                
                // 尝试第一个备选项
                let backupIndex = 0;
                
                const tryNextImage = () => {
                    if (backupIndex < backupCdns.length) {
                        console.log(`尝试备用图片 ${backupIndex+1}/${backupCdns.length}: ${game.title}`);
                        this.src = backupCdns[backupIndex++];
                    } else {
                        // 所有备选项都失败了，删除onerror避免无限循环
                        this.onerror = null;
                        console.log(`所有备用方案均失败: ${game.title}`);
                    }
                };
                
                this.onerror = tryNextImage;
                tryNextImage(); // 立即尝试第一个备用方案
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
                    <button class="play-now-btn bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200">Play Now</button>
                </div>
            </div>
        `;
        
        // 添加图片到容器
        const imageContainer = gameContent.querySelector('.featured-image-container');
        imageContainer.appendChild(gameImage);
        
        gameElement.appendChild(gameContent);
        container.appendChild(gameElement);
        
        // 添加点击事件 - 修复：确保点击整个卡片不会触发打开游戏
        gameElement.addEventListener('click', (e) => {
            // 只有当点击的是Play Now按钮时才打开游戏模态框
            if (e.target.closest('.play-now-btn')) {
                e.preventDefault();
                e.stopPropagation();
                openGameModal(game);
            }
        });
        
        // 专门为Play Now按钮添加点击事件
        const playButton = gameElement.querySelector('.play-now-btn');
        if (playButton) {
            playButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                openGameModal(game);
            });
        }
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
            // 设置初始图片源
            gameImage.src = game.imageSrc;
            
            // 图片加载错误处理
            gameImage.onerror = function() {
                this.onerror = null;
                console.log(`图片加载失败: ${game.title}`);
                
                // 尝试使用一系列备用方案
                const backupCdns = [
                    // 1. 使用ImgBB
                    game.imageSrc,
                    
                    // 2. 尝试其它CDN
                    `https://gamesite-img.netlify.app/games/${game.title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
                    
                    // 3. 使用内嵌的备用图片
                    window.GameFallbacks ? window.GameFallbacks.getFallbackGameImage(game.id, game.category, game.title) : null,
                    
                    // 4. 生成动态SVG作为最后的备选方案
                    generateFallbackImage(game.title, game.category)
                ].filter(Boolean); // 移除null或undefined值
                
                // 尝试第一个备选项
                let backupIndex = 0;
                
                const tryNextImage = () => {
                    if (backupIndex < backupCdns.length) {
                        console.log(`尝试备用图片 ${backupIndex+1}/${backupCdns.length}: ${game.title}`);
                        this.src = backupCdns[backupIndex++];
                    } else {
                        // 所有备选项都失败了，删除onerror避免无限循环
                        this.onerror = null;
                        console.log(`所有备用方案均失败: ${game.title}`);
                    }
                };
                
                this.onerror = tryNextImage;
                tryNextImage(); // 立即尝试第一个备用方案
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
        
        // 添加点击事件 - 修复：确保点击整个卡片不会触发打开游戏
        gameCard.addEventListener('click', (e) => {
            // 只有当点击的是Play Now按钮时才打开游戏模态框
            if (e.target.closest('.play-now-btn')) {
                e.preventDefault();
                e.stopPropagation();
                openGameModal(game);
            }
        });
        
        // 专门为Play Now按钮添加点击事件
        const playButton = gameCard.querySelector('.play-now-btn');
        if (playButton) {
            playButton.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                openGameModal(game);
            });
        }
        
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
    
    // 确保模态框可见
    if (gameModal.classList.contains('hidden')) {
        gameModal.classList.remove('hidden');
    }
    gameModal.classList.add('active');
    
    modalTitle.textContent = game.title;
    
    // 移除之前的加载指示器
    const existingLoader = document.getElementById('game-loading');
    if (existingLoader) {
        existingLoader.remove();
    }
    
    // 移除之前的错误信息
    const existingError = document.querySelector('.absolute.inset-0.flex.flex-col');
    if (existingError) {
        existingError.remove();
    }
    
    // 添加加载指示器
    gameFrame.insertAdjacentHTML('afterend', `
        <div id="game-loading" class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
            <div class="loader mb-4"></div>
            <p class="text-white">正在加载游戏...</p>
        </div>
    `);
    
    // 清除之前的iframe内容
    gameFrame.src = '';
    
    // 设置加载超时 - 15秒后显示错误
    const loadTimeout = setTimeout(() => {
        if (document.getElementById('game-loading')) {
            console.error(`游戏加载超时: ${game.title}`);
            handleGameLoadError(game);
        }
    }, 15000);
    
    // 用Try-Catch包装，防止可能发生的错误
    try {
        // 设置iframe的src (使用setTimeout延迟一下加载，确保UI更新)
        setTimeout(() => {
            // 设置iframe的src
            gameFrame.src = game.iframeSrc;
            
            // 错误处理
            gameFrame.onerror = function() {
                clearTimeout(loadTimeout);
                handleGameLoadError(game);
            };
            
            // 监听iframe加载完成
            gameFrame.onload = function() {
                clearTimeout(loadTimeout); // 清除超时
                
                const loadingElement = document.getElementById('game-loading');
                if (loadingElement) {
                    loadingElement.remove();
                }
                
                // 检查是否加载出错（可能被重定向到错误页面）
                try {
                    // 尝试访问iframe内容，如果跨域将抛出错误
                    // 这只是一个尝试，大多数情况下会因为跨域限制而失败
                    const iframeContent = gameFrame.contentWindow.document.body.innerHTML;
                    if (iframeContent && (
                        iframeContent.includes('404') || 
                        iframeContent.includes('not exist') || 
                        iframeContent.includes('error') ||
                        iframeContent.includes('无法访问')
                    )) {
                        handleGameLoadError(game);
                    }
                } catch (e) {
                    // 跨域错误，无法检查内容，暂时假设加载成功
                    console.log('无法检查iframe内容（跨域限制）:', e);
                    
                    // 尝试检测iframe是否实际加载了内容
                    try {
                        // 如果iframe的contentWindow为null，则可能加载失败
                        if (!gameFrame.contentWindow) {
                            handleGameLoadError(game);
                        }
                    } catch (e2) {
                        console.error('检测iframe内容时出错:', e2);
                    }
                }
            };
        }, 100);
    } catch (e) {
        clearTimeout(loadTimeout);
        console.error('设置游戏iframe时出错:', e);
        handleGameLoadError(game);
    }
    
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
            <p class="text-gray-400 mb-4">很抱歉，此游戏暂时无法访问。可能是由于网络限制或服务器问题。</p>
            <div class="flex flex-col md:flex-row gap-3">
                <button id="try-html5-game" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                    <i class="fas fa-gamepad mr-2"></i>尝试HTML5版本
                </button>
                <button id="try-local-game" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition">
                    <i class="fas fa-puzzle-piece mr-2"></i>玩本地小游戏
                </button>
            </div>
        </div>
    `;
    
    gameFrame.insertAdjacentHTML('afterend', errorHTML);
    
    // 尝试HTML5游戏版本
    const html5Button = document.getElementById('try-html5-game');
    if (html5Button) {
        html5Button.addEventListener('click', function() {
            // 打开替代游戏页面
            const alternativeURL = getAlternativeGameURL(game.title, game.category);
            openAlternativeGame(alternativeURL);
        });
    }
    
    // 尝试本地小游戏
    const localGameButton = document.getElementById('try-local-game');
    if (localGameButton) {
        localGameButton.addEventListener('click', function() {
            loadLocalGame(game.category);
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

// 获取替代游戏URL
function getAlternativeGameURL(gameTitle, category) {
    // 根据游戏类别匹配通用的替代游戏
    const categoryGames = {
        'Puzzle': 'https://play.famobi.com/mahjong-relax',
        'Action': 'https://play.famobi.com/moto-x3m',
        'Strategy': 'https://play.famobi.com/puzzle-blocks',
        'Racing': 'https://play.famobi.com/highway-rider-extreme',
        'Sports': 'https://play.famobi.com/penalty-kicks'
    };
    
    return categoryGames[category] || 'https://play.famobi.com/curve-ball-3d';
}

// 打开替代游戏
function openAlternativeGame(url) {
    const gameFrame = document.getElementById('game-frame');
    const errorElement = document.querySelector('.absolute.inset-0.flex.flex-col');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    // 显示加载指示器
    gameFrame.insertAdjacentHTML('afterend', `
        <div id="game-loading" class="absolute inset-0 flex flex-col items-center justify-center bg-gray-900">
            <div class="loader mb-4"></div>
            <p class="text-white">正在加载替代游戏...</p>
        </div>
    `);
    
    // 设置iframe的src
    gameFrame.src = url;
    
    // 监听iframe加载完成
    gameFrame.onload = function() {
        const loadingElement = document.getElementById('game-loading');
        if (loadingElement) {
            loadingElement.remove();
        }
    };
}

// 加载本地小游戏
function loadLocalGame(category) {
    const gameFrame = document.getElementById('game-frame');
    const errorElement = document.querySelector('.absolute.inset-0.flex.flex-col');
    
    if (errorElement) {
        errorElement.remove();
    }
    
    // 根据类别选择本地游戏
    let gameHTML = '';
    
    switch (category.toLowerCase()) {
        case 'puzzle':
            gameHTML = generateMemoryGame();
            break;
        case 'action':
            gameHTML = generateClickerGame();
            break;
        default:
            gameHTML = generateSimpleGame();
            break;
    }
    
    // 将本地游戏注入到iframe中
    const gameDoc = gameFrame.contentDocument || gameFrame.contentWindow.document;
    gameDoc.open();
    gameDoc.write(gameHTML);
    gameDoc.close();
}

// 生成简单的内存匹配游戏
function generateMemoryGame() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>记忆配对游戏</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                background-color: #1a202c;
                color: white;
            }
            .game-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 10px;
                max-width: 400px;
            }
            .card {
                width: 80px;
                height: 80px;
                background-color: #4a5568;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                cursor: pointer;
                perspective: 1000px;
            }
            .card-inner {
                width: 100%;
                height: 100%;
                position: relative;
                transform-style: preserve-3d;
                transition: transform 0.5s;
            }
            .card.flipped .card-inner {
                transform: rotateY(180deg);
            }
            .card-front, .card-back {
                width: 100%;
                height: 100%;
                position: absolute;
                backface-visibility: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .card-front {
                background-color: #4a5568;
            }
            .card-back {
                background-color: #2d3748;
                transform: rotateY(180deg);
            }
            .score {
                margin-top: 20px;
                font-size: 18px;
            }
            .restart {
                margin-top: 20px;
                padding: 8px 16px;
                background-color: #4299e1;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .restart:hover {
                background-color: #3182ce;
            }
        </style>
    </head>
    <body>
        <h1>记忆配对游戏</h1>
        <div class="score">配对: <span id="matches">0</span> | 点击: <span id="clicks">0</span></div>
        <div class="game-container" id="game-board"></div>
        <button class="restart" id="restart-btn">重新开始</button>
        
        <script>
            // 游戏状态
            let cards = [];
            let flippedCards = [];
            let matchedPairs = 0;
            let clickCount = 0;
            let canFlip = true;
            
            // 表情符号作为卡片内容
            const emojis = ['🐱', '🐶', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'];
            
            // 初始化游戏
            function initGame() {
                const gameBoard = document.getElementById('game-board');
                gameBoard.innerHTML = '';
                
                // 重置游戏状态
                cards = [];
                flippedCards = [];
                matchedPairs = 0;
                clickCount = 0;
                canFlip = true;
                
                // 更新计分板
                document.getElementById('matches').textContent = matchedPairs;
                document.getElementById('clicks').textContent = clickCount;
                
                // 创建卡片对（每个emoji两张）
                const cardValues = [...emojis, ...emojis];
                
                // 随机洗牌
                cardValues.sort(() => Math.random() - 0.5);
                
                // 创建卡片元素
                cardValues.forEach((emoji, index) => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = \`
                        <div class="card-inner">
                            <div class="card-front"></div>
                            <div class="card-back">\${emoji}</div>
                        </div>
                    \`;
                    card.dataset.value = emoji;
                    card.addEventListener('click', () => flipCard(card));
                    gameBoard.appendChild(card);
                    cards.push(card);
                });
            }
            
            // 翻转卡片
            function flipCard(card) {
                // 如果已经翻开或配对，或者当前不能翻牌，则忽略点击
                if (card.classList.contains('flipped') || !canFlip) return;
                
                // 更新点击次数
                clickCount++;
                document.getElementById('clicks').textContent = clickCount;
                
                // 翻开卡片
                card.classList.add('flipped');
                flippedCards.push(card);
                
                // 如果已翻开两张牌，检查是否匹配
                if (flippedCards.length === 2) {
                    canFlip = false;
                    checkMatch();
                }
            }
            
            // 检查两张翻开的卡片是否匹配
            function checkMatch() {
                const [card1, card2] = flippedCards;
                
                if (card1.dataset.value === card2.dataset.value) {
                    // 匹配成功
                    flippedCards = [];
                    matchedPairs++;
                    document.getElementById('matches').textContent = matchedPairs;
                    canFlip = true;
                    
                    // 检查游戏是否结束
                    if (matchedPairs === emojis.length) {
                        setTimeout(() => {
                            alert(\`恭喜你完成了游戏！共用了 \${clickCount} 次点击。\`);
                        }, 500);
                    }
                } else {
                    // 不匹配，翻回去
                    setTimeout(() => {
                        card1.classList.remove('flipped');
                        card2.classList.remove('flipped');
                        flippedCards = [];
                        canFlip = true;
                    }, 1000);
                }
            }
            
            // 重新开始游戏
            document.getElementById('restart-btn').addEventListener('click', initGame);
            
            // 初始化游戏
            initGame();
        </script>
    </body>
    </html>
    `;
}

// 生成简单的点击游戏
function generateClickerGame() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>快速点击游戏</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                background-color: #1a202c;
                color: white;
            }
            .game-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
            }
            .target {
                width: 80px;
                height: 80px;
                border-radius: 50%;
                background-color: #e53e3e;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                cursor: pointer;
                transition: all 0.2s;
            }
            .target:hover {
                transform: scale(1.05);
            }
            .target:active {
                transform: scale(0.95);
            }
            .score {
                font-size: 24px;
                margin-bottom: 20px;
            }
            .timer {
                font-size: 18px;
                margin-bottom: 30px;
            }
            .start-btn {
                padding: 10px 20px;
                background-color: #4299e1;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
            }
            .start-btn:hover {
                background-color: #3182ce;
            }
        </style>
    </head>
    <body>
        <h1>快速点击游戏</h1>
        <div class="timer">时间: <span id="time">30</span>秒</div>
        <div class="score">得分: <span id="score">0</span></div>
        
        <div class="game-container">
            <div class="target" id="target">点我!</div>
            <button class="start-btn" id="start-btn">开始游戏</button>
        </div>
        
        <script>
            // 游戏状态
            let score = 0;
            let timeLeft = 30;
            let gameInterval;
            let isPlaying = false;
            
            // DOM元素
            const target = document.getElementById('target');
            const scoreDisplay = document.getElementById('score');
            const timeDisplay = document.getElementById('time');
            const startButton = document.getElementById('start-btn');
            
            // 开始游戏
            function startGame() {
                // 重置游戏状态
                score = 0;
                timeLeft = 30;
                isPlaying = true;
                
                // 更新显示
                scoreDisplay.textContent = score;
                timeDisplay.textContent = timeLeft;
                
                // 隐藏开始按钮
                startButton.style.display = 'none';
                
                // 显示目标
                target.style.display = 'flex';
                
                // 移动目标到随机位置
                moveTarget();
                
                // 设置定时器
                gameInterval = setInterval(() => {
                    timeLeft--;
                    timeDisplay.textContent = timeLeft;
                    
                    if (timeLeft <= 0) {
                        endGame();
                    }
                }, 1000);
            }
            
            // 结束游戏
            function endGame() {
                clearInterval(gameInterval);
                isPlaying = false;
                
                // 显示成绩
                alert(\`游戏结束! 你的得分是: \${score}\`);
                
                // 显示开始按钮
                startButton.style.display = 'block';
                
                // 隐藏目标
                target.style.display = 'none';
            }
            
            // 移动目标到随机位置
            function moveTarget() {
                // 获取游戏容器尺寸
                const gameContainer = document.querySelector('.game-container');
                const containerRect = gameContainer.getBoundingClientRect();
                
                // 目标尺寸
                const targetSize = 80;
                
                // 随机位置 (确保在容器内)
                const maxX = containerRect.width - targetSize;
                const maxY = containerRect.height - targetSize;
                
                // 设置随机位置
                const randomX = Math.floor(Math.random() * maxX) - maxX / 2;
                const randomY = Math.floor(Math.random() * maxY) - maxY / 2;
                
                target.style.transform = \`translate(\${randomX}px, \${randomY}px)\`;
                
                // 随机颜色
                const colors = ['#e53e3e', '#38a169', '#4299e1', '#805ad5', '#d69e2e'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                target.style.backgroundColor = randomColor;
            }
            
            // 点击目标
            target.addEventListener('click', () => {
                if (!isPlaying) return;
                
                // 增加分数
                score++;
                scoreDisplay.textContent = score;
                
                // 移动目标
                moveTarget();
            });
            
            // 开始按钮点击
            startButton.addEventListener('click', startGame);
            
            // 初始隐藏目标
            target.style.display = 'none';
        </script>
    </body>
    </html>
    `;
}

// 生成简单的小游戏
function generateSimpleGame() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>躲避方块游戏</title>
        <style>
            body {
                margin: 0;
                overflow: hidden;
                background-color: #1a202c;
            }
            #game-canvas {
                display: block;
                background-color: #1a202c;
            }
            .game-over {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background-color: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 20px;
                border-radius: 8px;
                text-align: center;
                display: none;
            }
            .game-over button {
                margin-top: 15px;
                padding: 8px 16px;
                background-color: #4299e1;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .game-score {
                position: absolute;
                top: 10px;
                left: 10px;
                color: white;
                font-family: Arial, sans-serif;
                font-size: 20px;
            }
        </style>
    </head>
    <body>
        <canvas id="game-canvas"></canvas>
        <div class="game-score">分数: <span id="score">0</span></div>
        <div class="game-over" id="game-over">
            <h2>游戏结束</h2>
            <p>你的分数: <span id="final-score">0</span></p>
            <button id="restart-btn">重新开始</button>
        </div>
        
        <script>
            // 获取画布和上下文
            const canvas = document.getElementById('game-canvas');
            const ctx = canvas.getContext('2d');
            
            // 设置画布大小为窗口大小
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // 游戏状态
            let score = 0;
            let animationId;
            let gameOver = false;
            
            // 玩家对象
            const player = {
                x: canvas.width / 2,
                y: canvas.height - 50,
                size: 30,
                color: '#4299e1',
                speed: 5
            };
            
            // 障碍物数组
            let obstacles = [];
            
            // 控制状态
            const keys = {
                ArrowLeft: false,
                ArrowRight: false
            };
            
            // 键盘事件监听
            window.addEventListener('keydown', (e) => {
                if (keys.hasOwnProperty(e.code)) {
                    keys[e.code] = true;
                }
            });
            
            window.addEventListener('keyup', (e) => {
                if (keys.hasOwnProperty(e.code)) {
                    keys[e.code] = false;
                }
            });
            
            // 触摸控制
            let touchStartX = 0;
            canvas.addEventListener('touchstart', (e) => {
                touchStartX = e.touches[0].clientX;
            });
            
            canvas.addEventListener('touchmove', (e) => {
                e.preventDefault();
                const touchX = e.touches[0].clientX;
                const diff = touchX - touchStartX;
                
                if (diff > 0) {
                    keys.ArrowRight = true;
                    keys.ArrowLeft = false;
                } else {
                    keys.ArrowLeft = true;
                    keys.ArrowRight = false;
                }
                
                touchStartX = touchX;
            });
            
            canvas.addEventListener('touchend', () => {
                keys.ArrowLeft = false;
                keys.ArrowRight = false;
            });
            
            // 创建障碍物
            function createObstacle() {
                const size = Math.random() * 30 + 20;
                obstacles.push({
                    x: Math.random() * (canvas.width - size),
                    y: -size,
                    size: size,
                    color: getRandomColor(),
                    speed: Math.random() * 3 + 1
                });
            }
            
            // 获取随机颜色
            function getRandomColor() {
                const colors = ['#e53e3e', '#38a169', '#805ad5', '#d69e2e', '#f56565'];
                return colors[Math.floor(Math.random() * colors.length)];
            }
            
            // 绘制玩家
            function drawPlayer() {
                ctx.beginPath();
                ctx.rect(player.x - player.size/2, player.y - player.size/2, player.size, player.size);
                ctx.fillStyle = player.color;
                ctx.fill();
                ctx.closePath();
            }
            
            // 绘制障碍物
            function drawObstacles() {
                obstacles.forEach(obstacle => {
                    ctx.beginPath();
                    ctx.rect(obstacle.x, obstacle.y, obstacle.size, obstacle.size);
                    ctx.fillStyle = obstacle.color;
                    ctx.fill();
                    ctx.closePath();
                });
            }
            
            // 更新游戏状态
            function update() {
                // 移动玩家
                if (keys.ArrowLeft && player.x > player.size/2) {
                    player.x -= player.speed;
                }
                if (keys.ArrowRight && player.x < canvas.width - player.size/2) {
                    player.x += player.speed;
                }
                
                // 更新障碍物位置
                obstacles.forEach((obstacle, index) => {
                    obstacle.y += obstacle.speed;
                    
                    // 检查是否超出画布底部
                    if (obstacle.y > canvas.height) {
                        obstacles.splice(index, 1);
                        score++;
                        document.getElementById('score').textContent = score;
                    }
                    
                    // 碰撞检测
                    if (
                        player.x + player.size/2 > obstacle.x &&
                        player.x - player.size/2 < obstacle.x + obstacle.size &&
                        player.y + player.size/2 > obstacle.y &&
                        player.y - player.size/2 < obstacle.y + obstacle.size
                    ) {
                        endGame();
                    }
                });
                
                // 按照得分难度增加
                if (Math.random() < 0.02 + Math.min(0.03, score / 1000)) {
                    createObstacle();
                }
            }
            
            // 游戏循环
            function gameLoop() {
                if (gameOver) return;
                
                // 清空画布
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // 更新游戏状态
                update();
                
                // 绘制游戏元素
                drawPlayer();
                drawObstacles();
                
                // 请求下一帧动画
                animationId = requestAnimationFrame(gameLoop);
            }
            
            // 结束游戏
            function endGame() {
                gameOver = true;
                cancelAnimationFrame(animationId);
                
                document.getElementById('final-score').textContent = score;
                document.getElementById('game-over').style.display = 'block';
            }
            
            // 重新开始游戏
            function restartGame() {
                obstacles = [];
                score = 0;
                gameOver = false;
                player.x = canvas.width / 2;
                
                document.getElementById('score').textContent = score;
                document.getElementById('game-over').style.display = 'none';
                
                gameLoop();
            }
            
            // 重新开始按钮事件
            document.getElementById('restart-btn').addEventListener('click', restartGame);
            
            // 调整窗口大小
            window.addEventListener('resize', () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                player.y = canvas.height - 50;
            });
            
            // 开始游戏
            restartGame();
        </script>
    </body>
    </html>
    `;
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