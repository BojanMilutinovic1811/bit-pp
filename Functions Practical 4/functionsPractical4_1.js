// Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no



function isItIn (someElement, someArray) {
    var output; 
    for (i=0; i<someArray.length; i++) {

        if (someElement === someArray[i]) {
            output = "Yes"; 
        }
        else {
            output = "No";
        }
        
    }
    return output; 
}

console.log(isItIn("e", ["a", "b", "c", "d", "e"]));