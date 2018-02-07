// Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function letterCounter (stringPart, letterPart){

    var isNotAString = "Please input some text here!";
    var isNotALetter = "Please input one letter here!";

    if (typeof stringPart !== "string") {
        return isNotAString;
    }
    if (typeof letterPart !== "string" && letterPart.length>1){
        return isNotALetter;
    }
    var counter = 0

    for(i=0;i<stringPart.length;i++)
        if (stringPart[i] == letterPart){
            counter++;
        }
        return counter;

}
console.log(letterCounter ("Hello world!", "l"));



var niska = "Cao";
console.log(niska.length);