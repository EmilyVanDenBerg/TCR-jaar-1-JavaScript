// script.js
const block = document.querySelector('.block');
const screenWidth = window.innerWidth;
const blockWidth = block.offsetWidth;

let currentPosition = 0;
var moveIncrement = 5;

function moveRight() {
  currentPosition += moveIncrement;
  if (currentPosition + blockWidth >= screenWidth) {
    moveIncrement = -5;
  }
  else if (currentPosition == 0) {
    moveIncrement = 5;
  }

  block.style.left = currentPosition + 'px';

  setTimeout(moveRight, 100);
}

moveRight();
