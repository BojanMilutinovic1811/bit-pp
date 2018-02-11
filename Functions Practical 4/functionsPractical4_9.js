// Write a program that deletes a given element e from the array a. 
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]


function deleteElement (someElement, someArray) {

        var newArray = [];
        var counter = 0;
    
    for (i=0; i<someArray.length; i++)
    if (someElement == someArray[i]) {
        continue
    }
        else {
            newArray[counter] = someArray[i];
            counter++;
        }
        return newArray; 
    
}


console.log(deleteElement(3, [1,2,3,4,5,3,5,2,3]));