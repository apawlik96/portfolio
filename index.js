const cursor = document.getElementById('cursor');

document.addEventListener('scroll', function () {
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
});

document.addEventListener('DOMContentLoaded', () => {
    function initializePopup(images, trigger) {
        const popup = document.getElementById('popup');
        const closePopup = document.getElementById('closePopup');
        const prev = document.getElementById('prev');
        const next = document.getElementById('next');
        const popupImage = document.getElementById('popupImage');

        let currentIndex = 0;

        function updatePopupImage(index) {
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

    const officeWebsiteTrigger = document.getElementById('officeWebsiteTrigger');
    initializePopup(["./img/picture2.png", "./img/picture3.png", "./img/picture1.png"], officeWebsiteTrigger);

    const formGeneratorTrigger = document.getElementById('formGeneratorTrigger');
    initializePopup(["./img/picture1.png", "./img/picture2.png", "./img/picture3.png"], formGeneratorTrigger);
});

function addStylesToActiveLinkOnScroll() {
    var links = document.querySelectorAll('a');

    function getCurrentSection() {
        var currentScroll = window.scrollY;
        var sections = document.querySelectorAll('section');
        var currentSectionId = '';

        sections.forEach(function (section) {
            var sectionTop = section.offsetTop - 50;
            var sectionBottom = sectionTop + section.offsetHeight;

            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
                currentSectionId = '#' + section.getAttribute('id');
            }
        });

        var documentHeight = document.documentElement.scrollHeight;
        var windowHeight = window.innerHeight;
        if (currentScroll + windowHeight >= documentHeight) {
            currentSectionId = '#' + sections[sections.length - 1].getAttribute('id');
        }

        return currentSectionId;
    }

    function setActiveLinkStyle() {
        var currentSection = getCurrentSection();


        links.forEach(function (link) {
            link.style.fontSize = '';
            link.style.color = '';

            if (link.getAttribute('href') === currentSection) {
                link.style.color = '#99ccff';
            }

        });

    }

    setActiveLinkStyle();

    window.addEventListener('scroll', setActiveLinkStyle);
}

window.onload = addStylesToActiveLinkOnScroll;

function changeColors() {
    document.documentElement.style.setProperty('--light-blue-color', '#16395c');
    document.documentElement.style.setProperty('--dark-blue-color', '#3f7dbb');
    document.documentElement.style.setProperty('--bg-color', '#b2d6fa');
    document.documentElement.style.setProperty('--bg-color-focus', '#7298be');
    document.documentElement.style.setProperty('--color-text', '#858585');
    document.documentElement.style.setProperty('--color-text-focus', '#000000');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');

}