// Complete Product Data (24 products)
const allProducts = [
    {
        id: 1,
        name: 'Midnight Rose',
        desc: 'A captivating blend of Bulgarian rose and night jasmine',
        price: 129,
        originalPrice: 159,
        category: 'floral',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=600&fit=crop',
        badge: 'BESTSELLER',
        rating: 4.8,
        reviews: 245
    },
    {
        id: 2,
        name: 'Ocean Breeze',
        desc: 'Fresh marine notes with citrus undertones',
        price: 149,
        originalPrice: 179,
        category: 'fresh',
        image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=600&fit=crop',
        badge: 'NEW',
        rating: 4.9,
        reviews: 189
    },
    {
        id: 3,
        name: 'Amber Nights',
        desc: 'Warm amber with hints of vanilla and musk',
        price: 169,
        originalPrice: 199,
        category: 'oriental',
        image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=600&fit=crop',
        badge: 'LUXURY',
        rating: 4.7,
        reviews: 312
    },
    {
        id: 4,
        name: 'Forest Whisper',
        desc: 'Earthy cedarwood and pine with a touch of moss',
        price: 159,
        originalPrice: 189,
        category: 'woody',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59bd9?w=500&h=600&fit=crop',
        badge: 'TRENDING',
        rating: 4.6,
        reviews: 178
    },
    {
        id: 5,
        name: 'Lavender Dreams',
        desc: 'Soothing lavender with bergamot and chamomile',
        price: 139,
        originalPrice: 169,
        category: 'floral',
        image: 'https://images.unsplash.com/photo-1528532042617-0dd541348fd8?w=500&h=600&fit=crop',
        badge: 'POPULAR',
        rating: 4.8,
        reviews: 267
    },
    {
        id: 6,
        name: 'Citrus Burst',
        desc: 'Vibrant orange, lemon, and grapefruit blend',
        price: 119,
        originalPrice: 149,
        category: 'fresh',
        image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500&h=600&fit=crop',
        badge: 'SALE',
        rating: 4.5,
        reviews: 143
    },
    {
        id: 7,
        name: 'Sandalwood Essence',
        desc: 'Rich sandalwood with patchouli undertones',
        price: 179,
        originalPrice: 209,
        category: 'woody',
        image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&h=600&fit=crop',
        badge: 'PREMIUM',
        rating: 4.9,
        reviews: 298
    },
    {
        id: 8,
        name: 'Spice Market',
        desc: 'Exotic blend of cardamom, saffron, and oud',
        price: 189,
        originalPrice: 229,
        category: 'oriental',
        image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=600&fit=crop',
        badge: 'EXCLUSIVE',
        rating: 4.7,
        reviews: 201
    },
    {
        id: 9,
        name: 'White Jasmine',
        desc: 'Pure white jasmine with subtle green notes',
        price: 145,
        originalPrice: 175,
        category: 'floral',
        image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=500&h=600&fit=crop',
        badge: 'NEW',
        rating: 4.6,
        reviews: 156
    },
    {
        id: 10,
        name: 'Aqua Fresh',
        desc: 'Cool aquatic fragrance with cucumber notes',
        price: 125,
        originalPrice: 155,
        category: 'fresh',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&h=600&fit=crop',
        badge: 'SALE',
        rating: 4.4,
        reviews: 134
    },
    {
        id: 11,
        name: 'Oud Royale',
        desc: 'Intense oud with rose and amber accords',
        price: 199,
        originalPrice: 249,
        category: 'oriental',
        image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=600&fit=crop',
        badge: 'LUXURY',
        rating: 4.9,
        reviews: 389
    },
    {
        id: 12,
        name: 'Cedar Woods',
        desc: 'Sophisticated cedarwood with vetiver base',
        price: 165,
        originalPrice: 195,
        category: 'woody',
        image: 'https://images.unsplash.com/photo-1600428812656-c5f6b14d0aba?w=500&h=600&fit=crop',
        badge: 'BESTSELLER',
        rating: 4.7,
        reviews: 223
    },
    {
        id: 13,
        name: 'Rose Garden',
        desc: 'Romantic rose bouquet with peony touches',
        price: 135,
        originalPrice: 165,
        category: 'floral',
        image: 'https://images.unsplash.com/photo-1615397349754-16e5c2ea2d13?w=500&h=600&fit=crop',
        badge: 'POPULAR',
        rating: 4.5,
        reviews: 198
    },
    {
        id: 14,
        name: 'Mint Mojito',
        desc: 'Refreshing mint with lime and sugar cane',
        price: 115,
        originalPrice: 145,
        category: 'fresh',
        image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=500&h=600&fit=crop',
        badge: 'NEW',
        rating: 4.3,
        reviews: 112
    },
    {
        id: 15,
        name: 'Mystic Incense',
        desc: 'Deep incense with frankincense and myrrh',
        price: 175,
        originalPrice: 215,
        category: 'oriental',
        image: 'https://images.unsplash.com/photo-1590156206736-3b75c954230c?w=500&h=600&fit=crop',
        badge: 'EXCLUSIVE',
        rating: 4.8,
        reviews: 267
    },
    {
        id: 16,
        name: 'Bamboo Forest',
        desc: 'Green bamboo with fresh cut grass notes',
        price: 155,
        originalPrice: 185,
        category: 'woody',
        image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500&h=600&fit=crop',
        badge: 'TRENDING',
        rating: 4.6,
        reviews: 189
    },
    {
        id: 17,
        name: 'Peony Blossom',
        desc: 'Delicate peony with white tea undertones',
        price: 142,
        originalPrice: 172,
        category: 'floral',
        image: 'https://images.unsplash.com/photo-1594053691590-5e7c3e8f6c8b?w=500&h=600&fit=crop',
        badge: 'NEW',
        rating: 4.7,
        reviews: 176
    },
    {
        id: 18,
        name: 'Ocean Mist',
        desc: 'Salty sea air with driftwood and seaweed',
        price: 138,
        originalPrice: 168,
        category: 'fresh',
        image: 'https://images.unsplash.com/photo-1591291621164-2c582b926f07?w=500&h=600&fit=crop',
        badge: 'SALE',
        rating: 4.4,
        reviews: 145
    },
    {
        id: 19,
        name: 'Black Oud',
        desc: 'Intense black oud with leather and tobacco',
        price: 209,
        originalPrice: 259,
        category: 'oriental',
        image: 'https://images.unsplash.com/photo-1594932601814-2f96e5e3d2c7?w=500&h=600&fit=crop',
        badge: 'LUXURY',
        rating: 4.9,
        reviews: 412
    },
    {
        id: 20,
        name: 'Mahogany Wood',
        desc: 'Rich mahogany with aged whiskey notes',
        price: 172,
        originalPrice: 202,
        category: 'woody',
        image: 'https://images.unsplash.com/photo-1615397587950-3cbb55f2f5e2?w=500&h=600&fit=crop',
        badge: 'PREMIUM',
        rating: 4.8,
        reviews: 234
    },
    {
        id: 21,
        name: 'Violet Garden',
        desc: 'Sweet violet with iris and orris root',
        price: 148,
        originalPrice: 178,
        category: 'floral',
        image: 'https://images.unsplash.com/photo-1587712627031-e34ec228e738?w=500&h=600&fit=crop',
        badge: 'BESTSELLER',
        rating: 4.6,
        reviews: 209
    },
    {
        id: 22,
        name: 'Green Tea',
        desc: 'Pure green tea with bergamot essence',
        price: 128,
        originalPrice: 158,
        category: 'fresh',
        image: 'https://images.unsplash.com/photo-1594989201946-4e2b7cf75d24?w=500&h=600&fit=crop',
        badge: 'POPULAR',
        rating: 4.5,
        reviews: 187
    },
    {
        id: 23,
        name: 'Royal Amber',
        desc: 'Regal amber with gold dust and silk notes',
        price: 195,
        originalPrice: 235,
        category: 'oriental',
        image: 'https://images.unsplash.com/photo-1615412704911-55d589229864?w=500&h=600&fit=crop',
        badge: 'EXCLUSIVE',
        rating: 4.7,
        reviews: 298
    },
    {
        id: 24,
        name: 'Pine Mountain',
        desc: 'Alpine pine with fresh mountain air',
        price: 152,
        originalPrice: 182,
        category: 'woody',
        image: 'https://images.unsplash.com/photo-1605648916319-cf082f7524a1?w=500&h=600&fit=crop',
        badge: 'NEW',
        rating: 4.4,
        reviews: 156
    }
];

