

function hexToRgb(hex) {
    if (hex.length != 6) { return -1; }
    for (i = 0; i < hex.length; i++) {
        switch (hex[i]) {
            case "A":
                hex[i] = 10;
                break;
            case "B":
                hex[i] = 11;
                break;
            case "C":
                hex[i] = 12;
                break;
            case "D":
                hex[i] = 13;
                break;
            case "E":
                hex[i] = 14;
                break;
            case "F":
                hex[i] = 15;
                break;
        }console.log(hex);
    }
    for (i = 0; i < hex.length; i++) {
        if (i % 2 == 0) { hex[i]=hex[i] * 16; }
        else if (i % 2 !=0){ hex[i]=hex[i] * 1; }
    }
sum1=hex[0]+hex[1];
sum2=hex[2]+hex[3];
sum3=hex[4]+hex[5];
return[sum1,sum2,sum3];
}console.log(hexToRgb(["F",3,"A",8,1,1]));