// Write a function that concatenates a given string n times (default is 1).
// 	"Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"



function concatenate(someString, someNumber) {
    newString = "";

    for (i=0; i<someNumber; i++) {
        newString += someString; 
    }
return newString; 

};

console.log(concatenate("I have become comfortably numb!", 5)); 