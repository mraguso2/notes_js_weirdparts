var a = 3;
console.log(typeof a); //primitive type number --lowercase

var b = "Hello";
console.log(typeof b);

var c = {};
console.log(typeof c);

var d = [];
console.log(typeof d); // weird!
console.log(Object.prototype.toString.call(d)); // better!

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person);

console.log(typeof undefined); // makes sense
console.log(typeof null); // a bug since, like, forever...

var z = function() { };
console.log(typeof z);

var name = 'mike';
console.log(typeof name);

var stinks = new Object;
console.log(stinks);
console.log( typeof stinks);

function Info() {
    this.cc = 'default'
    this.dd = 'default'
}

console.log(typeof info);

var jimmy = new Info();
jimmy.cc = '12345';
console.log(jimmy);

console.log(jimmy instanceof Info);