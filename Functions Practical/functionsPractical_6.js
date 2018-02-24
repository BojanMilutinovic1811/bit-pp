// Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:
// * * * * *
// * * *
// * * * * * * *


function horizontalChart (firstNumber, secondNumber, thirdNumber) {
    var newString = "";
    var star = "*";
    for (var i=0; i<firstNumber; i++) {
        newString+=star;
    }
    newString += "\n";
    
    for (var j=0; j<secondNumber; j++) {
        
        newString += star; 
    }
    newString += "\n";
    for (var k=0; k<thirdNumber; k++) {
        
        newString += star;
    }
    return newString; 
}

console.log(horizontalChart(2,3,4));



