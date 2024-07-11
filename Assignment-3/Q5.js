// Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function.


function correctfn(sentence, wrong, correct) {
    return sentence.replace(new RegExp(wrong, 'g'), correct);
}

let sentence = "This is a wronng sentence with a wronng word.";
let wrong = "wronng";
let correct = "wrong";
let correctedSentence = correctfn(sentence, wrong, correct);

console.log(correctedSentence);
