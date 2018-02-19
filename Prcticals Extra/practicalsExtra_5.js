// Write a function that finds all the elements in a given array less than a given element. 
// Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
// Write a function that expects an array and a callback function that filters out some of the elements. Use functions defined in a) or b) to test it. 

var lessThanGiven = function(someArray, givenElement) {
    var newArray = [];
    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i] < givenElement) {
            newArray[counter++] = someArray[i];
        }
    }
}

var subStr = function(someArray) {
    var newArray = [];
    var counter = 0;

    for (var i = 0; i < someArray.length; i++) {
        if (someArray[i].toLowerCase().substring(0, 3) == "pro") {
            newArray[counter++] = someArray[i];
        }
    }
    return newArray;
}

var callFunction = function(someArray, f) {
    return f(someArray);
}
console.log(callFunction(["proklamacija", "helloWorld", "Profiter"], subStr));