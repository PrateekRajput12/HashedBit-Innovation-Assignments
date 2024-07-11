let string = "Hlo Everyone this is Q4 from Assignment 3";


string = string.toLowerCase();


let vc = 0;
let cc = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let char of string) {
    if (vowels.includes(char)) {
        vc++;
    } else if (char >= 'a' && char <= 'z') {
        cc++;
    }
}

console.log("Number of vowels:", vc);
console.log("Number of consonants:", cc);
