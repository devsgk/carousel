'use strict';

const allImages = document.querySelectorAll('img');
const buttonRight = document.querySelector('.button--right');
const buttonLeft = document.querySelector('.button--left');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 1;
let maxSlide = allImages.length;

const goToSlide = function (currentSlide) {
  allImages.forEach((image) => (image.style.display = 'none'));

  document.querySelector(`.image${currentSlide}`).style.display = 'inline';
};

goToSlide(1);

const goToNextSlide = function () {
  if (currentSlide === maxSlide) currentSlide = 1;
  else currentSlide++;

  goToSlide(currentSlide);
};

const goToPrevSlide = function () {
  if (currentSlide === 1) currentSlide = maxSlide;
  else currentSlide--;

  goToSlide(currentSlide);
};

allImages.forEach((_, i) => {
  const html = `<span class='dot' data-number="${currentSlide + i}">${
    currentSlide + i
  }</span>`;
  dotsContainer.insertAdjacentHTML('beforeend', html);
});

dotsContainer.addEventListener('click', function (event) {
  if (!event.target.dataset.number) return;

  currentSlide = Number(event.target.dataset.number);

  goToSlide(currentSlide);
});

buttonRight.addEventListener('click', goToNextSlide);
buttonLeft.addEventListener('click', goToPrevSlide);

document.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowRight') goToNextSlide();
  if (event.key === 'ArrowLeft') goToPrevSlide();
});
