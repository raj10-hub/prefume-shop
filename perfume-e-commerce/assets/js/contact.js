
        // Smooth scroll for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.boxShadow = '0 2px 30px rgba(212, 175, 55, 0.2)';
            } else {
                navbar.style.boxShadow = 'none';
            }
        });

        // FAQ Accordion
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentElement;
                const isActive = faqItem.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });

        // Contact Form Submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = e.target.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            // Disable button and show loading
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Sending...</span>';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                // Show success message
                const successMsg = document.getElementById('successMessage');
                successMsg.classList.add('show');
                
                // Reset form
                e.target.reset();
                
                // Re-enable button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.classList.remove('show');
                }, 5000);
            }, 2000);
        });

        // Animate elements on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe info cards and FAQ items
        document.querySelectorAll('.info-card, .faq-item, .hour-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease-out';
            observer.observe(el);
        });

        // Stagger animation for info cards
        document.querySelectorAll('.info-card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });

        // Social icons click
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('click', function() {
                const platform = this.getAttribute('data-platform');
                if (platform) {
                    const platforms = {
                        'facebook': 'Facebook',
                        'instagram': 'Instagram',
                        'twitter': 'Twitter',
                        'linkedin': 'LinkedIn'
                    };
                    alert(`Visit us on ${platforms[platform]}!`);
                } else {
                    const icons = ['📘', '📸', '🐦', '💼'];
                    const networks = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'];
                    const iconText = this.textContent.trim();
                    const index = icons.indexOf(iconText);
                    if (index !== -1) {
                        alert(`Visit us on ${networks[index]}!`);
                    }
                }
            });
        });

        // Logo click to go home
        document.querySelector('.logo').addEventListener('click', () => {
            window.location.href = 'index.html';
        });

        // Cart button
        document.querySelector('.cart-btn').addEventListener('click', () => {
            alert('Cart functionality - Coming soon!');
        });

        // Search button
        document.querySelector('.icon-btn:first-child').addEventListener('click', () => {
            alert('Search functionality - Coming soon!');
        });

        // Form validation enhancement
        const form = document.getElementById('contactForm');
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                if (input.value.trim() === '') {
                    input.style.borderColor = 'rgba(236, 72, 153, 0.5)';
                } else {
                    input.style.borderColor = 'rgba(139, 92, 246, 0.5)';
                }
            });
            
            input.addEventListener('focus', () => {
                input.style.borderColor = 'var(--gold)';
            });
        });

        // Email validation
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('blur', () => {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value) && emailInput.value !== '') {
                emailInput.style.borderColor = 'rgba(236, 72, 153, 0.5)';
            }
        });

        // Phone number formatting (basic)
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                if (value.length <= 3) {
                    e.target.value = value;
                } else if (value.length <= 6) {
                    e.target.value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                } else {
                    e.target.value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                }
            }
        });

        // Parallax effect for hero
        window.addEventListener('scroll', () => {
            const hero = document.querySelector('.page-hero');
            const scrolled = window.pageYOffset;
            if (hero && scrolled < hero.offsetHeight) {
                hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        });

        // Auto-resize textarea
        const textarea = document.getElementById('message');
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });

        // Character counter for message (optional)
        const maxLength = 1000;
        textarea.addEventListener('input', function() {
            const remaining = maxLength - this.value.length;
            if (remaining < 100) {
                console.log(`Characters remaining: ${remaining}`);
            }
        });

        // Page load animation
        window.addEventListener('load', () => {
            document.body.style.opacity = '0';
            setTimeout(() => {
                document.body.style.transition = 'opacity 0.5s';
                document.body.style.opacity = '1';
            }, 100);
        });

        console.log('Contact page loaded successfully! ✨');
