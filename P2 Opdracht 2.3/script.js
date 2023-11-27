const block = document.querySelector('.block');
const screenWidth = window.innerWidth;
const blockWidth = block.offsetWidth;

let currentPosition = 0;
let moveIncrement = 5;

function moveRight() {
  currentPosition += moveIncrement;
  if (currentPosition + blockWidth >= screenWidth) {
    moveIncrement = -5;
  } else if (currentPosition <= 0) {
    moveIncrement = 5;
  }

  block.style.left = currentPosition + 'px';

  setTimeout(moveRight, 100);
}

function changeColor() {
  const randomColor = getRandomColor();
  block.style.backgroundColor = randomColor;
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

moveRight();

