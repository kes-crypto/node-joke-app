var math = {};

//gets a rondom number between two numbers

math.getRandomNumber = function(min,max){
    min = typeof(min) == 'number' && min % 1 === 0? min : 0;
    max = typeof(max) == 'number' && max % 1 === 0? max : 0;
    return Math.floor(Math.random()*(max-min+1)+min);
};

//export the library
module.exports = math;