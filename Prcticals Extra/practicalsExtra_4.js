// Write a function that finds the smallest element of a given array. The function should return an object that contains the smallest value and its last position in the array.



var smallest = function(someArray) {
    var smallest = someArray[0];
    var index;

    for (var i = 0; i < someArray.length; i++) {
        if (smallest >= someArray[i]) {
            smallest = someArray[i];
            index = i;
        }
    }

    function SmallestO() {
        this.smallest = smallest;
        this.index = index;
    }

    return new SmallestO();

}
console.log(smallest([-1, 8.1, 3, 6, 2.3, 44, -2.11]));