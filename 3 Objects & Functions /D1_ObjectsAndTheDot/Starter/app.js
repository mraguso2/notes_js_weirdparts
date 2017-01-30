var person = new Object();

//Computed Member Access operator "[]"
person['firstname'] = 'Mike'; //called a property - primitive type
person['lastname'] = 'Raguso';

var firstNameProperty = 'firstname';

console.log(person);
console.log(person[firstNameProperty]);

//Member dot notation - dot operator
console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();

person.address.street = '111 Main St.';
person.address.city = 'Raleigh';
person.address.state = 'NC';


console.log(person);