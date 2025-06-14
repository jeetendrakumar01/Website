// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetID = href.substring(1);
            const targetSection = document.getElementById(targetID);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
});

// Dropdown toggle for mobile
document.querySelectorAll('.nav-links > li').forEach(item => {
    item.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            const dropdown = item.querySelector('.dropdown-content');
            if (dropdown) {
                e.preventDefault();
                dropdown.classList.toggle('show');
            }
        }
    });
});

// Business streams tab switching
const businessNavLinks = document.querySelectorAll('.business-nav ul li a');
const businessDetails = document.querySelectorAll('.business-detail');

businessNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);

        // Remove active class from all links and details
        businessNavLinks.forEach(l => l.classList.remove('active'));
        businessDetails.forEach(detail => detail.classList.remove('active'));

        // Add active class to clicked link and corresponding detail
        link.classList.add('active');
        const targetDetail = document.getElementById(targetId);
        if (targetDetail) {
            targetDetail.classList.add('active');
        }
    });
});

// Project showcase slider
const slides = document.querySelectorAll('.slide');
const prevSlide = document.querySelector('.prev-slide');
const nextSlide = document.querySelector('.next-slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

if (nextSlide && prevSlide) {
    nextSlide.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevSlide.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Initialize slider
    showSlide(currentSlide);
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from(".hero-content", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power3.out"
});

gsap.to(".hero-bg", {
    scale: 1.1,
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    }
});

// Section animations
document.querySelectorAll('.about-section, .projects-section, .showcase-section').forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});

// Business detail card animations
document.querySelectorAll('.business-detail').forEach(detail => {
    gsap.from(detail, {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
            trigger: detail,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// Stats counter animation
document.querySelectorAll('.stat-number').forEach(stat => {
    gsap.to(stat, {
        innerText: stat.getAttribute('data-target'),
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
            trigger: stat,
            start: "top 85%",
            toggleActions: "play none none none"
        },
        onUpdate: function () {
            stat.innerText = Math.ceil(stat.innerText);
        }
    });
});

// Slider animation
document.querySelectorAll('.slide').forEach(slide => {
    gsap.from(slide, {
        opacity: 0,
        x: 100,
        duration: 1,
        scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            toggleActions: "play none none none"
        }
    });
});