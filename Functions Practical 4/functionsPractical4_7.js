// Write a program that intertwines two arrays. You can assume the arrays are of the same length. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]


function interwine (firstArray, secondArray) {

    var output = [];
    var counter = 0;
    for (i=0; i<firstArray.length; i++) {
        output[counter++] = firstArray[i];
        output[counter++] = secondArray[i];
    }


return output;
}


console.log(interwine([1,2,3], [1,2,3]));
