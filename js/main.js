document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        document.querySelector(".slides").style.transform = `translateX(-${currentSlide * 100}%)`;

        dots.forEach((dot, i) => {
            if (i === currentSlide) dot.classList.add("active");
            else dot.classList.remove("active");
        });
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function startSlider() {
        slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    }

    function stopSlider() {
        clearInterval(slideInterval);
    }

    document.querySelector(".left-arrow").addEventListener("click", () => {
        stopSlider();
        showSlide(currentSlide - 1);
        startSlider();
    });

    document.querySelector(".right-arrow").addEventListener("click", () => {
        stopSlider();
        showSlide(currentSlide + 1);
        startSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });

    startSlider();
});


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat h3");

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;
            const increment = target / 100; // Adjust the increment value as needed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 30); // Adjust the speed of counting
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const elementsToTranslate = {
        welcome: document.querySelector('.intro-content p'),
        help: document.querySelector('.intro-content h2'),
        volunteer: document.querySelector('.info-card:nth-of-type(1) h3'),
        donation: document.querySelector('.info-card:nth-of-type(2) h3'),
        fundraise: document.querySelector('.info-card:nth-of-type(3) h3'),
        // add other elements as needed
    };

    function translatePage(language) {
        Object.keys(elementsToTranslate).forEach(key => {
            const element = elementsToTranslate[key];
            if (element) {
                element.textContent = translations[language][key] || element.textContent;
            }
        });
    }

    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        translatePage(selectedLanguage);
    });

    // Initialize the page with the default language
    translatePage(languageSelect.value);
});
