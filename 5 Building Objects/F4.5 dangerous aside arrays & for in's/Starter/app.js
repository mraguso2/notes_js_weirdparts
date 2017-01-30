Array.prototype.myCustomFeature = 'cool!'; //this property is now added to all Array prototypes 


var arr = ['John', 'Jane', 'Jim']; //short hand for new Array 

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
} 
//bc arrays are objects and you can iterate down into the prototype
//bc arrays are objects their items are added properties (name: value) pairs

for (var i = 0; i < arr.length; i++) {
    
} //this is the safe way to iterate through an array 