// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length, print the error message. 
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]


function insertElement (someElement, somePosition, someArray) {

    if (somePosition > someArray.length) {
        return "Error message!";
    }
    newArray = [];
    counter = 0; 
    for (i=0; i<someArray.length; i++) {
        if (i == somePosition) {
            
            newArray[counter] = someElement; 
            counter++;
            newArray[counter] = someArray[i];
            counter++;
        }
        else {
            newArray[counter] = someArray[i];
            counter ++; 
        }
    }
    return newArray; 
}

console.log(insertElement(78, 2, [2, -2, 33, 12, 5, 8]));

