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
