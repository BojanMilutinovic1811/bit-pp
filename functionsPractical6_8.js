// 9)Write a function to find the median element of array.

function median(arr) {

    for (i = 0; i < arr.length; i++) {
        var counterMin = 0;
        var counterMax = 0;
        for (j = 0; j < arr.length; j++) {
            if (arr[j] > arr[i]) { counterMax++; }
            if (arr[j] < arr[i]) { counterMin++; }
        }
        if (counterMax == counterMin) {
            result = arr[i];
            return result;
        }

    }if(!result){return "there is no median"}


}
console.log(median([1, 2, 5, 4, 5]));