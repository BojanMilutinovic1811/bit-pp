function rever(a) {
    var b = a + '';
    var c = b.split('');
    var d = c.reverse();
    var e = d.join('');



    return e;
}
console.log(rever(123));