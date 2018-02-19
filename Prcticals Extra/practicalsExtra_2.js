// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

var remover = function(someArray) {
    var newArray = [];
    var counter = 0;
    var s = 0;

    for (var i = 0; i < someArray.length; i++) {
        for (var j = 0; j < i; j++) {
            if (someArray[i] == someArray[j]) {
                counter++;
            }

        }
        if (!counter) {
            newArray[s++] = someArray[i];
        }
        counter = 0;
    }
    return newArray;

}
console.log(remover([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));