function multiply() {
    var number1 = parseInt(document.getElementById("getal1").value);
    var number2 = parseInt(document.getElementById("getal2").value);
    if (number1 > 0 && number2 > 0) {
        var resultNumbers = number1 * number2;
        document.getElementById("resultNumbers").innerHTML = `Het antwoord is: ${resultNumbers}`;
    }
    else {
        document.getElementById("resultNumbers").innerHTML = `Het getal is te laag.`;
    }
}

function divide() {
    var number1 = parseInt(document.getElementById("getal1").value);
    var number2 = parseInt(document.getElementById("getal2").value);
    if (number1 > 0 && number2 > 0) {  
        var resultNumbers = number1 / number2;
        document.getElementById("resultNumbers").innerHTML = `Het antwoord is: ${resultNumbers}`;
    }
    else {
        document.getElementById("resultNumbers").innerHTML = `Het getal is te laag.`;   
    }
}

function add() {
    var number1 = parseInt(document.getElementById("getal1").value);
    var number2 = parseInt(document.getElementById("getal2").value);
    if (number1 > 0 && number2 > 0) {  
        var resultNumbers = number1 + number2;
        document.getElementById("resultNumbers").innerHTML = `Het antwoord is: ${resultNumbers}`;
    }
    else {
        document.getElementById("resultNumbers").innerHTML = `Het getal is te laag.`;  
    }
}

function minus() {
    var number1 = parseInt(document.getElementById("getal1").value);
    var number2 = parseInt(document.getElementById("getal2").value);
    if (number1 > 0 && number2 > 0) {  
        var resultNumbers = number1 - number2;
        document.getElementById("resultNumbers").innerHTML = `Het antwoord is: ${resultNumbers}`;
    }
    else {
        document.getElementById("resultNumbers").innerHTML = `Het getal is te laag.`;  
    }
}