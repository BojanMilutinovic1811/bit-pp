


var message = "good morning"
var i;
for (i = 0; i < 3; i++) {
    console.log(message);
    //----------

    var message = "Good morning!";
    var i = 5;
    for (i = 1; i < 4; i = i + 0.5) {
        console.log(message);
    } console.log(i);

    //-----------------------
    console.log("Done.");
    var i = 0;
    while (i < 10) { i++; } console.log(i);

    //-------------
    //practice
    //1)

    for (var i = 1; i <= 15; i++) {
        if (i % 2 == 0) { console.log(i + "je paran"); }
        else { console.log(i + "je neparan"); }
    }

    //---------
    var j = 0;
    for (var i = 1; i <= 1000; i++) {

        if ((i % 3 == 0) && (i % 5 == 0)) {

            j += i;

        }

    }
    console.log(j);

    //-----------------


    var a = [1, 2, 3, 4, 5, 6, 7];
    var b = 0;
    for (var i in a) { b += a[i]; }
    console.log(b);

    //---------------
    var result = "elementi  su";
    var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
    for (var i in x) { result += " " + x[i] + " " }
    console.log(result);
    //-------------

    var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
    for (i = 0; i < x.length; i++) {
        console.log(x[i]);
    }

    //-----------------
    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < a[i].length; j++) {
            console.log(a[i][j]);
        }
    }

    //------------------
    var sum = 0;
    for (var i = 1; i <= 20; i++) {
        sum += i * i;
    } console.log(sum);

    //--------------
    var average = 0;
    var sum = 0;
    var marks = [80, 77, 88, 95, 68];
    for (var i = 0; i < marks.length; i++) {
        sum += marks[i];
        
    }

    average = sum / (i + 1);
    console.log(average);
    if (average < 60) { console.log("F"); }
    else if (60 <= average && average < 70){console.log("D");}
    else if(70<= average&&average<80){console.log("C");}
    else if(80<=average&&average<90){console.log("B");}
    else if(90<=average &&average<=100){console.log("A");}

    //------------

    for(var i=1;1<=100;i++){
        if(i%3==0){console.log("Fizz");}
    if(i%5==0){console.log("Buzz");}
if((i%3==0)&&(i%5==0))console.log("FizzBuzz");}
    