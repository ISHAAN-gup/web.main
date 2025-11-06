// Main Website JavaScript - Connects to Admin Panel

// Load content from localStorage and update the website
document.addEventListener('DOMContentLoaded', function() {
    loadWebsiteContent();
});

function loadWebsiteContent() {
    const content = JSON.parse(localStorage.getItem('shopContent'));
    
    if (!content) {
        // Initialize with default content if not exists
        initializeDefaultContent();
        return;
    }
    
    // Update all website elements with content from localStorage
    
    // General Settings
    const shopNameElement = document.getElementById('shop-name');
    if (shopNameElement) {
        shopNameElement.textContent = content.shopName || 'Delhi Local Shop';
    }
    
    const footerElement = document.getElementById('footer-text');
    if (footerElement) {
        footerElement.textContent = content.footerText || '© 2024 Delhi Local Shop. All rights reserved.';
    }
    
    // Hero Section
    const heroTitleElement = document.getElementById('hero-title');
    if (heroTitleElement) {
        heroTitleElement.textContent = content.heroTitle || 'Welcome to Our Local Shop';
    }
    
    const heroDescriptionElement = document.getElementById('hero-description');
    if (heroDescriptionElement) {
        heroDescriptionElement.textContent = content.heroDescription || 'Your trusted neighborhood store in Delhi, offering quality products at affordable prices.';
    }
    
    const heroImageElement = document.getElementById('hero-img');
    if (heroImageElement) {
        heroImageElement.src = content.heroImage || 'https://via.placeholder.com/600x400/3498db/ffffff?text=Shop+Image';
        heroImageElement.alt = content.heroTitle || 'Shop Image';
    }
    
    // About Section
    const aboutTitleElement = document.getElementById('about-title');
    if (aboutTitleElement) {
        aboutTitleElement.textContent = content.aboutTitle || 'About Our Shop';
    }
    
    const aboutDescriptionElement = document.getElementById('about-description');
    if (aboutDescriptionElement) {
        aboutDescriptionElement.textContent = content.aboutDescription || 'We are a family-owned local shop serving the Delhi community for over 10 years. We pride ourselves on offering fresh, quality products with personalized customer service.';
    }
    
    const feature1Element = document.getElementById('feature1-text');
    if (feature1Element) {
        feature1Element.textContent = content.feature1 || 'Daily fresh arrivals of fruits, vegetables, and groceries';
    }
    
    const feature2Element = document.getElementById('feature2-text');
    if (feature2Element) {
        feature2Element.textContent = content.feature2 || 'Serving Delhi community with love and care';
    }
    
    const feature3Element = document.getElementById('feature3-text');
    if (feature3Element) {
        feature3Element.textContent = content.feature3 || 'Competitive prices for quality products';
    }
    
    // Products Section
    const productsTitleElement = document.getElementById('products-title');
    if (productsTitleElement) {
        productsTitleElement.textContent = content.productsTitle || 'Our Products';
    }
    
    const product1NameElement = document.getElementById('product1-name');
    if (product1NameElement) {
        product1NameElement.textContent = content.product1Name || 'Fresh Fruits';
    }
    
    const product1DescElement = document.getElementById('product1-desc');
    if (product1DescElement) {
        product1DescElement.textContent = content.product1Desc || 'Seasonal fresh fruits from local farms';
    }
    
    const product2NameElement = document.getElementById('product2-name');
    if (product2NameElement) {
        product2NameElement.textContent = content.product2Name || 'Fresh Vegetables';
    }
    
    const product2DescElement = document.getElementById('product2-desc');
    if (product2DescElement) {
        product2DescElement.textContent = content.product2Desc || 'Daily fresh vegetables';
    }
    
    const product3NameElement = document.getElementById('product3-name');
    if (product3NameElement) {
        product3NameElement.textContent = content.product3Name || 'Groceries';
    }
    
    const product3DescElement = document.getElementById('product3-desc');
    if (product3DescElement) {
        product3DescElement.textContent = content.product3Desc || 'All your daily grocery needs';
    }
    
    // Update product images if they exist
    updateProductImages(content);
    
    // Contact Section
    const contactTitleElement = document.getElementById('contact-title');
    if (contactTitleElement) {
        contactTitleElement.textContent = content.contactTitle || 'Contact Us';
    }
    
    const addressElement = document.getElementById('address-text');
    if (addressElement) {
        addressElement.textContent = content.addressText || '123 Main Street, Delhi - 110001';
    }
    
    const phoneElement = document.getElementById('phone-text');
    if (phoneElement) {
        phoneElement.textContent = content.phoneText || '+91 98765 43210';
    }
    
    const hoursElement = document.getElementById('hours-text');
    if (hoursElement) {
        hoursElement.textContent = content.hoursText || 'Mon-Sat: 8AM-8PM, Sun: 9AM-6PM';
    }
}

function updateProductImages(content) {
    // Find all product cards and update their images
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        const img = card.querySelector('img');
        if (img) {
            switch(index) {
                case 0:
                    if (content.product1Image) {
                        img.src = content.product1Image;
                    }
                    break;
                case 1:
                    if (content.product2Image) {
                        img.src = content.product2Image;
                    }
                    break;
                case 2:
                    if (content.product3Image) {
                        img.src = content.product3Image;
                    }
                    break;
            }
        }
    });
}

function initializeDefaultContent() {
    const defaultContent = {
        shopName: 'Delhi Local Shop',
        heroTitle: 'Welcome to Our Local Shop',
        heroDescription: 'Your trusted neighborhood store in Delhi, offering quality products at affordable prices.',
        heroImage: 'https://via.placeholder.com/600x400/3498db/ffffff?text=Shop+Image',
        aboutTitle: 'About Our Shop',
        aboutDescription: 'We are a family-owned local shop serving the Delhi community for over 10 years. We pride ourselves on offering fresh, quality products with personalized customer service.',
        feature1: 'Daily fresh arrivals of fruits, vegetables, and groceries',
        feature2: 'Serving Delhi community with love and care',
        feature3: 'Competitive prices for quality products',
        productsTitle: 'Our Products',
        product1Name: 'Fresh Fruits',
        product1Desc: 'Seasonal fresh fruits from local farms',
        product1Image: 'https://via.placeholder.com/300x200/27ae60/ffffff?text=Fresh+Fruits',
        product2Name: 'Fresh Vegetables',
        product2Desc: 'Daily fresh vegetables',
        product2Image: 'https://via.placeholder.com/300x200/e74c3c/ffffff?text=Vegetables',
        product3Name: 'Groceries',
        product3Desc: 'All your daily grocery needs',
        product3Image: 'https://via.placeholder.com/300x200/f39c12/ffffff?text=Groceries',
        contactTitle: 'Contact Us',
        addressText: '123 Main Street, Delhi - 110001',
        phoneText: '+91 98765 43210',
        hoursText: 'Mon-Sat: 8AM-8PM, Sun: 9AM-6PM',
        footerText: '© 2024 Delhi Local Shop. All rights reserved.'
    };
    
    localStorage.setItem('shopContent', JSON.stringify(defaultContent));
    loadWebsiteContent();
}

// Listen for storage changes (when admin updates content)
window.addEventListener('storage', function(e) {
    if (e.key === 'shopContent') {
        loadWebsiteContent();
    }
});

// Add smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(102, 126, 234, 0.95)';
        } else {
            header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        }
    });
});
