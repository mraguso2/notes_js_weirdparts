//all objs (including fns) have a prototype property
//property is simply a reference to another object

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}


//Dont do this EVERR!!! For Demo Purposes only - perf issues!
john.__proto__ = person; //it will check John first nd then go to person (its prototype) and so forth
console.log(john.getFullName()); //this does not refer to person - it refers to what makes the call
console.log(john.firstname);


var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;

console.log(jane.getFullName());
