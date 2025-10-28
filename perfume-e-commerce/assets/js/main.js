
        // Product Data with Images
        const products = [
            {
                id: 1,
                name: 'Midnight Rose',
                desc: 'A captivating blend of Bulgarian rose and night jasmine',
                price: 129,
                category: 'floral',
                image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=600&fit=crop',
                badge: 'BESTSELLER'
            },
            {
                id: 2,
                name: 'Ocean Breeze',
                desc: 'Fresh marine notes with citrus undertones',
                price: 149,
                category: 'fresh',
                image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&h=600&fit=crop',
                badge: 'NEW'
            },
            {
                id: 3,
                name: 'Amber Nights',
                desc: 'Warm amber with hints of vanilla and musk',
                price: 169,
                category: 'oriental',
                image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=600&fit=crop',
                badge: 'LUXURY'
            },
            {
                id: 4,
                name: 'Forest Whisper',
                desc: 'Earthy cedarwood and pine with a touch of moss',
                price: 159,
                category: 'woody',
                image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59bd9?w=500&h=600&fit=crop',
                badge: 'TRENDING'
            },
            {
                id: 5,
                name: 'Lavender Dreams',
                desc: 'Soothing lavender with bergamot and chamomile',
                price: 139,
                category: 'floral',
                image: 'https://images.unsplash.com/photo-1528532042617-0dd541348fd8?w=500&h=600&fit=crop',
                badge: 'POPULAR'
            },
            {
                id: 6,
                name: 'Citrus Burst',
                desc: 'Vibrant orange, lemon, and grapefruit blend',
                price: 119,
                category: 'fresh',
                image: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=500&h=600&fit=crop',
                badge: 'ENERGIZING'
            },
            {
                id: 7,
                name: 'Sandalwood Essence',
                desc: 'Rich sandalwood with patchouli undertones',
                price: 179,
                category: 'woody',
                image: 'https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=500&h=600&fit=crop',
                badge: 'PREMIUM'
            },
            {
                id: 8,
                name: 'Spice Market',
                desc: 'Exotic blend of cardamom, saffron, and oud',
                price: 189,
                category: 'oriental',
                image: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=500&h=600&fit=crop',
                badge: 'EXCLUSIVE'
            }
        ];

        let cart = [];
        let currentFilter = 'all';

        // Create Product Card HTML
        function createProductCard(product) {
            return `
                <div class="product-card" data-category="${product.category}">
                    <div class="product-img">
                        <img src="${product.image}" alt="${product.name}">
                        <div class="product-badge">${product.badge}</div>
                    </div>
                    <div class="product-info">
                        <div class="product-category">${product.category}</div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-desc">${product.desc}</p>
                        <div class="product-footer">
                            <div class="product-price">${product.price}</div>
                            <button class="add-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        }

        // Initialize Featured Products Scroll
        function initFeaturedScroll() {
            const container = document.getElementById('featuredScroll');
            const featuredProducts = products.slice(0, 4);
            
            // Duplicate products for seamless scroll
            const productsHTML = featuredProducts.map(createProductCard).join('');
            container.innerHTML = productsHTML + productsHTML;
        }

        // Initialize Shop Products Scroll
        function initShopScroll() {
            const container = document.getElementById('shopScroll');
            const productsHTML = products.map(createProductCard).join('');
            container.innerHTML = productsHTML + productsHTML;
        }

        // Filter Products
        function filterProducts(category) {
            const container = document.getElementById('shopScroll');
            const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
            const productsHTML = filteredProducts.map(createProductCard).join('');
            container.innerHTML = productsHTML + productsHTML;
        }

        // Add to Cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCartCount();
            showNotification(`${product.name} added to cart!`);
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

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth Scroll Navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
            
                // Check if the link is an in-page anchor (starts with "#")
                if (href.startsWith('#')) {
                    e.preventDefault(); // Prevent default only for in-page links
                
                    const target = document.querySelector(href);
                    if (target) {
                        const offset = 80;
                        const targetPosition = target.offsetTop - offset;
                    
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    
                        // Update active link
                        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    }
                } else {
                    // Allow normal navigation for other pages (like index.html, contact.html, etc.)
                    window.location.href = href;
                }
            });
        });


        // Filter Pills
        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.addEventListener('click', () => {
                document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                const filter = pill.getAttribute('data-filter');
                filterProducts(filter);
            });
        });

        // Hero Buttons
        document.querySelector('.btn-primary').addEventListener('click', () => {
            document.querySelector('#shop').scrollIntoView({ behavior: 'smooth' });
        });

        document.querySelector('.btn-secondary').addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });

        // Contact Form
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you! Your message has been sent successfully.');
            e.target.reset();
        });

        // Initialize
        initFeaturedScroll();
        initShopScroll();