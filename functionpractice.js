//---------Write a function to check whether the "input" is a string or not.

function type(a) {
    if (typeof (a) === "string") { return true; }
    else { return false; }
}
var test = type(1);
console.log(test);

//---------write a function to check whether a string is blank or not

function isBlank(a) {
    if (a === " ") {
        console.log("This is blank")
    }
    else {
        console.log("This isn't blank")
    }
    return

}
isBlank(12);

//---------------------- Write a function that concatenates a given string n times (default is 1)

function concetenate(str, num) {
    if (typeof (str) != "string") {
        return console.log("a must be string");
    }
    var result = "";
    for (var i = 1; i <= num; i++) {
        result += str;
    }
    return result;
}
var test = concetenate("Ha", 4);
console.log(test);

//-----------------Write a function to count the number of letter occurrences in a string


function lettercounter(str, letter) {
    if (typeof (str) != "string") {
        return console.log("a must be string");
    }
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            counter++;
        }
    }
    return counter;
}

var test = lettercounter("dzabulevo desno", "b");
console.log(test);

//-----------------5. Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form. If there are no occurences of the character, the function should return -1.


function firstOccurence(str, letter) {

    if (typeof str != "string") {
        console.log("A must be string");
        return -1;
    }
    var position;
    var humanPosition;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            position = i;
            break;
        }
    }
    if (position === undefined) {
        return -1;
    } else {
        humanPosition = position + 1;
        return humanPosition;
    }
}

var test = firstOccurence("oujtehsf skf", "f");
console.log(test);

//----------------------------------------- 6)last occurence

function lastOccurence(str, letter) {

    if (typeof str != "string") {
        console.log("A must be string");
        return -1;
    }
    var position;
    var humanPosition;
    for (var i = 0; i < str.length; i++) {
        if (str[i] == letter) {
            position = i;
            break;
        }
    }
    if (position === undefined) {
        return -1;
    } else {
        humanPosition = position + 1;
        return humanPosition;
    }
}

var test = lastOccurence("oujtehsf skf", "f");
console.log(test);

//------------- 7) write a function to convert string to an array.Space in string should be represented as "null" in new array

function strToArr(str) {
    var result = "";
    if (typeof str != "string") {
        console.log("A must be string");
        return -1;
    }
    for (var i = 0; i < str.length; i++) {
        if (str[i] ==" ") {
            str[i] = "null";
        }
    }
    for (var i = 0; i <= str.length; i++) {
result+='"'+str[i]+'"'+",";
    } return result;
}
var t=strToArr("sjkakjkfjjf skjfdksks ssjh");
console.log(t);