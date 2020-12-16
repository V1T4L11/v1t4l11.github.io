'use strict';

const div = document.querySelector('#div');

const setTime = document.querySelector('.set-time');
const figures = document.querySelectorAll('.figure');

let start = new Date().getTime();

function disappear() {
  this.classList.remove('visible');
  let end = new Date().getTime();
  let timeTaken = (end - start) / 1000;
  setTime.innerText = 'Time: ' + timeTaken + ' sec.';
  start = new Date().getTime();
  showFigure();
};

function showFigure() {
  let randomEl = Math.floor(Math.random() * 3);
  let randFigure = figures[randomEl];
  let randomPositionX = Math.floor(Math.random() * 75);
  let randomPositionY = Math.floor(Math.random() * 55);

  randFigure.classList.add('visible');
  randFigure.style.left = randomPositionX + '%';
  randFigure.style.top = randomPositionY + '%';

  randFigure.addEventListener('click', disappear);
}

document.addEventListener('DOMContentLoaded', showFigure);