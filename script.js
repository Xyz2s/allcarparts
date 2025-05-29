// Mobile menu functionality
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            navLinks.classList.remove('active');
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    // Here you would typically send the form data to a server
    console.log('Form submitted:', formObject);
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        navbar.style.backgroundColor = '#1a1a1a';
    }
});

// Read More functionality
document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.part-card');
        const details = card.querySelector('.part-details');
        const isHidden = details.classList.contains('hidden');
        
        // Toggle the hidden class
        details.classList.toggle('hidden');
        
        // Update button text
        this.textContent = isHidden ? 'Show Less' : 'Read More';
        
        // Smooth scroll to the details if showing
        if (isHidden) {
            details.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    });
});

// View Details button functionality
document.querySelectorAll('.shop-button').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.part-card');
        const partName = card.querySelector('h3').textContent;
        alert(`You clicked on ${partName}. This would typically take you to a detailed product page.`);
    });
}); 