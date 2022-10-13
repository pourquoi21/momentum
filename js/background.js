const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
]

const chosenImage = images[Math.floor(Math.random()*images.length)];
const backgroundImage = document.querySelector(".background-image");

const chosenImageSrc = `img/${chosenImage}`;

backgroundImage.style.backgroundImage = `url(${chosenImageSrc})`
