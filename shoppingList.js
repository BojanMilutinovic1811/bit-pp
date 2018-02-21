'use strict';

(function() {
    console.log("Hi!");

    // Product constructor

    function Product(name, price, expirationDate) {

        this.id = (function() {
            var productId;
            var productNum = "";
            for (var i = 0; i < 5; i++) {
                productNum += Math.floor(Math.random() * 10);
            }
            productId = parseInt(productNum);
            return productId;
        })();
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.getInfo = function() {
            return this.name[0] + this.name[this.name.length - 1] + this.id + "," + this.name + "," + this.price;
        }
    }

    // ShoppingBag constructor

    function ShoppingBag() {
        this.list = [];
        //averagePrice method

        this.averagePrice = function() {
            var totalPrice = 0;
            for (var i = 0; i < this.list.length; i++) {
                totalPrice += this.list[i].price;
            }
            return totalPrice / this.list.length;
        }

        //getMostExpensive method

        this.getMostExpensive = function() {
            var maxPrice = this.list[0];
            for (var i = 1; i < this.list.length - 1; i++) {
                if (this.list[i] >= maxPrice) {
                    maxPrice = this.list[i];
                }
            }
            return maxPrice;
        }

        // addProduct method

        this.addProduct = function(Product) {

            this.list.push(Product); //missing date expiration condition

        }

        //totalPrice method

        this.totalPrice = function() {
            var totalPrice = 0;
            for (var i = 0; i < this.list.length; i++) {
                totalPrice += this.list[i].price;
            }
            return totalPrice;
        }
    } //end of shopping bag

    function PaymentCard(status, balance) {
        this.status = status;
        this.balance = balance;
        this.getStatus = function() {
            return this.status;
        }
        this.getBalance = function() {
            return this.balance;
        }

    }

    function checkoutAndBuy(sB, pC) {
        if (pC.balance > sB.totalPrice()) {
            return "there is enough money";
        } else {
            return "there is not enough money";
        }
    }






    var coffee = new Product("Grand kafa", 102.45, new Date(2018, 7, 13));
    var sugar = new Product()
    var jsList = new ShoppingBag();
    jsList.addProduct(coffee);
    var chocolate = new Product("Najlepse zelje", 120.354, new Date(2019, 2, 5));
    jsList.addProduct(chocolate);
    console.log(jsList.list);
    var mastercard = new PaymentCard(true, 100);
    console.log(jsList.totalPrice());
    console.log(checkoutAndBuy(jsList, mastercard));


})();