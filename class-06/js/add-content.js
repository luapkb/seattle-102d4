
function createtimegreating () {var today = new Date();
var hourNow = prompt ('what hour is it?');
var greeting; 

if  (hourNow > 18) {
    greeting = 'Good evening!';
}   else if (hourNow > 12) {
    greeting = 'Good afternoon!';
}   else if (hourNow >0) {
    greetiong = 'Good morning!'
}   else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');}