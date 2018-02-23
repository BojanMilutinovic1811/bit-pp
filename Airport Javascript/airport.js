'use strict';

(function() {

        console.log("Fasten your seat belts!");

        function Person(name, surname) {
            this.name = name;
            this.surname = surname;
            this.getData = function() {
                return "\"" + this.name + " " + this.surname + "\"";
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
            this.person = Person;
            this.seat = Seat;
            this.getData = function() {

                return this.seat.number + ", " + this.seat.category.toUpperCase() + ", " + this.person.getData();
            }


        }

        //flight constructor function 

        function Flight(relation, date) {
            this.relation = relation;
            this.date = new Date(date);
            this.list = [];

        }

        //airport constructor function

        function Airport() {
            this.name = "Nikola Tesla";
            this.airportFlightsList = [];
        }




        var Bojan = new Person("Bojan", "Milutinovic");
        var seat = new Seat(23, "b");
        var passengerBojan = new Passenger(Bojan, seat);
        console.log(seat.getData());








    }

)();