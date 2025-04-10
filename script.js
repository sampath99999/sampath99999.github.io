// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
const cursorFollower = document.querySelector('.custom-cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 100);
});

// Hover effect for links and buttons
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursorFollower.style.transform = 'scale(1.5)';
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursorFollower.style.transform = 'scale(1)';
    });
});

// Scroll Reveal
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: true
});

sr.reveal('.reveal', { interval: 200 });

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from('#home h2', {
    duration: 1,
    y: 100,
    opacity: 0,
    delay: 0.5,
    ease: 'power4.out'
});

gsap.from('#home h1', {
    duration: 1,
    y: 100,
    opacity: 0,
    delay: 0.7,
    ease: 'power4.out'
});

gsap.from('#home p', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.9,
    ease: 'power4.out'
});

// Skill Cards Animation
gsap.utils.toArray('.skill-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Timeline Animation
gsap.utils.toArray('.timeline-item').forEach(item => {
    gsap.from(item, {
        scrollTrigger: {
            trigger: item,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Project Cards Animation
gsap.utils.toArray('.project-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                document.getElementById('mobile-menu-button').innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            }

            // Smooth scroll to target
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile Menu Toggle
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', (e) => {
        e.stopPropagation();
        mobileMenu.classList.toggle('hidden');
        menuButton.innerHTML = mobileMenu.classList.contains('hidden') 
            ? '<i class="fas fa-bars text-2xl"></i>'
            : '<i class="fas fa-times text-2xl"></i>';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenu.classList.contains('hidden') && 
            !menuButton.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            menuButton.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
        }
    });

    // Prevent clicks inside mobile menu from closing it
    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Typing Effect for Hero Section
const text = "I build things for the web.";
const heroText = document.querySelector('#home h2.text-4xl');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after a delay
setTimeout(typeWriter, 1000);

// Parallax Effect for Hero Section
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    gsap.to('#home .md\\:w-1\\/2', {
        x: moveX,
        y: moveY,
        duration: 1,
        ease: 'power2.out'
    });
}); 