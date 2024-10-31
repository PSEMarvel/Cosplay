const images = ["images/Produkte/Custom%Lithophane%Lampen/IMG_7390.PNG", "images/Produkte/Custom%Lithophane%Lampen/IMG_7391.PNG"];
let currentIndex = 0;

const imageElement = document.getElementById("carousel-image");
const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

function showImage(index) {
    imageElement.src = images[index];
}

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});


showImage(currentIndex);
