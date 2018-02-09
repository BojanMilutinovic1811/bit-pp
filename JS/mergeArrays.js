var arrayOne = [2, 35, 23, 52];
var arrayTwo = [234, 4, 4];

function mergeArrays(arrayOne, arrayTwo) {
    var arrayThree = [];

    for (var i = 0; i < arrayOne.length; i++) {
        arrayThree[i] = arrayOne[i];
    }
    
    for (var j = 0; j < arrayTwo.length; j++) {
        arrayThree[i + j] = arrayTwo[j];
    }
    return arrayThree;

}

console.log(mergeArrays(arrayOne, arrayTwo));