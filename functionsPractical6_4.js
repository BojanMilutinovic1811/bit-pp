// Write a function that takes a number and returns array of its digits.
 
var returner=function(someNum){
    newArray=[];
        var newString="";
        var result=newString+someNum;
        for(i=0;i<result.length;i++){
            newArray[i]=result[i];
        }
return newArray;
}
console.log(returner(434324));