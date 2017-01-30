var arr = [ //arrays can hold everything
    1, 
    false, 
    {
        name: 'Mike',
        address: '111 Main St.'
    },
    //fn expression, not alone
    function(name) {
        var greeting = 'Hello ';
        console.log(greeting + name);
    },
    'hello'
];

console.log(arr);

arr[3](arr[2].name);

arr[2].name2 = 'Rags';
arr[3](arr[2].name + ' ' + arr[2].name2);