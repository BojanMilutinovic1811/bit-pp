// Write a function that calculates the number of appearances of a letter a in a given string. Modify the function so it calculates the number of both letters a and A.




function numberOfAppearances (someString, someLetter) {
counter = 0; 
for (i=0; i<someString.length; i++) {
    if (someLetter == someString[i]) {
        counter++; 
    }
}
return counter; 
}



console.log(numberOfAppearances("Someteimes i feel so dumb and stupid! I have to practice and study much more!", "e"));