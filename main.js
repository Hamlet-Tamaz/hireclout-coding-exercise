// Once finished with the HTML/CSS complete Exercise 1 and Exercise 2 below
// ES6 is available in this pen

/*
Exercise 1

Using native JavaScript methods, implement a set of functions and/or statements that demonstrate the following features

 A) given a string, provide an array of words
 B) given an array of words, provide an array of capitalized words from that array
 C) given an array of words, provide an array of words that are lower case from that array
 D) given an array of words, provide an array of the first letter of each word from that array
 E) given an array of words, and a character (example: 'm'), provide an array of words that begin with that character (case insensitive)
 F) given an array of words, and a character (example: 't'), provide a count of the number of words from that array that begin with that character (case sensitive)
 G) given a string, provide an object where each key is a character in the string and each value is the number of times that character (case insensitive) is present in the string. Example: “Hello there” returns 
{"h":2,"e":3,"l":2,"o":1," ":1,"t":1,"r":1}

To demonstrate these features, use the variable sampleText provided below, and log to the console the feature numeral (A, B, C, etc), followed by the return values of each operation.

For Example: console.log('A', wordsFromString(sampleText));

*/
const sampleText = 'Twas brillig, and the slithy toves Did gyre and gimble in the wabe; All mimsy were the borogoves, And the mome raths outgrabe.';

// Your Exercise 1 Code Below:

console.log('--------------------------');
const arrayOfWords = wordsFromString(sampleText);
// console.log('arrryOfWords: ', arrayOfWords);

/* A */
function wordsFromString(s) {
  return s.split(' ');
}

console.log('A - wordsFromString()', '\n', wordsFromString(sampleText));


/* B */
function upperWordsFromArray(a) {
  /* 
  I misunderstood the assignment when I first did it, then realized when checking and provided the correct return below. However I kept it anyway. The commented out return would return all words from the array in upper case.
  
  return a.map( el => el.toUpperCase() );
  */

  return a.filter(el => el[0] == el[0].toUpperCase());
}

console.log('B - upperWordsFromArray()', '\n', upperWordsFromArray(arrayOfWords));


/* C */
function lowerWordsFromArray(a) {
  /* 
  I misunderstood the assignment when I first did it, then realized when checking and provided the correct return below. However I kept it anyway. The commented out return would return all words from the array in upper case.
  
  return a.map( el => el.toLowerCase() );
  */

  return a.filter(el => el[0] == el[0].toLowerCase());
}

console.log('C - lowerWordsFromArray()', '\n', lowerWordsFromArray(arrayOfWords));


/* D */
function firstLetterFromArray(a) {
  return a.map(el => el[0]);
}

console.log('D - firstLetterFromArray()', '\n', firstLetterFromArray(arrayOfWords));


/* E */
function wordsWithLetterFromArray(a, l) {
  return a.filter(el => el[0].toLowerCase() == l.toLowerCase());
}

console.log('E - wordsWithLetterFromArray()', '\n', wordsWithLetterFromArray(arrayOfWords, 'm'));


/* F */
function countOfWordsWithLetterFromArray(a, l) {
  return a.filter(el => el[0].toLowerCase() == l.toLowerCase()).length;
}

console.log('F - countOfwordsWithLetterFromArray()', '\n', countOfWordsWithLetterFromArray(arrayOfWords, 'm'));


/* G */
function stringToObjectOfCharacterCount(s) {
  let obj = {};
  let a = s.split('');


  a.forEach((el) => {
    let l = el.toLowerCase();

    if (obj[l]) {
      obj[l]++;
    } else {
      obj[l] = 1;
    }
  });

  return obj;
}

console.log('G - stringToObjectOfCharacterCount()', '\n', stringToObjectOfCharacterCount(sampleText));


/*
Exercise 2

Write a function that validates the donation input field in the HTML form, returning true if the value is a number greater than zero, and false for any other input.

Then, bind an anonymous function to the Give Now button, that performs a console.log with the return value of your validator function.

*/

function validateInput(i) {
  return (typeof (i) == 'number' && i > 0);
}

document.querySelector('#giveNow').addEventListener('click', (e) => {
  let input = +document.querySelector('#payment>span.currencyinput>input').value;

  console.log('inupt validation:', validateInput(input));
});

