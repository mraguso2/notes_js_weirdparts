/*
Every time an exec. context is created a 'this' variable is created

Each exec context gets its own 'this' but could be pointing to the same 
address in memory
*/

//'this' will still point to global if simply invoking a fn
function a() {
    console.log(this);
    this.newvariable = 'hello'; //attach to the global 'this' object
}

var b = function () {
    console.log(this);
}

a();

console.log(newvariable); 

b();

var c = {
    name: 'The c object',
    log: function () {    //functions inside objects are methods
        
        var self = this; //set 'by reference' so it will be pointing 
                         //to same address and the object created 'this'
        
        self.name = 'Updated c object'; //can mutate the object that contains method
        console.log(self);
        
        var setname = function(newname) {
            //this.name = newname; //try to mutate name but it would point to the global 
                                  //'this' not the 'this' pointing to the object  
            self.name = newname; //will use outer environment to find what self is
                                 //which is pointing to the object 'this'
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log(); //this is the log method of the object c
/* 
in a case that the method is attached to the object, the this keyword 
becomes the obj that that method is sitting inside of 
*/

//**********

function queue(order) {
    var arr = [];
    
    arr.push(order);
    this.currOrder = order;
    console.log(arr);
}

var order = {
    food: 'Pizza with Pepperoni',
    drink: 'booze',
    dessert: 'cookie'
}

queue({
    food: 'Pizza with Pepperoni',
    drink: 'booze',
    dessert: 'cookie'
});

order.food = 'burger with cheese';

queue(order);
