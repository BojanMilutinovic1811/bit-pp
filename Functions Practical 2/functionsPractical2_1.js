// Write a function to check whether the `input` is a string or not.

// "My random string" -> true
// 12 -> false



function isItAString (input) {
    if ( typeof input != "string") {
        return "Please type some text!";
    }
    else {
        return "This is string!"; 
    }
}

console.log(isItAString("Hello there!"));