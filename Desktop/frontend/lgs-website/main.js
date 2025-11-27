// Initialize animations and interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    initializeCarousels();
    initializeScrollEffects();
    initializeCourseModals();
});

// Initialize entrance animations
function initializeAnimations() {
    // Animate hero section elements
    anime({
        targets: '.hero-bg h1',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: 300,
        easing: 'easeOutQuart'
    });

    anime({
        targets: '.hero-bg p',
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 800,
        delay: 600,
        easing: 'easeOutQuart'
    });

    anime({
        targets: '.hero-bg button',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
        delay: 900,
        easing: 'easeOutQuart'
    });

    // Animate course cards on scroll
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach((card, index) => {
        anime({
            targets: card,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 600,
            delay: index * 200,
            easing: 'easeOutQuart'
        });
    });
}

// Initialize carousels
function initializeCarousels() {
    // Achievers carousel
    if (document.getElementById('achievers-carousel')) {
        new Splide('#achievers-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                1024: {
                    perPage: 2,
                },
                768: {
                    perPage: 1,
                }
            }
        }).mount();
    }
}

// Initialize scroll effects
function initializeScrollEffects() {
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
            }
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

    // Parallax effect for floating elements
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');

        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Course modal functionality
function initializeCourseModals() {
    window.openCourseModal = function (courseType) {
        const modal = document.getElementById('courseModal');
        const title = document.getElementById('modalTitle');
        const content = document.getElementById('modalContent');

        const courseData = {
            'neet': {
                title: 'NEET Preparation Program',
                content: `
                    <div class="space-y-4">
                        <img src="resources/neet-prep.jpg" alt="NEET Preparation" class="w-full h-48 object-cover rounded-lg">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 class="font-semibold text-blue-900 mb-2">Program Highlights</h4>
                                <ul class="space-y-1 text-gray-600">
                                    <li>• Comprehensive Biology, Physics, Chemistry coverage</li>
                                    <li>• Expert faculty with medical background</li>
                                    <li>• Regular mock tests and assessments</li>
                                    <li>• Individual doubt clearing sessions</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-semibold text-blue-900 mb-2">Success Metrics</h4>
                                <ul class="space-y-1 text-gray-600">
                                    <li>• 92% success rate in 2023</li>
                                    <li>• Average score improvement: 35%</li>
                                    <li>• 15 students in top 1000 ranks</li>
                                    <li>• AIIMS admissions: 8 students</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-blue-900 mb-2">Fee Structure</h4>
                            <p class="text-gray-600">Annual Fee: ₹1,50,000 (Installment options available)</p>
                            <p class="text-gray-600">Includes: Study materials, online resources, test series</p>
                        </div>
                    </div>
                `
            },
            'iit-jee': {
                title: 'IIT-JEE Preparation Program',
                content: `
                    <div class="space-y-4">
                        <img src="resources/iit-jee-study.jpg" alt="IIT-JEE Preparation" class="w-full h-48 object-cover rounded-lg">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 class="font-semibold text-blue-900 mb-2">Program Highlights</h4>
                                <ul class="space-y-1 text-gray-600">
                                    <li>• Advanced Mathematics, Physics, Chemistry</li>
                                    <li>• IIT alumni as faculty members</li>
                                    <li>• Problem-solving intensive sessions</li>
                                    <li>• Regular competitive assessments</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-semibold text-blue-900 mb-2">Success Metrics</h4>
                                <ul class="space-y-1 text-gray-600">
                                    <li>• 89% success rate in 2023</li>
                                    <li>• 12 students in top 1000 ranks</li>
                                    <li>• Average score improvement: 40%</li>
                                    <li>• IIT admissions: 28 students</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-blue-900 mb-2">Fee Structure</h4>
                            <p class="text-gray-600">Annual Fee: ₹1,75,000 (Installment options available)</p>
                            <p class="text-gray-600">Includes: Study materials, online resources, test series</p>
                        </div>
                    </div>
                `
            },
            'cet': {
                title: 'CET Preparation Program',
                content: `
                    <div class="space-y-4">
                        <img src="resources/sat-classroom.jpg" alt="CET Preparation" class="w-full h-48 object-cover rounded-lg">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 class="font-semibold text-blue-900 mb-2">Program Highlights</h4>
                                <ul class="space-y-1 text-gray-600">
                                    <li>• State-specific curriculum coverage</li>
                                    <li>• Expert faculty with CET experience</li>
                                    <li>• Pattern-based mock tests</li>
                                    <li>• Time management strategies</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-semibold text-blue-900 mb-2">Success Metrics</h4>
                                <ul class="space-y-1 text-gray-600">
                                    <li>• 94% success rate in 2023</li>
                                    <li>• 45 students in top 1000 ranks</li>
                                    <li>• Average score improvement: 38%</li>
                                    <li>• Engineering admissions: 156 students</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-blue-900 mb-2">Fee Structure</h4>
                            <p class="text-gray-600">Annual Fee: ₹1,25,000 (Installment options available)</p>
                            <p class="text-gray-600">Includes: Study materials, online resources, test series</p>
                        </div>
                    </div>
                `
            },
            'sat': {
                title: 'SAT Preparation Program',
                content: `
                    <div class="space-y-4">
                        <img src="resources/sat-classroom.jpg" alt="SAT Preparation" class="w-full h-48 object-cover rounded-lg">
                        <div class="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 class="font-semibold text-blue-900 mb-2">Program Highlights</h4>
                                <ul class="space-y-1 text-gray-600">
                                    <li>• Evidence-based Reading and Writing</li>
                                    <li>• Advanced Math concepts</li>
                                    <li>• Essay writing strategies</li>
                                    <li>• Test-taking techniques</li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="font-semibold text-blue-900 mb-2">Success Metrics</h4>
                                <ul class="space-y-1 text-gray-600">
                                    <li>• 96% success rate in 2023</li>
                                    <li>• 5 perfect scores (1600/1600)</li>
                                    <li>• Average score improvement: 200+ points</li>
                                    <li>• Ivy League admissions: 12 students</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <h4 class="font-semibold text-blue-900 mb-2">Fee Structure</h4>
                            <p class="text-gray-600">Course Fee: ₹80,000 (Flexible scheduling available)</p>
                            <p class="text-gray-600">Includes: Study materials, online resources, practice tests</p>
                        </div>
                    </div>
                `
            }
        };

        const course = courseData[courseType];
        if (course) {
            title.textContent = course.title;
            content.innerHTML = course.content;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';

            // Animate modal entrance
            anime({
                targets: modal.querySelector('.bg-white'),
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuart'
            });
        }
    };

    window.closeCourseModal = function () {
        const modal = document.getElementById('courseModal');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    // Close modal when clicking outside
    document.getElementById('courseModal').addEventListener('click', function (e) {
        if (e.target === this) {
            closeCourseModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeCourseModal();
        }
    });
}

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add hover effects to cards
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.course-card, .achievement-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            anime({
                targets: this,
                scale: 1.02,
                duration: 200,
                easing: 'easeOutQuart'
            });
        });

        card.addEventListener('mouseleave', function () {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuart'
            });
        });
    });
});

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.text-3xl.font-bold');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + (counter.textContent.includes('%') ? '%' : counter.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : counter.textContent.includes('+') ? '+' : '');
            }
        }, 16);
    });
}

