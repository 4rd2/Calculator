//Important for DOM function
const container = document.querySelector(".container");
const buttons = container.querySelectorAll(".num");
const result = document.getElementById('result');
//Three variables for basic equations
let currentNumber = 0;
let storedNumber = 0;
let operator = "";


//Basic Math function Methods
//Adds x and y
function calcAdd(x, y) {
    return x + y;
};
//Subtracts x by y
function calcMinus(x, y) {
    return x - y;
};
//Multiplies x and y
function calcTimes(x, y) {
    return x * y;
};
//Divides x by y
function calcDivide(x, y) {
    return x / y;
};
//Initiates the equation and returns the answer
function operate(operator, x, y) {
    let result = 0;
    if (operator === "plus") {
        result = calcAdd(x, y);
    }
    else if (operator === "minus") {
        result = calcMinus(x, y);
    }
    else if (operator === "divide") {
        result = calcDivide(x, y);
    }
    else if (operator === "times") {
        result = calcTimes(x, y);
    }
    return result;
};
//Gives buttons interactability
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        currentNumber = currentNumber * 10 + parseInt(button.innerHTML);
        result.innerHTML = currentNumber;
    });
});
const plus = document.getElementById('plus');
plus.addEventListener("click", () => {
    result.innerHTML = plus.innerHTML;
    storedNumber = currentNumber;
    currentNumber = 0;
    operator = "plus"
    plus.style.boxShadow = "0 px 0px";
});
const minus = document.getElementById('minus');
minus.addEventListener("click", () => {
    result.innerHTML = minus.innerHTML;
    storedNumber = currentNumber;
    currentNumber = 0;
    operator = "minus"
});
const divide = document.getElementById('divide');
divide.addEventListener("click", () => {
    result.innerHTML = divide.innerHTML;
    storedNumber = currentNumber;
    currentNumber = 0;
    operator = "divide"
});
const times = document.getElementById('times');
times.addEventListener("click", () => {
    result.innerHTML = times.innerHTML;
    storedNumber = currentNumber;
    currentNumber = 0;
    operator = "times"
});
const clear = document.getElementById('clear');
clear.addEventListener("click", () => {
    currentNumber = 0
    result.innerHTML = currentNumber;
});

const equals = document.getElementById('equals');
equals.addEventListener("click", () => {
    currentNumber = operate(operator,storedNumber,currentNumber);
    result.innerHTML = currentNumber;
    operator = "";
});