//IIFE is ran immediately after it is created

//function statement
function greet(name) {
    console.log('Hello ' + name);
}
greet('Mike');

//using a function expression
var greetFunc = function(name) {
    console.log('Hello ' + name);
};
greetFunc('Tim');


//this is an Immediately Invoked Function Expression
var greeting = function (name) {
    
    return ('Hello ' + name);
    
}('Bobby'); 


console.log(greeting); //greeting is a string not a function
//greeting = Hello Bobby

var firstname = 'John';

(function(name, lastname) {
    
    var greeting = 'INside IIFE: Hello '
    console.log (greeting + name + ' ' + lastname);
    
}(firstname, 'Rags')); //classic example of IIFE

//you can invoke the fn expression inside and outside the () -- ()(firstname); or ((firstname));

//order executes a function, returns a string so order is a string not a fn
var order = function (quantity, drink) {    
    return 'Order ' + quantity + ' ' + drink;
}(3, 'beers');


(function (game, winner) {
    console.log('the ' + game + ' winner is: ' + winner);
    
    //return('Returned: the ' + game + ' winner is: ' + winner);
})('World Series', 'Jets');
