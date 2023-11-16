// Array aanmaken
const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Drop"];


// Opdracht 1
document.getElementById('opdracht1').innerHTML = `Er zitten ${winkelmandje.length} producten in uw winkelmand.`;

// Opdracht 2
document.getElementById('opdracht2').innerHTML = `Uw producten zijn ${winkelmandje.join(`,`)}.`;

// Opdracht 3
document.getElementById('opdracht3').innerHTML = `${winkelmandje[3]} staat op de vierde plek in uw winkelmand.`;

// Opdracht 4
winkelmandje[1] = "Bier";
document.getElementById('opdracht4').innerHTML = `Ik heb whiskey veranderd naar bier. Uw nieuwe winkelmandje is: ${winkelmandje.join(`,`)}.`;

// Opdracht 5
function addProduct() {
    const newProduct = prompt("Voer hier uw nieuwe product in:");
    winkelmandje.push(newProduct);
    document.getElementById('opdracht5').innerHTML = `Uw nieuwe winkelmandje heeft deze producten: ${winkelmandje.join(`, `)}.`
};

// Opdracht 6
if (winkelmandje.length > 1) {
    document.getElementById('opdracht6').innerHTML = `Er staat minstens 1 artikel in uw winkelmandje: ${winkelmandje.join(`, `)}.`;
}
else {
    document.getElementById('opdracht6').innerHTML = `Er staan geen artikelen in uw winkelmandje.`;
}

// Opdracht 7
if (winkelmandje[4] == "Drop" || winkelmandje[4] == "drop") {
    document.getElementById('opdracht7').innerHTML = `U heeft drop.`;
}
else {
    document.getElementById('opdracht7').innerHTML = `U heeft geen drop.`;
}

// Opdracht 8
document.getElementById('opdracht8').innerHTML = `Uw producten (met spatie ertussen!) zijn ${winkelmandje.join(`, `)}.`;

// Opdracht 9
document.getElementById('opdracht9oud').innerHTML = `Ik haal de eerste twee producten van uw mandje weg. Uw oude winkelmandje was: ${winkelmandje.join(`, `)}.`
winkelmandje.splice(0, 2);
document.getElementById('opdracht9nieuw').innerHTML = `Uw nieuwe winkelmandje is ${winkelmandje.join(`, `)}.`

// Opdracht 10
winkelmandje.sort();
document.getElementById('opdracht10').innerHTML = `Uw winkelmandje op alfabetische volgorde is als volgt: ${winkelmandje.join(`, `)}. `