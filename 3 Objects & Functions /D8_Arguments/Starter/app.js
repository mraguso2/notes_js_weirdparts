function greet(firstname, lastname, language) { //hoisting would set up mem for the 3 parameters
    
    language = language || 'en';
    
    if (arguments.length === 0) {
        console.log('Hey Scho, you missin Parameters!!');
        console.log('---------');
        return;
    }
    
	console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments); //the arguments key word is "array-like"
    console.log('arg 0: ' + arguments[0]);
    console.log('--------');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'es');



/* 
arguments keyword will become deprecated and the new way will involve a spread
so the function could be written like this: */

/*
  function greet(firstname, lastname, language, ...others) {
  }
*/

//greet('John', 'Doe', 'es', 'New York', '111 Main St');

/* the ...others will create an array called others and wrap everything beyond 3 parameters 
into it  

*/

function boat(brand, length, color, engineType) {
    
    engineType = engineType || 'Yamaha';
    
    if (arguments.length === 0) {
        console.log('You forgot some stuff there')
        console.log('*****')
        return;
    }
    
    console.log(brand);
    console.log(length);
    console.log(color);
    console.log(engineType);
    console.log(arguments);
    console.log('arg 1 = ' + arguments[1]);
    console.log('****');
} 

