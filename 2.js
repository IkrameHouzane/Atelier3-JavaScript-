function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;  
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
function cumulativeProduct(numbers) {
    return numbers.map(num =>  factorial(num));
}

const numbers = [1, 3, 4];
const result = cumulativeProduct(numbers);
console.log(result);  // [1, 6, 24]



