
var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2) { //logName is a function object
    
    console.log('Logged: ' + this.getFullName()); // if bind wasn't commented out below = console.log('Logged: ' + person.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    //console.log(this.firstname);
    console.log('---------------');
    
}//.bind(person); --another way to change where the keyword this is pointing

//bind does not call the function - call & apply do

var logPersonName = logName.bind(person); //makes a copy of the logName fn but the this points to the person obj
//logName function is an Object, bind is a method - pointing it to an object, "person"

logPersonName('en');

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es']);


(function(lang1, lang2) { 
    
    console.log('Logged: ' + this.getFullName()); 
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('-------------1--');
    
}).apply(person, ['en', 'es']);




//function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}


console.log(person.getFullName.apply(person2)); //borrowed a method/fn



//function currying
function multiply(a,b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2); //the first parameter will always be a 2 in this copy created from the .bind
/*
bind will copy the fn multiply but you dont care about the 'this' keyword bc you 
are not going to be using it

***
bind does not call the function but when you give the bind parameters, it will set the parameters on the copy that is being made - in the example above = the multiply copy 
will have a = 2

Equivalent to below:
multiply copy would =
function multipleByTwo (b) {
    var a = 2
    return a*b;
}

*/

console.log(multipleByTwo(4));

var multipleByThree = multiply.bind(this, 3);
console.log(multipleByThree(4));




var car = {
    make: 'Jeep',
    model: 'Cherokee',
    year: 2000,
    getFullCar: function(color) {
        var fullCar = this.year + ' ' + color + ' ' + this.make + ' ' + this.model;
        return fullCar;
    }
}

var logCar = function(color) {
    console.log(this.getFullCar(color));
}

logCar.apply(car, ['black']);



var car2 = {
    make: 'Honda',
    model: 'Pilot',
    year: 2011,
}

console.log(car.getFullCar.apply(car2, ['Red']);

