const goButton = document.getElementById('goButton');
const colorScreen = document.getElementById('colorScreen');
let startTime, endTime;

goButton.addEventListener('click', startGame);

function startGame() {
    colorScreen.style.backgroundColor = 'red';

    colorScreen.addEventListener('click', endGame);

    const randomTime = Math.random() * 10000;
    setTimeout(() => {
        colorScreen.style.backgroundColor = 'green';
        startTime = new Date().getTime(); 
    }, randomTime);
}

function endGame() {
    if (colorScreen.style.backgroundColor === 'green') {
        endTime = new Date().getTime();
        const reactionTime = endTime - startTime;
        alert(`Je reactietijd was ${reactionTime} milliseconden.`);
    }  
    else {
        alert('Je klikte te vroeg!');
    }

    colorScreen.style.backgroundColor = 'white';
    colorScreen.removeEventListener('click', endGame);
}

