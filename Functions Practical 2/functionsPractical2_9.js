
//  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

//  "My random string", "_" -> "My_random_string"
//  "My random string", "+" -> "My+random+string"
//  "My random string" -> "My-random-string"


function replaceSpace (someString, separator) {
    var newString = "";
    for (i=0; i<someString.length; i++) {
        if (someString[i] == " ") {
            newString[i] = separator; 
        }
        else {newString[i] = someString[i];}
        return newString;
     }
         
}

console.log(replaceSpace("My random string", "_"));