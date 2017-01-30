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

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

for (var prop in john) {
    if (john.hasOwnProperty(prop)) { //can 'reflect' on john obj to see if really it's property
    console.log(prop + ' : ' + john[prop]); //also goes out and gets everything - even stuff in prototype - (prop is a string)
    }
}

var jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname; //this will point to the fn that called it
    }
}

var jim = {
    getfirstname: function() {
        return firstname;
    }
}

var tim = {
    favFood: 'sketti'
}

_.extend(john, jane, jim); //this will combine all of these props into john
console.log(john);




