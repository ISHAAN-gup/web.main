// Admin Panel JavaScript

// Default admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

// Initialize localStorage with default content if not exists
function initializeStorage() {
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

    // Check if content exists in localStorage, if not, set defaults
    if (!localStorage.getItem('shopContent')) {
        localStorage.setItem('shopContent', JSON.stringify(defaultContent));
    }
}

// Check if admin is logged in
function isAdminLoggedIn() {
    return localStorage.getItem('adminLoggedIn') === 'true';
}

// Login functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeStorage();
    
    const loginSection = document.getElementById('login-section');
    const adminDashboard = document.getElementById('admin-dashboard');
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const logoutBtn = document.getElementById('logout-btn');

    // Check login status
    if (isAdminLoggedIn()) {
        showDashboard();
        loadAllContent();
    } else {
        showLogin();
    }

    // Login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
                localStorage.setItem('adminLoggedIn', 'true');
                showDashboard();
                loadAllContent();
                loginError.textContent = '';
            } else {
                loginError.textContent = 'Invalid username or password';
            }
        });
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('adminLoggedIn');
            showLogin();
        });
    }

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showSection(section);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Form submissions
    setupFormHandlers();
});

function showLogin() {
    document.getElementById('login-section').style.display = 'flex';
    document.getElementById('admin-dashboard').style.display = 'none';
}

function showDashboard() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
}

function showSection(sectionName) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

function setupFormHandlers() {
    // General Settings Form
    const generalForm = document.getElementById('general-form');
    if (generalForm) {
        generalForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveContent('shopName', document.getElementById('shop-name-input').value);
            saveContent('footerText', document.getElementById('footer-text-input').value);
            showSuccessMessage('General settings saved successfully!');
        });
    }

    // Hero Section Form
    const heroForm = document.getElementById('hero-form');
    if (heroForm) {
        heroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveContent('heroTitle', document.getElementById('hero-title-input').value);
            saveContent('heroDescription', document.getElementById('hero-description-input').value);
            saveContent('heroImage', document.getElementById('hero-image-input').value);
            showSuccessMessage('Hero section saved successfully!');
        });
    }

    // About Section Form
    const aboutForm = document.getElementById('about-form');
    if (aboutForm) {
        aboutForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveContent('aboutTitle', document.getElementById('about-title-input').value);
            saveContent('aboutDescription', document.getElementById('about-description-input').value);
            saveContent('feature1', document.getElementById('feature1-input').value);
            saveContent('feature2', document.getElementById('feature2-input').value);
            saveContent('feature3', document.getElementById('feature3-input').value);
            showSuccessMessage('About section saved successfully!');
        });
    }

    // Products Section Form
    const productsForm = document.getElementById('products-form');
    if (productsForm) {
        productsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveContent('productsTitle', document.getElementById('products-title-input').value);
            saveContent('product1Name', document.getElementById('product1-name-input').value);
            saveContent('product1Desc', document.getElementById('product1-desc-input').value);
            saveContent('product2Name', document.getElementById('product2-name-input').value);
            saveContent('product2Desc', document.getElementById('product2-desc-input').value);
            saveContent('product3Name', document.getElementById('product3-name-input').value);
            saveContent('product3Desc', document.getElementById('product3-desc-input').value);
            showSuccessMessage('Products section saved successfully!');
        });
    }

    // Contact Section Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            saveContent('contactTitle', document.getElementById('contact-title-input').value);
            saveContent('addressText', document.getElementById('address-text-input').value);
            saveContent('phoneText', document.getElementById('phone-text-input').value);
            saveContent('hoursText', document.getElementById('hours-text-input').value);
            showSuccessMessage('Contact information saved successfully!');
        });
    }
}

function saveContent(key, value) {
    const content = JSON.parse(localStorage.getItem('shopContent'));
    content[key] = value;
    localStorage.setItem('shopContent', JSON.stringify(content));
}

