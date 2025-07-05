// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', function() {
        preloader.classList.add('hide');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
    }
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        
        // Save theme preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Navigation Scroll Effect
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        // Header scroll effect
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Back to top button visibility
        const backToTop = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
        // Active nav link based on scroll position
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (hamburger.classList.contains('active')) {
                toggleMobileMenu();
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinksContainer = document.querySelector('.nav-links');
    
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }
    
    hamburger.addEventListener('click', toggleMobileMenu);

    // Back to Top Button
    const backToTopButton = document.querySelector('.back-to-top');
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Basic form validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all fields', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            // Simulate form submission (replace with actual form submission)
            showFormMessage('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
        });
    }
    
    function showFormMessage(message, type) {
        // Check if message element already exists
        let messageElement = document.querySelector('.form-message');
        
        // If not, create a new one
        if (!messageElement) {
            messageElement = document.createElement('div');
            messageElement.className = 'form-message';
            contactForm.appendChild(messageElement);
        }
        
        // Set message content and style
        messageElement.textContent = message;
        messageElement.className = `form-message ${type}`;
        
        // Auto-remove message after 5 seconds
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-card, .timeline-item, .contact-item, .stat');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    };
    
    // Run animation check on load and scroll
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);

    // Typing effect for hero section
    const typingElement = document.querySelector('.hero-content h2');
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 1000);
    }

    // Add CSS class for animations
    const addAnimationCSS = function() {
        const style = document.createElement('style');
        style.textContent = `
            .skill-card, .timeline-item, .contact-item, .stat {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .skill-card.animate, .timeline-item.animate, .contact-item.animate, .stat.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            .skill-card:nth-child(1) { transition-delay: 0.1s; }
            .skill-card:nth-child(2) { transition-delay: 0.2s; }
            .skill-card:nth-child(3) { transition-delay: 0.3s; }
            .skill-card:nth-child(4) { transition-delay: 0.4s; }
            .skill-card:nth-child(5) { transition-delay: 0.5s; }
            
            .timeline-item:nth-child(1) { transition-delay: 0.1s; }
            .timeline-item:nth-child(2) { transition-delay: 0.3s; }
            
            .contact-item:nth-child(1) { transition-delay: 0.1s; }
            .contact-item:nth-child(2) { transition-delay: 0.2s; }
            .contact-item:nth-child(3) { transition-delay: 0.3s; }
            
            .stat:nth-child(1) { transition-delay: 0.1s; }
            .stat:nth-child(2) { transition-delay: 0.2s; }
            .stat:nth-child(3) { transition-delay: 0.3s; }
            
            .form-message {
                padding: 10px;
                margin-top: 10px;
                border-radius: 4px;
                text-align: center;
            }
            
            .form-message.success {
                background-color: rgba(76, 175, 80, 0.1);
                color: #4CAF50;
                border: 1px solid #4CAF50;
            }
            
            .form-message.error {
                background-color: rgba(244, 67, 54, 0.1);
                color: #F44336;
                border: 1px solid #F44336;
            }
            
            body.no-scroll {
                overflow: hidden;
            }
        `;
        document.head.appendChild(style);
    };
    
    addAnimationCSS();
});