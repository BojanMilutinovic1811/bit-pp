


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
    else if (60 <= average && average < 70) { console.log("D"); }
    else if (70 <= average && average < 80) { console.log("C"); }
    else if (80 <= average && average < 90) { console.log("B"); }
    else if (90 <= average && average <= 100) { console.log("A"); }

    //------------

    for (var i = 1; 1 <= 100; i++) {
        if (i % 3 == 0) { console.log("Fizz"); }
        if (i % 5 == 0) { console.log("Buzz"); }
        if ((i % 3 == 0) && (i % 5 == 0)) console.log("FizzBuzz");
    }
    //==============

    var a = [1, 2, 6, 4, 55, 7, 8, 55, 9];
    var min = a[0];
    var position = 0;
    for (var i = 1; i < a.length; i++) {
        if (a[i] < min) {
            min = a[i];
            position = i;

        }
    } console.log("minimum is number " + min + " " + "and its last position is " + position);

    //=========================

    var a = [1, 2, 6, 4, 55, 1, 7, 8, 55, 9, 1, 8, 6, 87, 6, 9];
    var min = a[0];
    var position = 0;
    var counter = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] <= min) {
            min = a[i];
            position = i;
            counter++;
        }
        if (counter == 2) break;
    } console.log("minimum is number " + min + " " + "and its last position is " + position);

    //---------------


    var a = [1, 2, 6, 4, 55, 7, 8, 55, 9];
    var min = a[a.length - 1];
    var position = 0;
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] < min) {
            min = a[i];
            position = i;

        }
    } console.log("minimum is number " + min + " " + "and its last position is " + position);

    //----------

    var x = 10;
    var y = 6;

    y = y + x;
    x = y - x;
    y = y - x;
    console.log(x);
    console.log(y);

    //-----------

    var t = 15;
    var result = ""
    for (var i = 1; i <= t; i++) {
        if (i == 1 || i == t) {
            for (var j = 1; j <= t; j++) { result += "*" }
        }
        else {
            for (var s = 1; s <= t; s++) {
                if (s == 1 || s == t) result += "*";
                else result += " "
            }
        } result += "\n"
    }
    console.log(result);

    //-------------------

    var t = 10;
    var result = "";
    
    if (t % 2 == 0) {
        t++;
    }var s = t;
    for (var i = 1; i <= t; i++) {
        for (var j = 1; j <= t; j++) {
            if ((j == i) || (j - i == s - 1) || (i - j == s - 1)) {
                result += "*"
            }
            else { result += " "; }
            s = s - 2;
        } result += "\n"
    } console.log(result);

