function multiply() {
    var number1 = parseInt(document.getElementById("getal1").value);
    var number2 = parseInt(document.getElementById("getal2").value);
    var resultNumbers = number1 * number2;
    document.getElementById("resultNumbers").innerHTML = `Het antwoord is: ${resultNumbers}`;
}

function divide() {
    var number1 = parseInt(document.getElementById("getal1").value);
    var number2 = parseInt(document.getElementById("getal2").value);
    if (number2 == 0) {
        document.getElementById("resultNumbers").innerHTML = `Hiervan is geen antwoord.`;
    }
    else {
    var resultNumbers = number1 / number2;
    document.getElementById("resultNumbers").innerHTML = `Het antwoord is: ${resultNumbers}`
    };
}

function add() {
    var number1 = parseInt(document.getElementById("getal1").value);
    var number2 = parseInt(document.getElementById("getal2").value);
    var resultNumbers = number1 + number2;
    document.getElementById("resultNumbers").innerHTML = `Het antwoord is: ${resultNumbers}`;
}

function minus() {
    var number1 = parseInt(document.getElementById("getal1").value);
    var number2 = parseInt(document.getElementById("getal2").value);
    var resultNumbers = number1 - number2;
    document.getElementById("resultNumbers").innerHTML = `Het antwoord is: ${resultNumbers}`;
}