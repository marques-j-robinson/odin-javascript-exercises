const findTheOldest = function(people) {
	const curYear = 2023
	const filterPeople = people.map(p => {
		p.age = p.yearOfDeath ? p.yearOfDeath - p.yearOfBirth : curYear - p.yearOfBirth
		return p
	})
	filterPeople.sort((a, b) => b.age - a.age)
	return filterPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;
