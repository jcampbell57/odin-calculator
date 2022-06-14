//default document elements and values
let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');
let operations = document.querySelectorAll('.operation'); 
let backspace = document.querySelector('#backspace');
let clearAll = document.querySelector('#clearAll');
let exponent = document.querySelector('#exponent');
let percent = document.querySelector('#percent');
let divide = document.querySelector('#divide');
let multiply = document.querySelector('#multiply');
let subtract = document.querySelector('subtract');
let sum = document.querySelector('#sum');
let changeSign = document.querySelector('#changeSign');
let equalSign = document.querySelector('#equalSign');
let displayValue = 0;
let operation = '';
let n1;
let n2;


//displayValue modifiers
numbers.forEach((button) =>{
  button.addEventListener('click', () => {
    if (displayValue == 0) {
      displayValue = "";
    }; 
    displayValue += button.textContent;
    display.textContent = displayValue;
  });
})

backspace.addEventListener('click', () => {
  if (display.textContent.toString().length == 1) {
    displayValue = 0;
    display.textContent = displayValue;        
  } else {
    let stringValue = display.textContent.toString().split('').slice(0, -1).join('');
    displayValue = Number(stringValue);
    display.textContent = displayValue;        
    n1 = displayValue;
    displayValue = 0;
  }
})

clearAll.addEventListener('click', () => {
  n1 = 'f';
  displayValue = 0;
  display.textContent = displayValue;
})

percent.addEventListener('click', () => {
  n1 = 'f';
  displayValue = rounded(display.textContent/100);
  display.textContent = displayValue;
});

changeSign.addEventListener('click', () => {
    n1 = 'f'
    display.textContent = display.textContent / -1
    displayValue = display.textContent;
});

equalSign.addEventListener('click', () => {
  if (isNaN(n1) || operation == '') {
    n1=Number(displayValue);
    displayValue = 0;
  } else {
    n2=Number(displayValue);
    displayValue = 0;
    n1 = operate(n1, n2, operation);
    display.textContent = n1;
    operation = ''
    }
});


//operation selection
operations.forEach((button) =>{
  button.addEventListener('click', (e) => {    
    if (isNaN(n1)) {
      n1=Number(displayValue);
      displayValue = 0;
      operation = e.target.id;
    } else if (operation == '') {
      operation = e.target.id;
    } else {
      n2=Number(displayValue);
      displayValue = 0;
      n1 = operate(n1, n2, operation);
      display.textContent = n1;
      operation = e.target.id;
    } 
  });
})


//operations
const summation = function(n1, n2) {return n1 + n2};
const subtraction = function(n1, n2) {return n1 - n2};
const multiplication = function(n1, n2) {return n1 * n2};
const division = function(n1, n2) {return n1 / n2};
const exponential = function(n1, n2) {return Math.pow(n1, n2)};
const rounded = function(input) {return Math.round(input * 1000) / 1000};

const operate = function(n1, n2, operation) {
  console.log(n1, n2, operation);
  if (operation == 'sum') {
    return rounded(summation(n1, n2));
  } else if (operation == 'subtract') {
    return rounded(subtraction(n1, n2));
  } else if (operation == 'multiply') {
    return rounded(multiplication(n1, n2));
  } else if (operation == 'divide') {
    return rounded(division(n1, n2));
  } else if (operation == 'exponent') {
    return rounded(exponential(n1, n2));
  } else {
    return "OOPS";
  }
};