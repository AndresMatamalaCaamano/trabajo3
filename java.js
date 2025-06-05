document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.slide');
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let currentIndex = 0;

  const updateCarousel = () => {
    track.style.transform = `translateX(-${currentIndex * 300}px)`;
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });
});


const carrusel = document.querySelector('.carrusel');
let angle = 0;
const totalItems = document.querySelectorAll('.carruselitem').length;
const rotateInterval = 3000;

function rotateCarousel() {
  angle += 360 / totalItems;
  carrusel.style.transform = `rotateY(${angle}deg)`;
}

setInterval(rotateCarousel, rotateInterval);
