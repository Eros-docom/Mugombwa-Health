```javascript
// MOBILE MENU
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.toggle("show");
    }
}

// PHOTO SLIDER
let slideIndex = 0;
let slideTimer;

function showSlide(index) {
    const slides = document.querySelectorAll(".slider .slide");
    const dots = document.querySelectorAll(".slider .dot");

    if (slides.length === 0) return;

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach(function(slide) {
        slide.classList.remove("active");
    });

    dots.forEach(function(dot) {
        dot.classList.remove("active");
    });

    slides[slideIndex].classList.add("active");

    if (dots[slideIndex]) {
        dots[slideIndex].classList.add("active");
    }
}

function changeSlide(direction) {
    showSlide(slideIndex + direction);
    restartSlideTimer();
}

function currentSlide(number) {
    showSlide(number - 1);
    restartSlideTimer();
}

function restartSlideTimer() {
    clearInterval(slideTimer);

    slideTimer = setInterval(function() {
        showSlide(slideIndex + 1);
    }, 5000);
}

document.addEventListener("DOMContentLoaded", function() {
    showSlide(0);
    restartSlideTimer();
});
```