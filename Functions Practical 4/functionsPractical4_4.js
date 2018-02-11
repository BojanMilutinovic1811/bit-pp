// Write a program that finds the second largest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2


function secondLargestNumber (someArray) {
    
    for (i=0; i<someArray.length; i++) {
        var largestNumber = someArray[0];
        var secondLargest = someArray[0];
        if (someArray[i] > largestNumber) {
            largestNumber = someArray[i];
                    }
           else if (largestNumber > secondLargest && secondLargest < someArray[i]) {
                secondLargest = someArray[i];
            }

        
    }
    return secondLargest;
}

console.log(secondLargestNumber([4, 2, 2, -1, 6, 8]));