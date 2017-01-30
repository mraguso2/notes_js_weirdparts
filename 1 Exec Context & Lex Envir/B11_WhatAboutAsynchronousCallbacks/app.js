// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    //console.log('ms = ' + ms);
    while (new Date() < ms){}
    //console.log(new Date().getTime());
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);


waitThreeSeconds();
console.log('finished execution');