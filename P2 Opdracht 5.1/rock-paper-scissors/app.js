var computerChoice = document.getElementById("computer-choice");
var playerChoice = document.getElementById("player-choice");
var resultOutput = document.getElementById("result");

const possibleChoices = document.querySelectorAll('button');

var player = "";
var computer = "";
var result = "";

const choices = ["rock", "paper", "scissors"];

possibleChoices.forEach(button => button.addEventListener('click', (e) => {
    player = e.target.id;
    playerChoice.innerHTML = player;
    generateComputerChoice();

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    computer = choices[randomNumber];
    computerChoice.innerHTML = computer;
}

if (computer === player) {
    result = "gelijkspel";
} 
else if (computer === "rock" && player === "paper") {
    result = "je hebt gewonnen!";
} 
else if (computer === "rock" && player === "scissors") {
    result = "je hebt verloren!";
} 
else if (computer === "paper" && player === "scissors") {
    result = "je hebt gewonnen!";
} 
else if (computer === "paper" && player === "rock") {
    result = "je hebt verloren!";
} 
else if (computer === "scissors" && player === "rock") {
    result = "je hebt gewonnen!";
} 
else if (computer === "scissors" && player === "paper") {
    result = "je hebt verloren!";
}
    resultOutput.innerHTML = result;
}))

