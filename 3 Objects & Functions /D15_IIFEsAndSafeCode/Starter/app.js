// IIFE and safe code 
var firstname = 'John';

console.log(greeting);

(function(global, name) {
    
    var greeting = 'Hello';
    //overwriting any greeting on the global argument to equal 'Hello'
    global.greeting = 'Hello';  
    console.log(greeting + ' ' + name);
    
}(window, firstname)); // IIFE

console.log(greeting);





















