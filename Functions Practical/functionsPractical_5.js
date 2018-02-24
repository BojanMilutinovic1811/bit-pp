 
// Write a function that draws a square of a given size. For example,  if the size of square is 5 the function should draw: 
// *****
// *    *
// *    *
// *    *
// *****



function squareOfStars (someNumber) {

    var newString = "";
    var star = "*";
    for (i=0; i<someNumber; i++) {
        if (i==0 || i == someNumber-1) {
            for (j=0; j<someNumber; j++) {
                newString += star; 
            }
            newString += "\n";
        }
        else {
            for (k=0; k<someNumber; k++) {
                if (k==0 || k==someNumber-1) {
                    newString += star;
                }
                else { newString += " "}

            }
            newString+= "\n";
        }
    }
    return newString; 
}

console.log(squareOfStars(15));