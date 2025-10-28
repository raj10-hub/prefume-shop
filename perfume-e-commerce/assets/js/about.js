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

// Observe stat cards, mission cards, team cards, and value items
document.querySelectorAll('.stat-card, .mission-card, .team-card, .value-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// Stagger animation delay for better effect
document.querySelectorAll('.stat-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.mission-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.team-card').forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

document.querySelectorAll('.value-item').forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
});

// CTA button click
document.querySelector('.cta-btn').addEventListener('click', () => {
    window.location.href = 'index.html#shop';
});

// Cart counter (dummy for demo)
let cartCount = 0;

document.querySelector('.cart-btn').addEventListener('click', () => {
    alert('Cart functionality - Coming soon!');
});

// Search button
document.querySelector('.icon-btn:first-child').addEventListener('click', () => {
    alert('Search functionality - Coming soon!');
});

// Logo click to go home
document.querySelector('.logo').addEventListener('click', () => {
    window.location.href = 'index.html';
});

// Social icons interaction
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const icons = ['📘', '📸', '🐦', '💼'];
        const networks = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'];
        const index = Array.from(this.parentElement.children).indexOf(this);
        alert(`Visit us on ${networks[index]}!`);
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.page-hero');
    const scrolled = window.pageYOffset;
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const number = entry.target.querySelector('.stat-number');
            const value = parseInt(number.textContent);
            entry.target.classList.add('counted');
            animateCounter(number, value);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card').forEach(card => {
    statsObserver.observe(card);
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('About Us page loaded successfully! ✨');