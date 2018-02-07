// Write a function to check whether a string is blank or not.

// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false


function isItBlank (input) {
var outputTrue = "This string is blank!"
var outputFalse = "This isn't a blank string!"

if (input == " ") {

    return outputTrue;
}
else {
    
    return outputFalse;
}
}

console.log(isItBlank(" "));
