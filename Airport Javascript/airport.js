'use strict';

(function() {

        // console.log("Fasten your seat belts!");

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;
            this.getData = function() {
                return  this.name + " " + this.surname;
            }
        }

        // seat constructor function 

        function Seat(number, category) {
            this.number = number;
            this.category = category;
            this.getData = function() {
                return this.number + ", " + this.category.toUpperCase();
            }
            if (typeof this.category == "undefined") {
                this.category = "e";
            } else if (this.category != "b" && this.category != "e") {
                console.log("Please input \"b\" for business or \"e\" for economy!");
                this.category = "";
            }
            if (typeof this.number !== "number") {
                this.number = Math.floor(Math.random() * 89 + 11);
            }
        }

        //passenger constructor function 

        function Passenger(Person, Seat) {
            this.person = Person.getData();
            this.seat = Seat.getData();
            this.getData = function() {

                return Seat.number + ", " + Seat.category.toUpperCase() + ", " + Person.getData();
            }
        }

        //flight constructor function 

        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date).toDateString();
            this.passengersList = [];
            this.addPassenger = function(passenger) {
                   return this.passengersList.push(passenger);
            };
            this.getData = function() {
                var passengers = "";
                
                // ovo mi nije bas najjasnije, treba da pogledam i pitam za for each 
                for (var i = 0; i<this.passengersList.length; i++) {
                    
                    passengers += "\t"+"\t"+"\t"+"\t" + this.passengersList[i].getData() + "\n";
                }
                return this.date + ", " + this.relation +"\n" + passengers; 
                }
        }

        //airport constructor function

        function Airport() {
            this.name = "Nikola Tesla";
            this.airportFlightsList = [];
            this.addFlight = function(flight) {
               return this.airportFlightsList.push(flight);
            }
        }

        createFlight = function(relation, date) {
            return new Flight(relation, date);
        }

        var createPassenger = function(name, surname, seatNum, category) {
            var newPerson = new Person(name, surname);
            var newSeat = new Seat(seatNum, category);
            return new Passenger(newPerson,newSeat);
        }

        var newAirport = new Airport();


        var flightToNewYork = createFlight("Belgrade - New York", "oct 25 2017");
        // console.log(flightToNewYork);
        var flightToBelgrade = createFlight("Barcelona - Belgrade", "nov 11 2017");
        // console.log(flightToBelgrade);

        var passenger1 = createPassenger("John", "Snow", 1, "b");
        var passenger2 = createPassenger("Cersei", "Lannister", 2, "b");
        var passenger3 = createPassenger("Daenerys", "Targaryen", 14);
        var passenger4 = createPassenger("Tyrion", "Lannister");
        // console.log(passenger1, passenger2, passenger3, passenger4);
      
        flightToNewYork.addPassenger(passenger1);
        flightToNewYork.addPassenger(passenger2);
        // console.log(flightToNewYork);
        flightToBelgrade.addPassenger(passenger3);
        flightToBelgrade.addPassenger(passenger4);
        // da li i kako mogu oba istovremeno?????
        // console.log(flightToBelgrade);
        
      
        newAirport.addFlight(flightToNewYork);
        newAirport.addFlight(flightToBelgrade);
        // console.log(newAirport);

// Airport: Nikola Tesla, total passengers: 4
// 	25.10.2017, Belgrade - Paris
// 		1, B, John Snow
// 		2, E, Cersei Lannister
// 	11.11.2017, Barcelona - Belgrade
// 		3, E, Daenerys Targaryen
// 		4, E, Tyrion Lannister

        // console.log(newAirport.getData());


    }

)();