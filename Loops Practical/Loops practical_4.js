// Write a program which prints the elements of the following array as a single string.


var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var newString ="";
for (i=0; i<x.length; i++) {
    newString += (x[i] + ", ");
}

console.log(newString);