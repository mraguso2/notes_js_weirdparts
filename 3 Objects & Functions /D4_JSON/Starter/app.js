var objectliteral = {
    firstname: 'Mary',
    isAProgrammer: true
};

console.log(JSON.stringify(objectliteral));


var jsonValue = JSON.parse('{ "firstname": "Mary", "isAProgrammer": true}');

console.log(jsonValue);

//json is more strict on format, no fns/methods, property names in ""


