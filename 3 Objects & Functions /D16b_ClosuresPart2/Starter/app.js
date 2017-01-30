function buildFunctions() {
    
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        
        arr.push(
            function() {
                console.log(i); //console.log is not being executed when it is pushed into the arr
            }
        )
    }
    
    console.log(arr);
    return arr;
}

var fs = buildFunctions();

fs[0](); //when this is executed it is looking for what i equals and at this time i = 3
fs[1]();
fs[2]();


console.log('*****************');


function buildFunctions2() {
    
    var arr = [];
    
    for (var i = 0; i < 3; i++) {
        //let j = i; in ES6
        arr.push(
            (function(j) {
                return function () { 
                    console.log(j);
                } //returning functions so we can execute them later: "fs2[0]();"
            }(i)) //IIFE
        )
    }
    
    //console.log(arr);
    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

