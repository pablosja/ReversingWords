function reverseWords(chain) {

    let words = chain.split(' ');
    let reverseWords = words.reverse();
    let result = reverseWords.join(' ');

    return result;
}

let text = "I am not perfect, for imperfect nor am I";
let result = reverseWords(text);
console.log(result);