const block = document.querySelector('.block');

let currentPosition = 0;
const moveIncrement = 1;

function moveRight() {
  currentPosition += moveIncrement;
  block.style.left = currentPosition + 'vw';

  setTimeout(moveRight, 100);
}

moveRight();