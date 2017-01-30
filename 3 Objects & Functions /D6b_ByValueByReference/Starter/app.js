'use strict'

/*
All primitive types by value
All objs are by reference
*/


//by value (primitives) copys the value in memory 
var a = 3;
var b;

b = a;

a = 2;

console.log(a);
console.log(b);


//by reference (all objects - including fns) points to the same address/location in memory

var c = {greeting: 'hi'};
var d;

d = c;


c.greeting = 'hello'; //mutate the object c is pointing to 

console.log(c);
console.log(d);


// by reference (even as parameters)

function changeGreeting (obj) {
    obj.greeting = 'Hola'; //mutate the object parameter
} 

changeGreeting(d);

console.log(c);
console.log(d);


// **equals operator sets up new memory space (new address)
c = {greeting: 'howdy'};
console.log(c);
console.log(d);
