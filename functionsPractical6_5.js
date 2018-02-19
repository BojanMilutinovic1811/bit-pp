
// 5)Write a program that prints a multiplication table for numbers up to 12.


function multi(num) {
    var result = "";
    for (i = 1; i <= num; i++) {
        for (j = 0; j <= num; j++) {
            result += i * j + "    ";
        }
        result += "\n";
    }
    return result;
}
console.log(multi(12));