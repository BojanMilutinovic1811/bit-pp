var rotator = function(someArray, someNumber) {
    var newArray = [];
    var counter = 0;
    for (i=0; i<someArray.length; i++) {
      if(i-someNumber<0){
          newArray[i+someArray.length-someNumber]=someArray[i];
      }
     else{ newArray[i-someNumber]=someArray[i];}
    
    }
   
    return newArray;
    
    }
    
    console.log(rotator([1,2,3,4,5,6], 3));
    