
// 7) Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

function max(arr) {
    var max = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (typeof (arr[i]) == "number") {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
    }return max;
}
console.log(max([-1,2,3,,54,4,"fdfddf",7,-2]));
