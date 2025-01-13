window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
// carrusels
let currentIndex = 0;
const images = document.querySelectorAll(".image-slidercarru img");
const totalImages = images.length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  document.getElementById("imageSlidercarru").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}, 2000); // Cambia la imagen cada 2 segundos
