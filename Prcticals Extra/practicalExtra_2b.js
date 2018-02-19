var remover2 = function(someArray) {
    for (var i = 0; i < someArray.length; i++) {
        for (var j = 0; j < someArray.length; j++) {

            if (someArray[i] === someArray[j] && j > i) {
                delete someArray[j];
            }
        }

    }
    return someArray;
}

console.log(remover2([8, 13, 8, 9, 12, 8, 1, 1, 4, 13]));