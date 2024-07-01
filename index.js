function initializeCursor() {
    const cursor = document.getElementById('cursor');
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });
}

function initializePopup(images, triggerId, popupId, prevId, nextId, closeId, imgId) {
    const trigger = document.getElementById(triggerId);
    const popup = document.getElementById(popupId);
    const closePopup = document.getElementById(closeId);
    const prev = document.getElementById(prevId);
    const next = document.getElementById(nextId);
    const popupImage = document.getElementById(imgId);
    let currentIndex = 0;

    const updatePopupImage = index => {
        popupImage.src = images[index];
    }

    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        popup.style.display = 'block';
        updatePopupImage(currentIndex);
    });

    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updatePopupImage(currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updatePopupImage(currentIndex);
    });
}

initializePopup(
    ["./img/office-website-1.png", "./img/office-website-2.png", "./img/office-website-3.png", "./img/office-website-4.png"], 
    'officeWebsiteTrigger', 
    'officePopup', 
    'prevOffice', 
    'nextOffice', 
    'closeOfficePopup', 
    'popupOfficeImage'
);

initializePopup(
    ["./img/form-generator-one-step.png", "./img/form-generator-multi-step.png"], 
    'formGeneratorTrigger', 
    'formPopup', 
    'prevForm', 
    'nextForm', 
    'closeFormPopup', 
    'popupFormImage'
);

function addStylesToActiveLinkOnScroll() {
    const links = document.querySelectorAll('.navbar-nav a');
    const sunIcon = document.querySelector('.sun');
    const visibilityElement = document.querySelector('.visibility');
    let currentVisibleSectionId = '';

    const setActiveLinkStyle = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentSectionId = `#${entry.target.id}`;

                currentVisibleSectionId = currentSectionId;

                links.forEach(link => {
                    link.style.paddingLeft = '';
                    link.style.color = '';

                    if (link.getAttribute('href') === currentSectionId) {
                        link.style.transition = 'all 0.3s ease';
                        if (window.innerWidth > 991) {
                            link.style.paddingLeft = '20px';
                        }
                        if (sunIcon.classList.contains('hidden')) {
                            link.style.color = '#16395c';
                        } else {
                            link.style.color = '#99ccff';
                        }
                    }
                });

                if (window.innerWidth <= 700) {
                    const currentLink = document.querySelector(`.navbar-nav a[href="${currentSectionId}"]`);
                    if (currentLink) {
                        visibilityElement.textContent = currentLink.textContent;
                        if (sunIcon.classList.contains('hidden')) {
                            visibilityElement.style.color = '#16395c';
                        } else {
                            visibilityElement.style.color = '#99ccff';
                        }
                    }
                }
            }
        });

        if (window.innerWidth > 700) {
            visibilityElement.textContent = 'About';
        }
    };

    const observer = new IntersectionObserver(setActiveLinkStyle, {
        root: null,
        rootMargin: '10px',
        threshold: 0.2
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    window.addEventListener('resize', () => {
        setActiveLinkStyle(observer.takeRecords(), observer);
    });

    setActiveLinkStyle(observer.takeRecords(), observer);
}

function setupColorChange() {
    const colors = [
        ['--light-blue-color', '#16395c'],
        ['--dark-blue-color', '#16395c'],
        ['--view-img-color', '#3f7dbb'],
        ['--bg-color', '#ececec'],
        ['--bg-color-focus', '#fff'],
        ['--cursor-bg', 'rgba(113, 121, 129, 0.2)'],
        ['--color-text', '#16395c'],
        ['--color-text-focus', '#3f7dbb'],
        ['--font-weight-200', '400'],
        ['--font-weight-300', '400'],
        ['--font-weight-400', '500'],
    ];
    
    const changeColors = () => {
        colors.forEach(([property, value]) => {
            document.documentElement.style.setProperty(property, value);
        });
    }
    
    const resetColors = () => {
        colors.forEach(([property]) => {
            document.documentElement.style.removeProperty(property);
        });
    }

    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');

    sunIcon.addEventListener('click', (e) => {
        e.preventDefault();
        setTimeout(() => {
            changeColors();
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }, 200);
    });

    moonIcon.addEventListener('click', (e) => {
        e.preventDefault();
        setTimeout(() => {
            resetColors();
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        }, 200);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeCursor();
    addStylesToActiveLinkOnScroll();
    setupColorChange();
});