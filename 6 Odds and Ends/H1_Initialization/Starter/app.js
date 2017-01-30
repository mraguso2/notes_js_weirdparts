//big initilization
//useful to set up a lot of data

var people = [
    {
        // the 'john' obj
        firstname: 'John',
        lastname: 'Doe',
        addresses: [
            '11 Main St.',
            '22 Third St.'
        ]
    },
    {
        //the 'jan' obj
        firstname: 'Jane',
        lastname: 'Doe',
        addresses: [
            '33 Main St.',
            '44 Third St.'
        ],
        greet: function() {
            return 'Hello!';
        }
    }
]


console.log(people);