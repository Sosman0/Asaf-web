// Initialize the Swiper slider with enhanced features
const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable continuous loop mode
    autoplay: {
        delay: 5000, // Auto-slide every 5 seconds
        disableOnInteraction: false, // Keep autoplay enabled after user interaction
    },
    speed: 800, // Transition speed between slides in milliseconds
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Enable clickable pagination
        renderBullet: function (index, className) {
            // Customize pagination bullet styles
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
    breakpoints: {
        // Responsive breakpoints
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
    effect: 'slide', // Transition effect ("slide", "fade", "cube", "coverflow", or "flip")
});

// Add smooth scrolling for "Learn More" links
const learnMoreLinks = document.querySelectorAll('.learn-more');
learnMoreLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling
                block: 'start',
            });
        }
    });
});

// Lazy loading for images
const lazyImages = document.querySelectorAll('img');
lazyImages.forEach((img) => {
    img.loading = 'lazy'; // Enable lazy loading
    img.addEventListener('load', () => {
        img.classList.add('loaded'); // Add a class for additional styles or effects
    });
});

// Highlight active navigation link
const navLinks = document.querySelectorAll('.navbar-links a');
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((nav) => nav.classList.remove('active'));
        link.classList.add('active'); // Highlight the clicked link
    });
});
