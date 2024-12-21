let nbbtCurrentIndex = 0;
let cltCurrentIndex = 0;
let skCurrentIndex = 0;

const nbbtCarouselTrackId = "nbbt_carousel_track";
const cltCarouselTrackId = "clt_carousel_track";
const skCarouselTrackId = "sk_carousel_track";


function updateCarousel(carouselId, value) {
    const track = document.getElementById(carouselId);
    const items = track.querySelectorAll('.carousel-item');

    console.log(items);

    const currentIndex = value > 0 ? nextSlide(carouselId, items.length) : prevSlide(carouselId, items.length);
    console.log(currentIndex);

    const itemWidth = items[0].getBoundingClientRect().width + 10;
    const newTransformValue = -(itemWidth * currentIndex);
    track.style.transform = `translateX(${newTransformValue}px)`;
}

function nextSlide(carouselId, totalItems) {
    if (carouselId === nbbtCarouselTrackId) {
        if (nbbtCurrentIndex < totalItems - 3) { // Ensure only 4 visible items at a time
            nbbtCurrentIndex++;
        } else {
            nbbtCurrentIndex = 0; // Go back to the start
        }

        return nbbtCurrentIndex;
    }
    else if (carouselId === cltCarouselTrackId) {
        if (cltCurrentIndex < totalItems - 3) { // Ensure only 4 visible items at a time
            cltCurrentIndex++;
        } else {
            cltCurrentIndex = 0; // Go back to the start
        }

        return cltCurrentIndex;
    }
    else if (carouselId === skCarouselTrackId) {
        if (skCurrentIndex < totalItems - 3) { // Ensure only 4 visible items at a time
            skCurrentIndex++;
        } else {
            skCurrentIndex = 0; // Go back to the start
        }

        return skCurrentIndex;
    }

    return 0;
}

function prevSlide(carouselId, totalItems) {
    if (carouselId === nbbtCarouselTrackId) {
        if (nbbtCurrentIndex > 0) {
            nbbtCurrentIndex--;
        } else {
            nbbtCurrentIndex = totalItems - 3; // Jump to the last group of images
        }

        return nbbtCurrentIndex;
    }
    else if (carouselId === cltCarouselTrackId) {
        if (cltCurrentIndex > 0) {
            cltCurrentIndex--;
        } else {
            cltCurrentIndex = totalItems - 3; // Jump to the last group of images
        }

        return cltCurrentIndex;
    }
    else if (carouselId === skCarouselTrackId) {
        if (skCurrentIndex > 0) {
            skCurrentIndex--;
        } else {
            skCurrentIndex = totalItems - 3; // Jump to the last group of images
        }

        return skCurrentIndex;
    }

    return 0;
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