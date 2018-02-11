// Write a function that checks if a given number is a three digit long number.


function isItThreeDigit (someNumber) {
    if (someNumber < 1000 && someNumber >= 100) {
        return someNumber + " is a three digit number!";
    }
    else {
        return "This isn't a three digit number!";
    }

};

console.log(isItThreeDigit(234));