// Trigger counter animation when stats section is visible
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe the stats section when it exists
document.addEventListener('DOMContentLoaded', function () {
    const statsSection = document.querySelector('.grid.grid-cols-3');
    if (statsSection) {
        observer.observe(statsSection);
    }
});

// Mobile menu functionality
function initializeMobileMenu() {
    const menuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-40 transform -translate-y-full transition-transform duration-300';
    mobileMenu.innerHTML = `
        <div class="px-4 py-6 space-y-4">
            <a href="index.html" class="block text-blue-900 font-medium">Home</a>
            <a href="about.html" class="block text-gray-700 hover:text-blue-900 font-medium">About Us</a>
            <a href="courses.html" class="block text-gray-700 hover:text-blue-900 font-medium">Courses</a>
            <a href="life-at-lgs.html" class="block text-gray-700 hover:text-blue-900 font-medium">Life at LGS</a>
            <a href="connect.html" class="block text-gray-700 hover:text-blue-900 font-medium">Connect</a>
        </div>
    `;

    document.body.appendChild(mobileMenu);

    menuButton.addEventListener('click', function () {
        if (mobileMenu.style.transform === 'translateY(0px)') {
            mobileMenu.style.transform = 'translateY(-100%)';
        } else {
            mobileMenu.style.transform = 'translateY(0px)';
        }
    });

    // Close mobile menu when clicking on a link
    mobileMenu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            mobileMenu.style.transform = 'translateY(-100%)';
        }
    });
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.md\\:hidden button');
    if (menuButton) {
        initializeMobileMenu();
    }
});

