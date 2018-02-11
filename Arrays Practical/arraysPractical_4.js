// Print all elements with indices divisible by 3 from the array [5, 15, -5, 20, 12, 18, 72, 14, 9].

var numbers = [5, 15, -5, 20, 12, 18, 72, 14, 9];


for (i=0; i<numbers.length; i++)
if (numbers[i]%3 == 0) {
    console.log(numbers[i]);
};