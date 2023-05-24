"use strict";

const arrrowLeft = document.querySelector('.btn-arrow-left');
const arrrowRight= document.querySelector('.btn-arrow-right');
const slide2 = document.querySelector('.slide-2');
const slide1 = document.querySelector('.slide-1');

// console.log(arrrowLeft,arrrowRight);

arrrowRight.addEventListener('click', () =>{
  slide1.classList.add('hidden')
  slide2.classList.remove('hidden')
  slide2.classList.add('show')
});
arrrowLeft.addEventListener('click', () =>{

  slide1.classList.remove('hidden')
  slide2.classList.add('hidden')
  slide2.classList.remove('show')
});