// State Management
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let currentSort = 'featured';
let currentView = 'grid';
let currentPage = 1;
const itemsPerPage = 12;
let filteredProducts = [...allProducts];

// Create Product Card HTML
function createProductCard(product, isListView = false) {
    const stars = '★'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
    const listClass = isListView ? 'list-item' : '';
    
    return `
        <div class="product-card ${listClass}" data-category="${product.category}">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-badge">${product.badge}</div>
                <button class="wishlist-btn" onclick="toggleWishlist(${product.id})">
                    ${wishlist.includes(product.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-rating">
                    <span class="stars">${stars}</span>
                    <span class="rating-count">(${product.reviews} reviews)</span>
                </div>
                <div class="product-footer">
                    <div class="price-box">
                        <div class="product-price">$${product.price}</div>
                        <div class="original-price">$${product.originalPrice}</div>
                    </div>
                    <button class="add-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

// Filter Products
function filterProducts(category) {
    currentFilter = category;
    currentPage = 1;
    
    if (category === 'all') {
        filteredProducts = [...allProducts];
    } else {
        filteredProducts = allProducts.filter(p => p.category === category);
    }
    
    sortProducts(currentSort);
}

// Sort Products
function sortProducts(sortType) {
    currentSort = sortType;
    
    switch(sortType) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'rating':
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            filteredProducts.sort((a, b) => a.id - b.id);
    }
    
    renderProducts();
}

// Search Products
function searchProducts(query) {
    const searchTerm = query.toLowerCase();
    
    if (searchTerm === '') {
        filteredProducts = currentFilter === 'all' 
            ? [...allProducts] 
            : allProducts.filter(p => p.category === currentFilter);
    } else {
        filteredProducts = allProducts.filter(p => 
            (currentFilter === 'all' || p.category === currentFilter) &&
            (p.name.toLowerCase().includes(searchTerm) || 
             p.desc.toLowerCase().includes(searchTerm) ||
             p.category.toLowerCase().includes(searchTerm))
        );
    }
    
    currentPage = 1;
    sortProducts(currentSort);
}

// Render Products
function renderProducts() {
    const container = document.getElementById('productsGrid');
    const isListView = currentView === 'list';
    
    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Render products
    container.className = isListView ? 'products-grid list-view' : 'products-grid';
    container.innerHTML = paginatedProducts.map(p => createProductCard(p, isListView)).join('');
    
    // Update count
    document.getElementById('productCount').textContent = filteredProducts.length;
    
    // Update pagination
    renderPagination();
}

// Render Pagination
function renderPagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    
    let paginationHTML = `
        <button class="page-btn" id="prevBtn" ${currentPage === 1 ? 'disabled' : ''}>← Prev</button>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
            paginationHTML += `
                <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="goToPage(${i})">${i}</button>
            `;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            paginationHTML += `<span style="color: rgba(255,255,255,0.4); padding: 0 10px;">...</span>`;
        }
    }
    
    paginationHTML += `
        <button class="page-btn" id="nextBtn" ${currentPage === totalPages ? 'disabled' : ''}>Next →</button>
    `;
    
    pagination.innerHTML = paginationHTML;
    
    // Add event listeners to prev/next buttons
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProducts();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Go to specific page
function goToPage(page) {
    currentPage = page;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add to Cart
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    cart.push(product);
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

// Toggle Wishlist
function toggleWishlist(productId) {
    const index = wishlist.indexOf(productId);
    const product = allProducts.find(p => p.id === productId);
    
    if (index === -1) {
        wishlist.push(productId);
        showNotification(`${product.name} added to wishlist! ❤️`);
    } else {
        wishlist.splice(index, 1);
        showNotification(`${product.name} removed from wishlist`);
    }
    
    renderProducts();
}

// Update Cart Count
function updateCartCount() {
    document.querySelector('.cart-badge').textContent = cart.length;
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideIn 0.5s ease-out reverse';
        setTimeout(() => notification.remove(), 500);
    }, 2500);
}

// Initialize Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Filter Pills
    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            const filter = pill.getAttribute('data-filter');
            filterProducts(filter);
        });
    });

    // Sort Dropdown
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });

    // View Toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.getAttribute('data-view');
            renderProducts();
        });
    });

    // Search
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    searchBtn.addEventListener('click', () => {
        searchProducts(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            searchProducts(searchInput.value);
        }
    });
    
    // Real-time search (debounced)
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchProducts(e.target.value);
        }, 300);
    });

    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Initialize
    renderProducts();
});