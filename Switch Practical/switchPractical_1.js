// Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. For input 1 it should output Monday.

var inputNumber = 16;


switch (inputNumber) {

case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
case 7:
    console.log("Sunday");
    break;
default:
    console.log("Please input some number from 1 to 7.")
    break;
}