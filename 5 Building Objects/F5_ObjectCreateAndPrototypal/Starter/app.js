// polyfill
if (!Object.create) {
  Object.create = function (o) {
    if (arguments.length > 1) {
      throw new Error('Object.create implementation'
      + ' only accepts the first parameter.');
    }
    function F() {}
    F.prototype = o;
    return new F();
  };
}

//basis object to form all other objs from
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return 'Hi ' + this.firstname; //have to use "this" keyword so that it points to the person object
        //if didn't use the "this" keyword, it would look for firstname in greet function context and then go to the 
        //global execution context and would not find it there
        //objects dont create new execution contexts (var environ, etc.) so you need the 'this'
    }
}


//build a new object and create its prototype 
//create new objs and then create new objs from them pointing to other objs for it's prototype
var john = Object.create(person); //pass it the object you want to create from
john.firstname = 'John'; //override the property values
john.lastname = 'Doe';
console.log(john);

console.log(john.greet()); //has access to the greet function

