function Person(firstname, lastname) {
    
    console.log(this); // this is pointing to an empty obj in memory once invoked with new
    this.firstname = firstname; //adding prop and parameter
    this.lastname = lastname; //adding prop and parameter
    console.log('This fn is invoked')
    
    //return console.log('This will break the chain') //defeats the purpose of a function constructor bc it will return something rather than the built obj
}

//a function constructor

var john = new Person('john', 'Doe'); //if you return something 
console.log(john);

var jane = new Person('jane', 'Doe'); //if you return something 
console.log(jane);