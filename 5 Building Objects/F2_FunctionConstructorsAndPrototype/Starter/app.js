function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function() { //adding a method to the protoype property on the function Person
    return this.firstname + ' ' + this.lastname;
}//every fn gets this special property prototype BUT it is not the prototype of the fn -> it is the prototype of the obj built


var john = new Person('John', 'Doe');
console.log(john);

/* using the 'new' keyword to build an obj from the fn will set that 
*  obj's prototype to the fn constructors prototype...
*  john's __proto__ would be equal to Person's prototype property
*/
var jane = new Person('Jane', 'Doe');
console.log(jane);


Person.prototype.getFormalFullName = function() { //adding a method to the protoype property on the function Person
    return this.lastname + ', ' + this.firstname;
}
/* this gives you the power to give access to all the objs created by the fn constructor 
*  added methods or properties by attaching them to the fn constructor prototype property 
*  
*/



console.log(john.getFormalFullName()); 
/* searchs down the prototype chain for the getFormalFullName method
*  it would not find it in the john obj so would go check the prototype
*  or Person.prototype property obj
*/


function Car (make, model, year) {
    console.log(this);
    this.make = make;
    this.model = model;
    this.year = year;
}


var macCar = new Car ('Jeep', 'Cherokee', 2000);
console.log(macCar);
var mikeCar = new Car ('Subaru', 'Forester', 2015);
console.log(mikeCar);

Car.prototype.getFullCar = function (adj) {
    return this.year + ' ' + this.make + ' ' + this.model + ', ' + adj;
}


console.log(macCar.getFullCar('suckas'));
console.log(mikeCar.getFullCar('bitches'));