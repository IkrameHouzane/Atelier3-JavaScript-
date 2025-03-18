const text = `Salam 
I am ikrame
a software engineering student
ramadan kareem`;

// Diviser le texte en lignes
const lines = text.split('\n');

// Convertir chaque ligne en majuscules et filtrer celles contenant la lettre "I"
const filteredLines = lines
  .map(line => line.toUpperCase()) // Convertir en majuscules
  .filter(line => line.includes('I')); // Filtrer les lignes contenant "I"

// Afficher le résultat du filtre
filteredLines.forEach(line => console.log(line));
