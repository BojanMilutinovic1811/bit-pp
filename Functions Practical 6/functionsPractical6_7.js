// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.



function maxElement (someArray) {

    var max = someArray[0];
    for (i=0; i<someArray.length; i++) {
        if (someArray[i]>max) {
            max = someArray[i];
        }
        if (someArray[i] !== "number") {
            delete someArray[i];
        }
    }
        return max; 
}
console.log(maxElement([1,2,3,4,5,12,3,5,2,6]));

