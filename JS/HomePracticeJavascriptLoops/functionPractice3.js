// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"


function concatenation(stringPart, numPart) {

var concatenated = "";
var isNotAString = "Please input some text here!";
var isNotANumber = "Please input some number here!";


if( typeof stringPart !== "string") {
    return isNotAString;
}

if(typeof numPart !== "number") {
    return isNotANumber;
}

for(i=0; i<numPart; i++){
    concatenated = concatenated + stringPart;  
}
return concatenated;
}
console.log(concatenation("ha",3));








var uvecanaNiska=""
var broj = 3
var niska = "Ha"
for (i=0; i<broj; i++) {
    uvecanaNiska += niska;
}
console.log(uvecanaNiska);