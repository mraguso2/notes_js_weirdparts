/*
a statement just does work
an expression just returns a value
*/

//can do this b/c of hoisting - create and then execution phase
greet();

//fn statement - needs a name. Doesn't result in a value until executed
function greet() {  
    console.log('hi');
}


//fn expression
//Dont need a name because have a variable that points to its memory address
var anonGreet = function() {
    console.log('hi');
}


anonGreet();


function log(a) {
//    console.log(a);
    a();
}

log(function() {
    console.log('hi');
});


function run(b) {
    b();
}


var st = function() {
    console.log('I\'m runnning');
}

//run(st);