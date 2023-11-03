const add = function(a, b) {
	return a+b	
};

const subtract = function(a, b) {
	return a-b	
};

const sum = function(nums) {
	return nums.reduce((acc, i) => acc+i, 0)	
};

const multiply = function(nums) {
	return nums.reduce((acc, i) => acc*i, 1)
};

const power = function(a, b) {
	return a**b	
};

const factorial = function(num) {
	if (num < 0) {
		return -1
	}
	if (num === 0) {
		return 1
	}
	return (num * factorial(num-1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
