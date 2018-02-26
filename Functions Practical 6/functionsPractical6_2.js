// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]


function combineArrays (arrayOne, arrayTwo) {

    var combinedArray = [];
    var counter = 0; 
    for (var i = 0; i<arrayOne.length; i++) {

        combinedArray[counter] = arrayOne[i];
        counter++; 
        combinedArray[counter] = arrayTwo[i];
        counter++; 
    }
    return combinedArray; 

}

console.log(combineArrays (["a", "b", "c"], [1,2,3]));