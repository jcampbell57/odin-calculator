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
let n1;
let n2;


//display updater
numbers.forEach((button) =>{
  button.addEventListener('click', () => {
    if (displayValue == 0) {
      displayValue = "";
    }; 
    displayValue += button.textContent;
    display.textContent = displayValue;
  });
})


//modifications
backspace.addEventListener('click', () => {
  if (displayValue.toString().length == 1) {
    displayValue = 0;
    display.textContent = displayValue;        
  } else {
    let stringValue = displayValue.toString().split('').slice(0, -1).join('');
    displayValue = Number(stringValue);
    display.textContent = displayValue;        
  }
})

clearAll.addEventListener('click', () => {
  n1 = 0;
  displayValue = 0;
  display.textContent = displayValue;
})

percent.addEventListener('click', () => {
  displayValue = displayValue/100;
  display.textContent = displayValue;
});

//changeSign.addEventListener('click', () => {});

equalSign.addEventListener('click', () => {
  n2=Number(displayValue);
  n1 = operate(n1, n2, operation);
  display.textContent = n1;
});


//operation selection
operations.forEach((button) =>{
  button.addEventListener('click', (e) => {    
    if (isNaN(n1)) {
      n1=Number(displayValue);
      displayValue = 0;
      operation = e.target.id;
      } else {
        n2=Number(displayValue);
        displayValue = 0;
        n1 = operate(n1, n2, operation);
        display.textContent = n1;
      } 
  });
})


//operations
const summation = function(arr) {
	let sum = 0
  for (i=0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};
//console.log(summation([2, 2, 4]))

const subtraction = function(arr) {
	let answer = arr[0];
  for (i=1; i < arr.length; i++) {
    answer -= arr[i];
  };
  return answer;
};
//console.log(subtraction([2, 2, 4]))

const multiplication = function(arr) {
	let answer = 1;
  for (i=0; i < arr.length; i++) {
    answer *= arr[i];
  };
  return answer;
};
//console.log(multiplication([2, 2, 4]))

const division = function(arr) {
	let answer = arr[0];
  for (i=1; i < arr.length; i++) {
    answer /= arr[i];
  };
  return answer;
};
//console.log(division([16, 4, 1]))

const exponential = function(n1, n2) {
  return Math.pow(n1, n2);
};
//console.log(exponent(4,2));

const operate = function(n1, n2, operation) {
  if (operation == 'sum') {
    let sumArray = [];
    sumArray.push(n1);
    sumArray.push(n2);
    return summation(sumArray)
  } else if (operation == 'subtract') {
    let subtractArray = [];
    subtractArray.push(n1);
    subtractArray.push(n2);
    return subtraction(subtractArray);
  } else if (operation == 'multiply') {
    let multiplyArray = [];
    multiplyArray.push(n1);
    multiplyArray.push(n2);
    return multiplication(multiplyArray);
  } else if (operation == 'divide') {
    let divideArray = [];
    divideArray.push(n1);
    divideArray.push(n2);
    return division(divideArray);
  } else if (operation == 'exponent') {
    return exponential(n1, n2);
  } else {
    return "OOPS";
  }
};
//console.log(operate(16,2,divide))