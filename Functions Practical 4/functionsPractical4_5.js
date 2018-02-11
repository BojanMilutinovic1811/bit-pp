// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16


function positiveElements (someArray) {
    var output = 0; 
    for (i=0; i<someArray.length; i++) {
        if (someArray[i] > 0) {
            output += someArray[i];
        }
    }
    return output; 
}

console.log(positiveElements([3, 11, -5, -3, 2]));