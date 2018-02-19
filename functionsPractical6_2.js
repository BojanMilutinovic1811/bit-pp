// Write a function that combines two arrays by alternatingly taking elements.

// [a,b,c], [1,2,3] -> [a,1,b,2,c,3]


var combiner = function (firstArray, secondArray) {
    var thirdArray = [];
    for (i = 0, j = 0; i < firstArray.length; i++) {
        thirdArray[j++] = firstArray[i];
        thirdArray[j++] = secondArray[i];
    } return thirdArray;

}
console.log(combiner(["a", "b", "c", "d"], [1, 2, 3, 4]));