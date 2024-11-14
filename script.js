let currentImageIndex = 0;
const images = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
    "/image5.jpg",
    "/image6.jpg",
    "/image7.jpg",
    "/image8.jpg",
    "/image9.jpg",
    "/image10.jpg",
    "/image11.jpg",
    "/image12.jpg",
    "/image13.jpg",
    "/image14.jpg",
    "/image15.jpg"
];
function showImage(index) {
    currentImageIndex = index;
    const mainImage = document.getElementById("mainImage");
    mainImage.src = images[currentImageIndex];
    document.getElementById("lightbox").style.display = "flex";
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
