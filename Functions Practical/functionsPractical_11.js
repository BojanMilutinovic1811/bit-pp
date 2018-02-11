

// Write a function that concatenates a given string given number of times. For example, if “abc” and 4 are given values, the function prints out abcabcabcabc. 




function concatenation (someString, someNumber) {
    var newString = ""
    for (i=0; i<someNumber; i++) {

        newString += someString; 
        
    }
    return newString; 
}

console.log(concatenation("Hello!", 5)); 

