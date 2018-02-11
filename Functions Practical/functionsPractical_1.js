// Write a function that calculates the maximum of two given numbers



function maxOfTwoNumbers (firstNumber, secondNumber) {
    if (typeof firstNumber !== "number" && typeof secondNumber !== "number") {
        console.log("Please input some number!");

    }

    if (firstNumber > secondNumber) {

        return firstNumber + " is greater than " + secondNumber;
    }
    else {
        return secondNumber + " is greater than " + firstNumber
    }
}

console.log(maxOfTwoNumbers(5, 15));