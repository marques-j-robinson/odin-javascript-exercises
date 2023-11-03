const palindromes = function (words) {
	const filterWords = words
		.toLowerCase()
		.replace(/[^\w]/gi, '')
	let newWords = ''
	for (let i = filterWords.length-1; i >= 0; i--) {
		newWords += filterWords[i]
	}
	return newWords === filterWords
};

// Do not edit below this line
module.exports = palindromes;
