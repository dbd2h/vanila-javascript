const $footerLocation = document.querySelector(".momentum-footer__location");

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chooseImage = Math.floor(Math.random() * images.length);
const createTag = document.createElement("img");
createTag.src = `momentum-image/${images[chooseImage]}`;
document.body.appendChild(createTag);
const imagesInformation = {
  0: "Grand Canyon, AZ, USA",
  1: "Porto, Portugal",
  2: "Machupicchu, Peru",
  3: "Paris, France",
};
$footerLocation.innerHTML = imagesInformation[chooseImage];
