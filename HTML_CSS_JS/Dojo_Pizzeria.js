function pizzaOven(crust, sauce, cheeses, toppings){
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza(count, toppingCount){
    var crust = ["deep dish", "hand tossed", "deep dish", "hand tossed", "deep dish", "hand tossed", "deep dish", "hand tossed", "deep dish", "hand tossed"];
    var sauce = ["traditional", "marinara", "white sauce", "BBQ Sauce", "tomato sauce", "traditional", "marinara", "white sauce", "BBQ Sauce", "tomato sauce"];
    var cheeses = ["mozzarella", "feta", "mozzarella", "feta", "mozzarella", "feta", "mozzarella", "feta", "mozzarella", "feta"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "onions", "chicken", "pepperoni", "sausage", "mushrooms", "onions", "chicken"];

    var rand, rand2;
    var tops = [];
    for(var i = 0; i < count; i++){
        rand = Math.random() *10;
        rand = Math.floor(rand);
        console.log(i+1 + "- pizza:");
        for(var j=0;j<toppingCount;j++){
            rand2 = Math.random()*10;
            rand2 = Math.floor(rand2);
            tops.push(toppings[rand2]);
            //console.log(tops);
        }
        p = pizzaOven(crust[rand], sauce[rand], cheeses[rand], tops);
        tops = [];
        console.log(p);
    }

}

var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni","sausage"]);
var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms","olivs", "onions"]);
var p3 = pizzaOven("hand tossed", "white sauce", "mozzarella", ["pepperoni","sausage", "onions"]);
var p4 = pizzaOven("hand tossed","BBQ sauce","mozzarella",["chicken", "onions"]);

//console.log(p1);
//console.log(p2);
//console.log(p3);
//console.log(p4);

var p5 = randomPizza(5, 3);

