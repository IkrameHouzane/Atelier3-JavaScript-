const numbers = [1,7,10,9,8];
// reduce pour trouver le nombre maximum
const maxNumber = numbers.reduce((max, current) => {
    return current > max ? current : max;
  }, numbers[0]); // Initialiser avec le premier élément de la liste
  
  console.log(maxNumber); // va donner 10