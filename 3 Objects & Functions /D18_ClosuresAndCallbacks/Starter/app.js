function sayHiLater() {
    var greeting = 'Hi!';
    
    
    setTimeout(function() { //first class fn and fn expression (fn on the fly)
        
        console.log(greeting);
    }, 3000); //thanks to the closure, setTimeout still has access to greeting after sayHiLater is finished 
}

sayHiLater();


//JQuery uses function expressions and first-class functions!
//    $(button).click(function(){
//    
//});



function tellMeWhenDone(callback) {
    var a = 1000; //some work
    var b = 2000; //some work
    
    callback(); //the 'callback', it runs the function I give it!
}

tellMeWhenDone(function() {
    
    console.log('I\'m done!');
});

tellMeWhenDone(function() {
    
    console.log('All done...');
});

function laterFive(name, callback) {
    console.log('Hey ' + name + ', high five?!');
    
    callback();
}


var fiver = function() {
    setTimeout(function() {
        console.log('HIGH FIVE BRO!!');
    }, 3500);
    
}

laterFive('Mike', fiver);
