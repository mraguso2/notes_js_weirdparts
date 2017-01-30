'use strict';
/*
Everytime you invoke a function it creates a new exec context
with new memory space
*/


function makeGreeting(language){ //factory function
    
    return function (firstname, lastname) {
        //look up the scope chain for 'language' variable
        if (language === 'en') { 
            console.log('Hello ' + firstname + ' ' + lastname);
        }

        if(language === 'es'){  
            
            console.log('Hola ' + firstname + ' ' + lastname);
        }
        
    };
}


//makeGreeting returns a function that has access to what the language variable was
//at the time that it was created by pointing to that memory space - create fns from other fns

var greetEnglish = makeGreeting('en'); //one exec context here --closure points to an exec context where language = en
var greetSpanish = makeGreeting('es'); //another exec context one here

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');

function orderFood (restType) {
    
    return function (food, drink) {
        if (restType === 'Taco Bell') {
            console.log('Yo querio taco bell. You want ' + food + ' and a ' + drink);
        }
        
        if (restType === 'Burger Joint') {
            console.log('Dem Burger look good. You want ' + food + ' and a ' + drink);
        }
    };
}