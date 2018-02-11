// Write a program that finds the minimum of a given array and prints out its value and index. 
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3


function minimumAndIndex (someArray) {
    var position;
    var min = someArray[0];
    for (i=0; i<someArray.length; i++) {
       
        if (someArray[i] < min) {
            min = someArray[i];
            position = i;
        }   
    }
    return [min, position];
}

console.log(minimumAndIndex([1, 2, 3, 4, -2, 5]));