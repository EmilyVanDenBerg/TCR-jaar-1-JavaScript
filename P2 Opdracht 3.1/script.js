// Array aanmaken
const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Drop"];

// Opdracht 1
document.getElementById('opdracht1').innerHTML = `Er zitten ${winkelmandje.length} producten in uw winkelmand.`;

let text = "";
for (let i = 0; i < winkelmandje.length; i++) {
  text += winkelmandje[i] + "<br>";
}

document.getElementById("producten").innerHTML = text;