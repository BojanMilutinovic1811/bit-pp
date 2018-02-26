// Write a function to find the maximum and minimum elements. Function returns an array.


var maxmin = function (someArray) {

    newArray = [];
    var max = someArray[0]; 
    var min = someArray[0];
    for (i=0; i<someArray.length; i++) {
        if (max<someArray[i]) {
            max = someArray[i];
        }
        if (min>someArray[i]) {
            min = someArray[i]
        }
    }
    newArray = [min, max]; 
    return newArray; 
}

console.log(maxmin([1,2,3,4,9,6,7]));