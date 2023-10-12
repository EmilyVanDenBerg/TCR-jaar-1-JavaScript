let budget = 60;
let product = 60;

if (budget >= product) {
    document.getElementById("resultaat").innerHTML = "U heeft genoeg geld!";
    document.getElementById("resultaat").style.color = "green";
} else {
    document.getElementById("resultaat").innerHTML = "Helaas, te weinig geld.";
    document.getElementById("resultaat").style.color = "red";
}
