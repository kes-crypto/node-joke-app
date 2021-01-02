var mathLib = require('./lib/math');
var jokesLib = require('./lib/jokes');

var app = {};

app.config = {
    'timeBetweenJokes' : 4000
};

app.printAJoke = function(){

    //gets all the jokes from library
    var allJokes = jokesLib.allJokes();

    //gets the length of the jokes
    var numbeOfJokes = allJokes.length;

    //Picks a rondom number between one and the number of jokes in the library
    var randomNumber = mathLib.getRandomNumber(1,numbeOfJokes);

    //get the joke at that position in the array
    var selectedJoke = allJokes[randomNumber - 1];

    //send the joke to console
    console.log(selectedJoke);
};
 //function that loops indefinately ensuring the joke prints indefinately
 app.indefiniteLoop = function(){

    //create the interval using config variable defined above
    setInterval(app.printAJoke,app.config.timeBetweenJokes);
 };

 //invoke the loop
 app.indefiniteLoop();