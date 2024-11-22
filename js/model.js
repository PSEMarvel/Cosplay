// Email button functionality
document.getElementById("emailButton").onclick = function() {
    const recipient = "germancosplaycouple@gmail.com";
    const subject = "Contact Us";
    const body = "Hey!\nVielen Dank für dein Interesse an unseren Produkten.\n\nWelches Produkt möchtest du Anfragen: _________\nSende uns für eine 3D- gedruckte Lithophane Lampe gerne schon im Anhang zu.\n\n Wir melden uns so schnell wie es geht bei dir und lassen dir alle nötigen Informationen, wie Preise, Verfügbarkeit und Lieferzeit zukommen.\n\nLiebe Grüße\nMaurice und Isabell\nGermanCosplayCouple";
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

// Modal functionality
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.getElementById("closeModal");

// Add click event to all product images
document.querySelectorAll(".product img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "block"; // Show modal
        modalImg.src = img.src; // Set modal image to clicked image
    });
});

// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close the modal when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
