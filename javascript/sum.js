const arr = [1, 2, 3, 4, 5];

function sumArray(array) {
    return array.reduce((sum, currentValue) => sum + currentValue, 0);
}

console.log(sumArray(arr)); // Output: 15