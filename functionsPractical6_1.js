function vowelCount(inputString) {
    var vowelList = 'aeiouAEIOU';
    var vowelCount = 0;

    for (var x = 0; x < inputString.length; x++){
        if(vowelList.indexOf(inputString[x])!== -1){
            vowelCount+=1;
        }
    }
    return vowelCount;
}
console.log(vowelCount("anfhef fjhif fsih"));
