//initialize the object
var Mike = {
    firstname: 'Mike', 
    lastname: 'Raguso',
    address: {
        street: '111 main st.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Mike);

//creating an object on the fly
greet({
    firstname: 'Mary', 
    lastname: 'Doe'
});

Mike.address2 = {
    street: '222 Second St.'
}

Mike.address3 = {
    street: '45 Jumpy Ave.',
    city: 'Old York',
    state: 'Middle-Aged York',
    zip: 91827
}



function yourInfo(person) {
    console.log(person.address3.zip);
}

yourInfo(Mike);