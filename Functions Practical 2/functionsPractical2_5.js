// Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, the function should return -1.


function positionOf (someString, someLetter) {
    
    var position;

    for (i=someString.length; i>=0; i--) {
        if (someLetter == someString[i]) {
            position = i + 1;
        }
    
    }
    return position; 
};

console.log(positionOf("Overhead the albatross hangs motionless upon the air...", "a"));