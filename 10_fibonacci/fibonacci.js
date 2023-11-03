/*
var i;
var fib = [0, 1]; // Initialize array!

for (i = 2; i <= 10; i++) {
  // Next fibonacci number = previous + one before previous
  // Translated to JavaScript:
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
*/

const fibonacci = function(pos) {
	if (pos < 0) {
		return 'OOPS'
	}
	const fib = [0, 1]
	for (let i = 2; i<=pos; i++) {
		fib[i] = fib[i-2]+fib[i-1]
	}
	return fib[pos]
};

// Do not edit below this line
module.exports = fibonacci;
