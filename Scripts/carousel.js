let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function updateCarousel() {
    const track = document.querySelector('.carousel-track');
    const itemWidth = items[0].getBoundingClientRect().width + 10;
    const newTransformValue = -(itemWidth * currentIndex);
    track.style.transform = `translateX(${newTransformValue}px)`;
}

function nextSlide() {
    if (currentIndex < totalItems - 4) { // Ensure only 4 visible items at a time
        currentIndex++;
    } else {
        currentIndex = 0; // Go back to the start
    }
    updateCarousel();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 4; // Jump to the last group of images
    }
    updateCarousel();
}

window.addEventListener('resize', updateCarousel);


// Modal functionality
function openModal(imageElement) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('fullImage');

    modal.style.display = "block";
    modalImg.src = imageElement.src;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Close modal if clicked outside of the image
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}