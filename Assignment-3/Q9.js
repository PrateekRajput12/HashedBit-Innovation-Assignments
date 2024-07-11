// Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    const words = paragraph.trim().split(/\s+/);
    return words.length;
}

// Example usage:
let paragraph = "This is question 9 from Assignment 3.";
let wordCount = countWords(paragraph);

console.log(wordCount); 
