// Write a program that takes as input a city name and outputs the country where the city is. You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. Note that each country must have a different number of cities. Input different from the listed cities should output a message "Please choose a different city".

var inputCity = "Belgrade";

switch (inputCity) {

    case "New York":
    case "Los Angeles":
    case "San Francisco":
        console.log("This city is in the USA!");
        break;
    case "Berlin":
    case "Munich":
    case "Dortmund":
        console.log("This city is in Germany!");
        break;
    case "London":
    case "Manchester":
    case "Leeds":
        console.log("This city is in England!");
        break;
    case "Paris":
    case "Lyon":
    case "Marseille":
        console.log("This city is in France!");
        break;
    case "Belgrade":
    case "Novi Sad":
    case "Nis":
        console.log("This city is in Utopia!");
        break;
    default:
        console.log("Please choose some other city!");
        break;

};