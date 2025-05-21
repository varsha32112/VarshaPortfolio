// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing animation for header text
const headerText = document.querySelector('.header-text p');
const text = headerText.textContent;
headerText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        headerText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when page loads
window.addEventListener('load', typeWriter);

// Animate elements when they come into view
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section, .work, .services-list div').forEach((el) => {
    observer.observe(el);
});

// Add hover effect to project cards
document.querySelectorAll('.work').forEach(work => {
    work.addEventListener('mouseenter', () => {
        work.querySelector('.layer').style.height = '100%';
    });
    
    work.addEventListener('mouseleave', () => {
        work.querySelector('.layer').style.height = '0';
    });
});

// Form validation
const form = document.forms['submit-to-google-sheet'];
const inputs = form.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.classList.add('error');
    });

    input.addEventListener('input', () => {
        if (input.validity.valid) {
            input.classList.remove('error');
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        }
    });
});

// Add parallax effect to header
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const scrolled = window.pageYOffset;
    header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Menu functionality
const sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('sidemenu');
    const menuButton = document.querySelector('.fa-bars');
    
    if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        menu.style.right = "-200px";
    }
});

// Close menu when clicking on a link
document.querySelectorAll('#sidemenu a').forEach(link => {
    link.addEventListener('click', () => {
        sidemenu.style.right = "-200px";
    });
});