function loadAllContent() {
    const content = JSON.parse(localStorage.getItem('shopContent'));
    
    // Load general settings
    if (document.getElementById('shop-name-input')) {
        document.getElementById('shop-name-input').value = content.shopName;
        document.getElementById('footer-text-input').value = content.footerText;
    }

    // Load hero section
    if (document.getElementById('hero-title-input')) {
        document.getElementById('hero-title-input').value = content.heroTitle;
        document.getElementById('hero-description-input').value = content.heroDescription;
        document.getElementById('hero-image-input').value = content.heroImage;
    }

    // Load about section
    if (document.getElementById('about-title-input')) {
        document.getElementById('about-title-input').value = content.aboutTitle;
        document.getElementById('about-description-input').value = content.aboutDescription;
        document.getElementById('feature1-input').value = content.feature1;
        document.getElementById('feature2-input').value = content.feature2;
        document.getElementById('feature3-input').value = content.feature3;
    }

    // Load products section
    if (document.getElementById('products-title-input')) {
        document.getElementById('products-title-input').value = content.productsTitle;
        document.getElementById('product1-name-input').value = content.product1Name;
        document.getElementById('product1-desc-input').value = content.product1Desc;
        document.getElementById('product2-name-input').value = content.product2Name;
        document.getElementById('product2-desc-input').value = content.product2Desc;
        document.getElementById('product3-name-input').value = content.product3Name;
        document.getElementById('product3-desc-input').value = content.product3Desc;
    }

    // Load contact section
    if (document.getElementById('contact-title-input')) {
        document.getElementById('contact-title-input').value = content.contactTitle;
        document.getElementById('address-text-input').value = content.addressText;
        document.getElementById('phone-text-input').value = content.phoneText;
        document.getElementById('hours-text-input').value = content.hoursText;
    }

    // Load image previews
    loadImagePreviews(content);
}

function loadImagePreviews(content) {
    const heroPreview = document.getElementById('hero-preview');
    if (heroPreview) {
        heroPreview.src = content.heroImage || 'https://via.placeholder.com/300x200/3498db/ffffff?text=Hero+Image';
    }

    const product1Preview = document.getElementById('product1-preview');
    if (product1Preview) {
        product1Preview.src = content.product1Image || 'https://via.placeholder.com/200x150/27ae60/ffffff?text=Product+1';
    }

    const product2Preview = document.getElementById('product2-preview');
    if (product2Preview) {
        product2Preview.src = content.product2Image || 'https://via.placeholder.com/200x150/e74c3c/ffffff?text=Product+2';
    }

    const product3Preview = document.getElementById('product3-preview');
    if (product3Preview) {
        product3Preview.src = content.product3Image || 'https://via.placeholder.com/200x150/f39c12/ffffff?text=Product+3';
    }
}

function showSuccessMessage(message) {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    // Insert at the top of the current active section
    const activeSection = document.querySelector('.content-section.active');
    if (activeSection) {
        activeSection.insertBefore(successDiv, activeSection.firstChild);
        
        // Remove after 3 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 3000);
    }
}

// Image update functions
function updateImage(imageType) {
    const content = JSON.parse(localStorage.getItem('shopContent'));
    let urlInput, previewImg, storageKey;
    
    switch(imageType) {
        case 'hero':
            urlInput = document.getElementById('hero-image-url');
            previewImg = document.getElementById('hero-preview');
            storageKey = 'heroImage';
            break;
        case 'product1':
            urlInput = document.getElementById('product1-image-url');
            previewImg = document.getElementById('product1-preview');
            storageKey = 'product1Image';
            break;
        case 'product2':
            urlInput = document.getElementById('product2-image-url');
            previewImg = document.getElementById('product2-preview');
            storageKey = 'product2Image';
            break;
        case 'product3':
            urlInput = document.getElementById('product3-image-url');
            previewImg = document.getElementById('product3-preview');
            storageKey = 'product3Image';
            break;
    }
    
    if (urlInput && urlInput.value) {
        const newUrl = urlInput.value;
        content[storageKey] = newUrl;
        localStorage.setItem('shopContent', JSON.stringify(content));
        
        if (previewImg) {
            previewImg.src = newUrl;
        }
        
        urlInput.value = '';
        showSuccessMessage('Image updated successfully!');
    }
}
