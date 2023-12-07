var resultaatTafel = '';
for (var i = 1; i <= 10; i++) {
    resultaatTafel += i + ' x 10 = ' + (i * 10) + '<br>';
}
document.getElementById('resultaat').innerHTML = resultaatTafel;
