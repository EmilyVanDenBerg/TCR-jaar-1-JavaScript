let getal = prompt("Vul een getal in.");

var resultaatTafel = '';
for (var i = 1; i <= 10; i++) {
    resultaatTafel += i + ' x ' + getal + ' = ' + (i * getal) + '<br>';
}
document.getElementById('resultaat').innerHTML = resultaatTafel;
