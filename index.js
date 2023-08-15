'use strict';

const allImgs = document.querySelectorAll('img');
const btnRight = document.querySelector('.btn--right');
const btnLeft = document.querySelector('.btn--left');
const dotsContainer = document.querySelector('.dots');

// Initialization
allImgs.forEach((img) => {
  if (img.className !== 'img1') img.style.display = 'none';
});

let curSlide = 1;
let maxSlide = allImgs.length;

// Create dots
allImgs.forEach((_, i) =>
  dotsContainer.insertAdjacentHTML(
    'beforeend',
    `<span class='dot' data-number="${curSlide + i}">${curSlide + i}</span>`
  )
);

const goToSlide = function (curSlide) {
  // Hide all slides
  allImgs.forEach((img) => (img.style.display = 'none'));

  // Display current slide
  document.querySelector(`.img${curSlide}`).style.display = 'inline';
};

const nextSlide = function () {
  // console.log(
  //   `curSlide : ${curSlide} ${typeof curSlide} / ${maxSlide} ${typeof maxSlide}`
  // );
  if (curSlide === maxSlide) curSlide = 1;
  else curSlide++;
  // console.log(
  //   `curSlide : ${curSlide} ${typeof curSlide} / ${maxSlide} ${typeof maxSlide}`
  // );
  goToSlide(curSlide);
};

const prevSlide = function () {
  // console.log(`curSlide before evaluation: ${curSlide} / ${maxSlide}`);
  if (curSlide === 1) curSlide = maxSlide;
  else curSlide--;
  // console.log(`curSlide after evaluation: ${curSlide} / ${maxSlide}`);
  goToSlide(curSlide);
};

dotsContainer.addEventListener('click', function (e) {
  // Guard clause
  if (!e.target.dataset.number) return;

  // Update curSlide
  curSlide = +e.target.dataset.number;
  console.log(
    `curSlide : ${curSlide} ${typeof curSlide} / ${maxSlide} ${typeof maxSlide}`
  );
  goToSlide(curSlide);
});

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function (e) {
  e.key === 'ArrowRight' && nextSlide();
  e.key === 'ArrowLeft' && prevSlide();
});
