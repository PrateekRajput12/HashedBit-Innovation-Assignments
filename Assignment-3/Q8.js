// Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function rds(num) {
    // Function to get the sum of digits
    function sumOfDigits(n) {
        return n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    while (num >= 10) {
        num = sumOfDigits(num);
    }

    return num;
}

let number = 456;
let result = rds(number);

console.log(result); 
