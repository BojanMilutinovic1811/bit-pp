// Write a function that takes a number and returns array of its digits.



function arrayOfDigits (someNumber) {
    var newArray = [];
    var newString = "";
    newString += someNumber; 
    for (i=0; i<newString.length; i++) {
        newArray[i] = newString[i];
    }
    return newArray; 
}

console.log(arrayOfDigits(234223));