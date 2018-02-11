// Write a function that calculates a number of appearances of a given number in a given array.



function numberOfAppearances (someArray, someNumber) {
counter = 0;
    for (i=0; i<someArray.length; i++) {
        if (someNumber == someArray[i]) {
            counter+= 1;
        }
    }
    return counter;         
}



console.log(numberOfAppearances ([1, 2, 3, 423, 234, 1, 5, 3, 1], 1));
