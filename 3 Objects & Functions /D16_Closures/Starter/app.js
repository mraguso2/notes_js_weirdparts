/*
JS will make sure a fn always has access to variables that it is supposed 
to have access to
*/

function greet(whattosay) {
    
    return function(name) {
        
        console.log(whattosay + ' ' + name);
    }
    
}

var sayHi = greet('Hi');

sayHi('Mike');

/****
Everytime you call a fn, it gets its own Exec context and any 
fns created inside of it will point to that Exec context
****/

var date = new Date();
var curDay = date.getDay();  

function cleanZoo(animals) {
    var offDay = '';
    if (animals.length === 0 || curDay === 4) {
        offDay = true;
        console.log('You don\'t have to clean any animals today, woohoo!');
    }
    
    return function(zooKeeper) {
        var orderList = [];
        
        if (offDay) {
            return;
        }
        
        for (i = 0; i < animals.length; i++) {
            orderList.push(zooKeeper + ' is scheduled to clean ' + animals[i])
        }
        console.log(orderList);
    }
}

var test = cleanZoo(['tigers', 'birds']);
test('Jimmy John');