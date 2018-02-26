// Write a function to find the element that occurs most frequently.


function mostFrequent (someArray) {
         
        var newArray = [];

        for (i=0; i<someArray.length; i++) {
               newArray[i] = 0;
            for (j=0; j<someArray.length; j++) {
                if (someArray[i]==someArray[j]) {
                    newArray[i]+=1;
                }
            }
        }
        for (k=0; k<newArray.length; k++)
        var max = newArray[0];
        if (newArray[k]>max) {
            max = newArray[k];
        }
return someArray[max];
}

console.log(mostFrequent([1,2,3,1,22,2,2,2,2,3,1,2,1,1,1,2,1,1]));