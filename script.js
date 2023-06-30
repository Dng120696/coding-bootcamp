"use strict";

const boxes = document.querySelectorAll('.section')
const previousBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')
let currSlide = 0;
const maxSlide = boxes.length - 1;

const goToSlide = ( curr) => {
  boxes.forEach(
    (box, i) => (box.style.transform = `translateX(${100 * (i - curr)}%)`)
  );
};
goToSlide(0);

const nextSlide = () => {
  currSlide === maxSlide ? (currSlide = 0) : currSlide++;
  goToSlide(currSlide);

};

const previousSlide = () => {
  currSlide === 0 ? (currSlide = maxSlide) : currSlide--;
  goToSlide(currSlide);
};
previousBtn.addEventListener('click',previousSlide)
nextBtn.addEventListener('click',nextSlide)
