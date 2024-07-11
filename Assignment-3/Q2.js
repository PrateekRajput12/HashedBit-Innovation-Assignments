// let str = 'I love my India'
// output expected = 'India my love I'
// Write code for this.
let str = 'I love my India';
let wordsArray = str.split(' ');

let reversedWordsArray = wordsArray.reverse();

let reversedStr = reversedWordsArray.join(' ');

console.log(reversedStr);
