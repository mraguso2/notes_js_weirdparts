

function a() {
    
    function b() {
        console.log(myVar);
    }
    
    b();
}

var myVar = 1;
a();

/*
Where a function sits determines its outer reference

How to find Outer Reference = "Who 'created' me?" during the 
execution context creation phase
Global is going to create myVar and a

*/