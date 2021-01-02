var fs = require('fs');

//app object

var jokes = {};

//get all the jokes and return them to the client

jokes.allJokes = function(){

    //read the text file with all the jokes
    var fileContents = fs.readFileSync(__dirname+'/jokes.txt', 'utf8');

    //turn the string into array
    var arrayOfJokes = fileContents.split(/\r?\n/);

    //return the array
    return arrayOfJokes;
};

//export the library
module.exports = jokes;