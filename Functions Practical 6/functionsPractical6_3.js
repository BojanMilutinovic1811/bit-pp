// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

 
function rotator (someArray, someNumber) {
    var rotatedArray = [];
    var counter = 0;
     for (var i=someNumber; i<someArray.length; i++) {
         rotatedArray[counter] = someArray[i]
         counter++;
     }

     for (var j=0; j<someNumber; j++) {
         rotatedArray[counter] = someArray[j];
         counter++;
     }
     return rotatedArray; 
    }


    console.log(rotator([1,2,3,4,5,6], 2));