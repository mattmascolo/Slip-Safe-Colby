// SlipSafeCo JavaScript functionality

// Global variables
let counter = 0;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('SlipSafeCo application loaded');
    
    // Initialize the application
    initializeApp();
    
    // Set up event listeners
    setupEventListeners();
    
    // Add some initial animations
    addInitialAnimations();

    // Initialize tab component(s)
    initTabs();
});

// Initialize the application
function initializeApp() {
    // Update counter display
    updateCounterDisplay();
    
    // Set up HTMX event listeners
    setupHTMXListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmission);
    }
    
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', handleSmoothScroll);
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', handleKeyboardNavigation);
}

// Counter functions
function incrementCounter() {
    counter++;
    updateCounterDisplay();
    addCounterAnimation('increment');
}

function decrementCounter() {
    counter--;
    updateCounterDisplay();
    addCounterAnimation('decrement');
}

function updateCounterDisplay() {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.textContent = counter;
    }
}

function addCounterAnimation(type) {
    const counterElement = document.getElementById('counter');
    if (counterElement) {
        counterElement.classList.add('fade-in');
        setTimeout(() => {
            counterElement.classList.remove('fade-in');
        }, 500);
    }
}

// Form handling
function handleFormSubmission(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    showLoadingState();
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        hideLoadingState();
        showSuccessMessage('Thank you for your message! We\'ll get back to you soon.');
        event.target.reset();
    }, 2000);
}

function showLoadingState() {
    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = 'Sending...';
        submitButton.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function hideLoadingState() {
    const submitButton = document.querySelector('#contact-form button[type="submit"]');
    if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Send Message';
        submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

// Message display functions
function showSuccessMessage(message) {
    showMessage(message, 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showInfoMessage(message) {
    showMessage(message, 'info');
}

function showMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.status-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `status-message status-${type} mt-4 p-4 rounded fade-in`;
    messageElement.textContent = message;
    
    // Insert after the form
    const form = document.getElementById('contact-form');
    if (form) {
        form.parentNode.insertBefore(messageElement, form.nextSibling);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 5000);
    }
}

// HTMX event listeners
function setupHTMXListeners() {
    // Listen for HTMX events
    document.body.addEventListener('htmx:beforeRequest', function(event) {
        console.log('HTMX request starting:', event.detail);
    });
    
    document.body.addEventListener('htmx:afterRequest', function(event) {
        console.log('HTMX request completed:', event.detail);
    });
    
    document.body.addEventListener('htmx:responseError', function(event) {
        console.error('HTMX request failed:', event.detail);
        showErrorMessage('Request failed. Please try again.');
    });
}

// Smooth scrolling
function handleSmoothScroll(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Keyboard navigation
function handleKeyboardNavigation(event) {
    // Add keyboard shortcuts
    if (event.ctrlKey || event.metaKey) {
        switch(event.key) {
            case 'k':
                event.preventDefault();
                focusSearch();
                break;
            case '/':
                event.preventDefault();
                showKeyboardShortcuts();
                break;
        }
    }
    
    // Escape key to close modals or clear messages
    if (event.key === 'Escape') {
        clearMessages();
    }
}

function focusSearch() {
    // If you add a search input, focus it here
    console.log('Search focused');
}

function showKeyboardShortcuts() {
    const shortcuts = [
        'Ctrl/Cmd + K: Focus search',
        'Ctrl/Cmd + /: Show shortcuts',
        'Escape: Clear messages'
    ];
    
    showInfoMessage('Keyboard shortcuts: ' + shortcuts.join(' | '));
}

function clearMessages() {
    const messages = document.querySelectorAll('.status-message');
    messages.forEach(message => message.remove());
}

// Animation functions
function addInitialAnimations() {
    // Add fade-in animation to main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.classList.add('fade-in');
    }
    
    // Add staggered animation to feature cards
    const featureCards = document.querySelectorAll('.grid > div');
    featureCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 200);
    });
}

// Tabs component (data-tabs)
function initTabs() {
    const tabSections = document.querySelectorAll('[data-tabs]');
    tabSections.forEach(section => {
        const tabs = section.querySelectorAll('[data-tab-target]');
        const panels = section.querySelectorAll('[data-tab-panel]');

        // Define color schemes for each tab (aligned with initial HTML classes)
        const colorSchemes = {
            '1': { bg: 'bg-yellow-50', border: 'border-yellow-300', text: 'text-yellow-700', hover: 'hover:bg-yellow-100' },
            '2': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', hover: 'hover:bg-blue-100' },
            '3': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', hover: 'hover:bg-green-100' },
            '4': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', hover: 'hover:bg-purple-100' }
        };

        function activate(target) {
            panels.forEach(panel => {
                const isActive = panel.getAttribute('data-tab-panel') === target;
                panel.classList.toggle('hidden', !isActive);
            });
            tabs.forEach(tab => {
                const tabTarget = tab.getAttribute('data-tab-target');
                const selected = tabTarget === target;
                const colors = colorSchemes[tabTarget] || colorSchemes['1'];
                
                tab.setAttribute('aria-selected', selected ? 'true' : 'false');
                
                // Remove all possible color and hover classes, plus default states
                Object.values(colorSchemes).forEach(scheme => {
                    tab.classList.remove(scheme.bg, scheme.border, scheme.text, scheme.hover);
                });
                tab.classList.remove('bg-white', 'border-slate-200', 'border-gray-200', 'text-slate-700', 'hover:bg-slate-50');
                
                // Add appropriate classes based on state
                if (selected) {
                    tab.classList.add(colors.bg, colors.border, colors.text, colors.hover);
                } else {
                    tab.classList.add('bg-white', 'border-gray-200', 'text-slate-700', 'hover:bg-slate-50');
                }
            });
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => activate(tab.getAttribute('data-tab-target')));
        });

        // Set default active
        const first = tabs[0];
        if (first) activate(first.getAttribute('data-tab-target'));
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Scroll-based animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.card-hover, .bg-white');
    animatedElements.forEach(el => observer.observe(el));
}

// Initialize scroll animations when DOM is ready
document.addEventListener('DOMContentLoaded', setupScrollAnimations);

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        incrementCounter,
        decrementCounter,
        showMessage,
        debounce,
        throttle
    };
}