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
