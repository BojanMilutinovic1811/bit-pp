// Write a function to input temperature in Centigrade and convert to Fahrenheit.


function convertCToF (celsiusTemperature) {

    var fahrenheitTemperature = celsiusTemperature * 9/5 +32; 
    return fahrenheitTemperature;
}


console.log(convertCToF(23));