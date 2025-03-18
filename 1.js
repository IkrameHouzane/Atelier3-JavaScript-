const numbers = [1, 7, 10, 9, 8, 2];

// Filtrer les nombres pairs
const filteredNumbers = numbers.filter(num => num % 2 === 0);//[10, 8, 2]

// Trier les nombres pairs par ordre croissant
const sortedNumbers = filteredNumbers.sort((a, b) => a - b);

console.log(sortedNumbers); // [2, 8, 10]