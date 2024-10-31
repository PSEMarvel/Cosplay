// First Carousel Code
const images1 = ["images/Produkte/3D%20gedruckte%20Props/IMG_7388.PNG", "images/Produkte/3D%20gedruckte%20Props/IMG_7389.PNG"];
let currentIndex1 = 0;

const imageElement1 = document.getElementById("carousel-image1");
const nextButton1 = document.getElementById("next1");
const prevButton1 = document.getElementById("prev1");

function showImage1(index) {
    imageElement1.src = images1[index];
}

nextButton1.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
    showImage1(currentIndex1);
});

prevButton1.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
    showImage1(currentIndex1);
});

showImage1(currentIndex1);

// Second Carousel Code
const images2 = ["images/Produkte/Custom%20Lithophane%20Lampen/IMG_7390.PNG", "images/Produkte/Custom%20Lithophane%20Lampen/IMG_7391.PNG"];
let currentIndex2 = 0;

const imageElement2 = document.getElementById("carousel-image2");
const nextButton2 = document.getElementById("next2");
const prevButton2 = document.getElementById("prev2");

function showImage2(index) {
    imageElement2.src = images2[index];
}

nextButton2.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    showImage2(currentIndex2);
});

prevButton2.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 - 1 + images2.length) % images2.length;
    showImage2(currentIndex2);
});

showImage2(currentIndex2);
