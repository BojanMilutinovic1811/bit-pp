var num = 89473523;

function sumOfDigits(n) {

    var sum = 0;
    var lastDigit;
    while (n > 0) {
        lastDigit = n % 10;
        n = (n - lastDigit) / 10;
        sum = sum + lastDigit;

        while (n >= 10) {
            n = (n - n % 10) / 10;
        }
    }
    return sum;
}

console.log(sumOfDigits(num));