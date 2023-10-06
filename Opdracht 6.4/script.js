function calculate() {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    const result = x + y;
    const equation = `${x} + ${y} = ${result}`;
    console.log(equation);
    document.getElementById("calculate").innerHTML = equation;
}

function multiplyByFive() {
    const x = Math.floor(Math.random() * 100);
    const result = x * 5;
    const equation = `${x} * 5 = ${result}`
    console.log(equation);
    document.getElementById("multFive").innerHTML = equation;
}

function calculateMinutes() {
    const x = Math.floor(Math.random() * 10000);
    const result = x / 60;
    const equation = `${x} seconden naar minuten is ${result} minuten.`
    console.log(equation);
    document.getElementById("calcMins").innerHTML = equation;
}