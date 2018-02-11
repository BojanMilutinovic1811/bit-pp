// Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:
// * * * * *
// * * *
// * * * * * * *




function horizontalChart (numberFirst, numberSecond, numberThird) {
    var star = "*";
    var starRow ="";
    for (i=0; i<arguments.length; i++) {
        
        for (j=0; j<arguments[i]; j++) {
           
            starRow += star; 
            }
            console.log(starRow);
            starRow = "";
            
        }
        
          
    }
    return starRow;
}

console.log(horizontalChart(5, 3, 6));