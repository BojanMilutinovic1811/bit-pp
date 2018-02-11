// Write a program that concatenates two arrays. 
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]


function concatenation (firstArray, secondArray) {

    var newArray = [];
    for (i=0; i<firstArray.length; i++) {
        newArray[i] = firstArray[i];
    }
    for (j=0; j<secondArray.length; j++) {
        newArray[i+j] = secondArray[j];
    }
    return newArray; 
}

console.log(concatenation ([4, 5, 6, 2], [3, 8, 11, 9]));