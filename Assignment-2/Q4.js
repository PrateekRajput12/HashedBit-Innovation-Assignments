function sumOfProductsOfDigits(n1, n2) {
    // Convert numbers to strings to handle each digit
    const str1 = n1.toString();
    const str2 = n2.toString();
    
    // Initialize sum
    let sum = 0;
    
    // Iterate over the length of the longer number (to handle differing lengths)
    for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
        // Get digits, default to 0 if out of bounds
        const digit1 = i < str1.length ? parseInt(str1[str1.length - 1 - i]) : 0;
        const digit2 = i < str2.length ? parseInt(str2[str2.length - 1 - i]) : 0;
        
        // Add product of corresponding digits to sum
        sum += digit1 * digit2;
    }
    
    return sum;
}

// Example usage:
const n1 = 6;
const n2 = 34;
const result = sumOfProductsOfDigits(n1, n2);
console.log(`Sum of products of digits for ${n1} and ${n2} is:`, result); // Output: 24
