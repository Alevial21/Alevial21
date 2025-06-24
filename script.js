let current = 0;
const images = document.querySelectorAll("#carousel img");
setInterval(() => {
  images[current].style.display = "none";
  current = (current + 1) % images.length;
  images[current].style.display = "block";
}, 3000);

ScrollReveal().reveal('h1, p, .botones, .masonry', { delay: 200, duration: 1000, reset: true });