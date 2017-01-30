var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

//using this namespace as a container
var english = {
    greetings: {
        basic: 'hello'
}};
var spanish = {};


spanish.greet = 'Hola';

console.log(english);
