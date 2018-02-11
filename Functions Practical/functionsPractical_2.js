// Write a function that checks if a given number is odd.


function isItOdd (someNumber) {
    if (someNumber%2 == 0) {
        return someNumber + " is odd number!";
    }
    else {
        return someNumber + " is even number!";
    }

};

console.log(isItOdd(5));