// Form validation utility
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                input.classList.add('border-red-500');
                isValid = false;
            }
        }

        // Phone validation
        if (input.type === 'tel' && input.value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(input.value.replace(/\s/g, ''))) {
                input.classList.add('border-red-500');
                isValid = false;
            }
        }
    });

    return isValid;
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg ${type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        } transform translate-x-full transition-transform duration-300`;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize all tooltips
document.addEventListener('DOMContentLoaded', function () {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');

    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function () {
            const tooltip = document.createElement('div');
            tooltip.className = 'absolute z-50 px-2 py-1 text-sm bg-gray-800 text-white rounded shadow-lg';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.top = '-30px';
            tooltip.style.left = '50%';
            tooltip.style.transform = 'translateX(-50%)';

            this.style.position = 'relative';
            this.appendChild(tooltip);
        });

        element.addEventListener('mouseleave', function () {
            const tooltip = this.querySelector('.absolute.z-50');
            if (tooltip) {
                this.removeChild(tooltip);
            }
        });
    });
});

// Performance optimization: Lazy load images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Language Translation Functionality
const translations = {
    // Navigation
    'nav-home': { en: 'Home', hi: 'होम', kn: 'ಮುಖಪುಟ' },
    'nav-about': { en: 'About Us', hi: 'हमारे बारे में', kn: 'ನಮ್ಮ ಬಗ್ಗೆ' },
    'nav-courses': { en: 'Courses', hi: 'कोर्स', kn: 'ಕೋರ್ಸ್‌ಗಳು' },
    'nav-life': { en: 'Life at LGS', hi: 'LGS में जीवन', kn: 'LGS ನಲ್ಲಿ ಜೀವನ' },
    'nav-connect': { en: 'Connect', hi: 'संपर्क करें', kn: 'ಸಂಪರ್ಕಿಸಿ' },

    // Hero Section
    'hero-title-1': { en: 'Excellence in', hi: 'शिक्षा में', kn: 'ಶಿಕ್ಷಣದಲ್ಲಿ' },
    'hero-title-2': { en: 'Education', hi: 'उत्कृष्टता', kn: 'ಶ್ರೇಷ್ಠತೆ' },
    'hero-subtitle': {
        en: 'Empowering students to achieve their dreams through innovative teaching methodologies, world-class facilities, and personalized mentorship programs.',
        hi: 'नवीन शिक्षण विधियों, विश्व स्तरीय सुविधाओं और व्यक्तिगत मार्गदर्शन कार्यक्रमों के माध्यम से छात्रों को उनके सपनों को प्राप्त करने के लिए सशक्त बनाना।',
        kn: 'ನವೀನ ಬೋಧನಾ ವಿಧಾನಗಳು, ವಿಶ್ವ ದರ್ಜೆಯ ಸೌಲಭ್ಯಗಳು ಮತ್ತು ವೈಯಕ್ತಿಕ ಮಾರ್ಗದರ್ಶನ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ವಿದ್ಯಾರ್ಥಿಗಳು ತಮ್ಮ ಕನಸುಗಳನ್ನು ಸಾಧಿಸಲು ಸಶಕ್ತಗೊಳಿಸುವುದು.'
    },
    'hero-btn-admission': { en: 'Admission Now', hi: 'प्रवेश लें', kn: 'ಪ್ರವೇಶ ಪಡೆಯಿರಿ' },
    'hero-btn-visit': { en: 'Schedule Visit', hi: 'दौरा तय करें', kn: 'ಭೇಟಿ ನಿಗದಿಪಡಿಸಿ' },
    'stat-success': { en: 'Success Rate', hi: 'सफलता दर', kn: 'ಯಶಸ್ಸಿನ ದರ' },
    'stat-students': { en: 'Students', hi: 'छात्र', kn: 'ವಿದ್ಯಾರ್ಥಿಗಳು' },
    'stat-faculty': { en: 'Faculty', hi: 'संकाय', kn: 'ಬೋಧಕವರ್ಗ' },

    // Sections Headers
    'section-streams': { en: 'Our Academic Streams', hi: 'हमारे शैक्षणिक धाराएँ', kn: 'ನಮ್ಮ ಶೈಕ್ಷಣಿಕ ವಿಭಾಗಗಳು' },
    'section-streams-desc': {
        en: 'Choose from our specialized programs designed to excel in competitive examinations and build strong foundations for your future.',
        hi: 'प्रतियोगी परीक्षाओं में उत्कृष्टता प्राप्त करने और अपने भविष्य के लिए मजबूत नींव बनाने के लिए हमारे विशेष कार्यक्रमों में से चुनें।',
        kn: 'ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ಉತ್ತಮ ಸಾಧನೆ ಮಾಡಲು ಮತ್ತು ನಿಮ್ಮ ಭವಿಷ್ಯಕ್ಕಾಗಿ ಬಲವಾದ ಅಡಿಪಾಯವನ್ನು ನಿರ್ಮಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ನಮ್ಮ ವಿಶೇಷ ಕಾರ್ಯಕ್ರಮಗಳಿಂದ ಆರಿಸಿ.'
    },
    'section-methodology': { en: 'Our Teaching Methodology', hi: 'हमारी शिक्षण पद्धति', kn: 'ನಮ್ಮ ಬೋಧನಾ ವಿಧಾನ' },
    'section-facilities': { en: 'World-Class Facilities', hi: 'विश्व स्तरीय सुविधाएं', kn: 'ವಿಶ್ವ ದರ್ಜೆಯ ಸೌಲಭ್ಯಗಳು' },
    'section-facilities-desc': {
        en: 'Experience learning in an environment designed to foster creativity, innovation, and holistic growth.',
        hi: 'रचनात्मकता, नवाचार और समग्र विकास को बढ़ावा देने के लिए डिज़ाइन किए गए वातावरण में सीखने का अनुभव करें।',
        kn: 'ಸೃಜನಶೀಲತೆ, ನಾವೀನ್ಯತೆ ಮತ್ತು ಸಮಗ್ರ ಬೆಳವಣಿಗೆಯನ್ನು ಉತ್ತೇಜಿಸಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಪರಿಸರದಲ್ಲಿ ಕಲಿಯುವ ಅನುಭವವನ್ನು ಪಡೆಯಿರಿ.'
    },
    'section-mentors': { en: 'Exposure to Mentors', hi: 'मेंटर्स का मार्गदर्शन', kn: 'ಮಾರ್ಗದರ್ಶಕರ ಸಂಪರ್ಕ' },
    'section-achievers': { en: 'Notable Achievers', hi: 'उल्लेखनीय उपलब्धियां', kn: 'ಗಮನಾರ್ಹ ಸಾಧಕರು' },
    'section-events': { en: 'Upcoming Events', hi: 'आगामी कार्यक्रम', kn: 'ಮುಂಬರುವ ಕಾರ್ಯಕ್ರಮಗಳು' },
    'section-clubs': { en: 'School Clubs', hi: 'स्कूल क्लब', kn: 'ಶಾಲಾ ಕ್ಲಬ್‌ಗಳು' },
    'section-affiliates': { en: 'Our Affiliates', hi: 'हमारे सहयोगी', kn: 'ನಮ್ಮ ಸಹವರ್ತಿಗಳು' },

    // Footer
    'footer-desc': {
        en: 'Learning Global School - Empowering excellence through innovative education.',
        hi: 'लर्निंग ग्लोबल स्कूल - नवीन शिक्षा के माध्यम से उत्कृष्टता को सशक्त बनाना।',
        kn: 'ಲರ್ನಿಂಗ್ ಗ್ಲೋಬಲ್ ಸ್ಕೂಲ್ - ನವೀನ ಶಿಕ್ಷಣದ ಮೂಲಕ ಶ್ರೇಷ್ಠತೆಯನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು.'
    },
    'footer-privacy': { en: 'Privacy Policy', hi: 'गोपनीयता नीति', kn: 'ಗೌಪ್ಯತಾ ನೀತಿ' },
    'footer-terms': { en: 'Terms of Service', hi: 'सेवा की शर्तें', kn: 'ಸೇವಾ ನಿಯಮಗಳು' },
    'footer-rights': { en: 'All rights reserved.', hi: 'सर्वाधिकार सुरक्षित।', kn: 'ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.' }
};

function changeLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[key] && translations[key][lang]) {
            element.textContent = translations[key][lang];
        }
    });

    // Update Language Button Text
    const langBtnText = document.querySelector('.group button span');
    if (langBtnText) {
        const langLabels = { 'en': 'En', 'hi': 'Hi', 'kn': 'Kn' };
        langBtnText.textContent = langLabels[lang];
    }

    // Save preference
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
});