let array = [1, 2, 5, 6];
let total = array.reduce((sum, current) => sum + current, 0);

const average = total / array.length

console.log(average);