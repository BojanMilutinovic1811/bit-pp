// Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12.


var inputNumber = 6;

switch (inputNumber) {

    case 3:
    case 4:
    case 5:
        console.log("It's spring!");
        break;
    case 6:
    case 7:
    case 8:
        console.log("It's summer!");
        break;
    case 9:
    case 10:
    case 11:
        console.log("It's fall!");
        break;
    case 12:
    case 1:
    case 2:
        console.log("It's winter!");
        break;
    default:
        console.log("Input must be a number between 1 and 12!");
};