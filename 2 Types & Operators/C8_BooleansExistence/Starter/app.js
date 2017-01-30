var a;

// goes out to internet and looks for a value

a = 0;

if (a || a === 0) {
    console.log('Something is there');
}
else {
    console.log('Something is not there');
}

//=== is run first because it has a higher precedence than ||

var b;

b=1;

if(b && a) {
    console.log('Both are there');
}
else {
    console.log('not both are there');
}

/*
dynamic typing = you don't tell js what type of data inside variable
*/