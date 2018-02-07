// Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false


function isItAString (input) {
var outputTrue = "You've submited the right text!";
var outputFalse = "Please submit a text message!";

    if (typeof input == "string") {
        
        return outputTrue;
    }
    else {
        return outputFalse;
    }
}

console.log(isItAString ("How are you?"));