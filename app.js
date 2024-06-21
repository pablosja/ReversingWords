function reverseWords(chain) {

    let words = chain.split(' ');
    let reverseWords = words.reverse();
    let result = reverseWords.join(' ');

    return result;
}

let text = "Crazy? Not me. Are you crazy?";
let result = reverseWords(text);
console.log(result);