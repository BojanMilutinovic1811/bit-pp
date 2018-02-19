// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

// Write a function that counts a number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var areThereOdds = function(someArray) {
    if (someArray.length % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}



var counterOfLess = function(someArray) {
    var counter = 0;
    if (areThereOdds(someArray) === false) {
        return "error";

    } else {
        for (var i = 0; i < someArray.length; i++) {
            if (someArray[i] < someArray[(someArray.length - someArray.length % 2) / 2]) {
                counter++;
            }
        }
        console.log(someArray[(someArray.length - someArray.length % 2) / 2]);
        return counter;
    }
}
console.log(counterOfLess([-1, 8.1, 3, 6, 2.3, 44, 2.11, 1, 3, 2, 1]));