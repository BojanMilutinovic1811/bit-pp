// Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form. If there are no occurrences of the character, function should return -1.


function lastOccurence (someString, someNumber) {
    var position;
    
    for (i=0; i<someString.length; i++) {
        if (someNumber == someString[i]) {
            position = i+1; 
        }
    }
    return position; 
}


console.log(lastOccurence("And everything is green and submarine...", "e"));
