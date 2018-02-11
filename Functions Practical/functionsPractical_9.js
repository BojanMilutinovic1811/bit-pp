// Write a function that calculates the sum of odd elements of a given array. 


function sumOffOdd (someArray) {

    var sum = 0; 

    for (i=0; i<someArray.length; i++) {
        
        if (someArray[i]%2 != 0) {
            sum += someArray[i]; 
        }

    }
    return sum; 

}


console.log(sumOffOdd([1, 2, 3, 4, 5, 6, 7])); 