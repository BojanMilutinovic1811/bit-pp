// Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

// "My random string" -> ["M", "y", null, "r", "a"]
// "Random" -> ["R", "a", "n", "d", "o", "m"]



function convertToArray (someString) {
    var newArray = [];

    for (i=0; i<someString.length; i++) {
        if (someString[i] == ' ') {
            newArray[i] = null;
            
        } else {
        newArray[i] = someString[i]; 
    }
    }
    return newArray; 

}

console.log(convertToArray("Hello, is there anybody out there..."));