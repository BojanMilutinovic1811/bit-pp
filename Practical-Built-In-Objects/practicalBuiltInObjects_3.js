// Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Note: Assume punctuation, numbers and symbols are not included in the passed string.


function alphabeticalOrder(someString) {

    var a = someString;
    var b = a.split('').sort().join('');

    return b;
}

console.log(alphabeticalOrder("aalskdjfalskdflajksdlfkajdlfjk"));