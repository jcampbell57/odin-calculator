const sum = function(arr) {
	let sum = 0
  for (i=0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};
//console.log(sum([2, 2, 4]))

const subtract = function(arr) {
	let answer = arr[0];
  for (i=1; i < arr.length; i++) {
    answer -= arr[i];
  };
  return answer;
};
//console.log(subtract([2, 2, 4]))

const multiply = function(arr) {
	let answer = 1;
  for (i=0; i < arr.length; i++) {
    answer *= arr[i];
  };
  return answer;
};
//console.log(multiply([2, 2, 4]))

const divide = function(arr) {
	let answer = arr[0];
  for (i=1; i < arr.length; i++) {
    answer /= arr[i];
  };
  return answer;
};
//console.log(divide([16, 4, 1]))

const operate = function(n1, n2, operation) {
  if (operation == sum) {
    let sumArray = [];
    sumArray.push(n1);
    sumArray.push(n2);
    return sum(sumArray);
  } else if (operation == subtract) {
    let subtractArray = [];
    subtractArray.push(n1);
    subtractArray.push(n2);
    return subtract(subtractArray);
  } else if (operation == multiply) {
    let multiplyArray = [];
    multiplyArray.push(n1);
    multiplyArray.push(n2);
    return multiply(multiplyArray);
  } else if (operation == divide) {
    let divideArray = [];
    divideArray.push(n1);
    divideArray.push(n2);
    return divide(divideArray);
  } else {
    return "OOPS";
  }
};
//console.log(operate(16,2,divide))