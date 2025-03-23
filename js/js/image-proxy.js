/**
 * 图片代理服务 - 用于解决跨域和访问限制问题
 * 
 * 此脚本提供以下功能：
 * 1. 动态生成base64编码的图片替代外部图片
 * 2. 提供图片缓存机制避免重复请求
 * 3. 提供fallback备用图片
 */

// 图片缓存，避免重复请求
const imageCache = new Map();

/**
 * 使用CORS代理尝试加载图片
 * @param {string} imageUrl - 原始图片URL
 * @returns {Promise<string>} - 返回可用的图片URL或base64数据
 */
async function proxyImage(imageUrl) {
    // 如果已经缓存，直接返回
    if (imageCache.has(imageUrl)) {
        return imageCache.get(imageUrl);
    }
    
    try {
        // 尝试几种不同的CORS代理服务
        const proxies = [
            // 添加URL前缀，解决跨域问题
            url => `https://cors-anywhere.herokuapp.com/${url}`,
            url => `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
            url => `https://corsproxy.io/?${encodeURIComponent(url)}`
        ];
        
        // 顺序尝试不同的代理
        for (const proxyFn of proxies) {
            try {
                const proxyUrl = proxyFn(imageUrl);
                const response = await fetch(proxyUrl, { 
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Origin': window.location.origin
                    }
                });
                
                if (response.ok) {
                    const blob = await response.blob();
                    const base64 = await blobToBase64(blob);
                    
                    // 保存到缓存
                    imageCache.set(imageUrl, base64);
                    return base64;
                }
            } catch (err) {
                console.log(`代理 ${proxyFn.toString()} 失败: ${err}`);
                // 继续尝试下一个代理
            }
        }
        
        // 所有代理都失败，尝试直接加载
        return imageUrl;
    } catch (error) {
        console.error('所有图片代理方法均失败:', error);
        return imageUrl; // 回退到原始URL
    }
}

/**
 * 将Blob对象转换为Base64字符串
 * @param {Blob} blob - 要转换的Blob对象
 * @returns {Promise<string>} - 返回Base64字符串
 */
function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

/**
 * 为图片添加代理功能
 * @param {HTMLImageElement} imgElement - 图片元素
 * @param {string} originalSrc - 原始图片URL
 * @param {Function} fallbackFn - 失败时的回调函数
 */
function applyImageProxy(imgElement, originalSrc, fallbackFn) {
    // 先设置loading属性
    imgElement.loading = 'lazy';
    
    // 先尝试直接加载
    imgElement.src = originalSrc;
    
    // 如果直接加载失败，尝试使用代理
    imgElement.onerror = async function() {
        this.onerror = null; // 防止循环触发
        
        try {
            console.log(`直接加载失败，尝试代理: ${originalSrc}`);
            const proxiedSrc = await proxyImage(originalSrc);
            this.src = proxiedSrc;
            
            // 如果代理加载也失败
            this.onerror = function() {
                this.onerror = null;
                console.log(`代理加载失败，使用fallback`);
                if (typeof fallbackFn === 'function') {
                    fallbackFn(this);
                }
            };
        } catch (error) {
            console.error('代理加载失败:', error);
            if (typeof fallbackFn === 'function') {
                fallbackFn(this);
            }
        }
    };
}

// 导出函数
window.ImageProxy = {
    proxyImage,
    applyImageProxy
}; 