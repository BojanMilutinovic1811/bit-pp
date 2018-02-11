// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.


function isSymmetric (someArray) {

    var output;
    

    for (i=0, j=someArray.length-1; i<someArray.length; i++, j--) {
        
        if (someArray[i] == someArray[j]) {
            output = "The array is symmetric!";
        }
        else {
            output = "The array isn't symmetric!"; 
        }

    }
    return output; 
}

console.log(isSymmetric([3, 4, 12, 8]));