// js/carousel.js

function nextSlide(button) {
    const carousel = button.parentElement.querySelector('.carousel');
    const slides = carousel.querySelectorAll('img');
    const currentTransform = getComputedStyle(carousel).transform;
    const currentTranslateX = currentTransform !== 'none' ? parseInt(currentTransform.split(',')[4]) : 0;

    const newTranslateX = currentTranslateX - carousel.clientWidth;

    // Loop back to the first slide if at the end
    if (Math.abs(newTranslateX) >= carousel.clientWidth * slides.length) {
        carousel.style.transform = 'translateX(0)';
    } else {
        carousel.style.transform = `translateX(${newTranslateX}px)`;
    }
}

function prevSlide(button) {
    const carousel = button.parentElement.querySelector('.carousel');
    const slides = carousel.querySelectorAll('img');
    const currentTransform = getComputedStyle(carousel).transform;
    const currentTranslateX = currentTransform !== 'none' ? parseInt(currentTransform.split(',')[4]) : 0;

    const newTranslateX = currentTranslateX + carousel.clientWidth;

    // Loop back to the last slide if at the beginning
    if (newTranslateX > 0) {
        carousel.style.transform = `translateX(-${carousel.clientWidth * (slides.length - 1)}px)`;
    } else {
        carousel.style.transform = `translateX(${newTranslateX}px)`;
    }
}
