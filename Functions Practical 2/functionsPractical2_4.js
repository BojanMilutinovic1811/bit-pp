// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2



function letterCounter (someString, someLetter) {

    letterCounter = 0; 
    for (i=0; i<someString.length; i++) {
        if (someString[i] == someLetter) {
            letterCounter++; 
        }

    }
    return letterCounter; 
};

console.log(letterCounter("All in all you're just another brick in the wall!", "l"));