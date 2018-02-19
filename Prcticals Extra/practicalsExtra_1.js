/*Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]
 */
var duplicate = function(someArray) {
    var newArray = [];
    var counter = 0;
    for (var i = 0; i < someArray.length; i++) {
        newArray[counter++] = someArray[i];
        newArray[counter++] = someArray[i];

    }
    return newArray;

}

console.log(duplicate([2, 4, 7, 11, -2, 1]));