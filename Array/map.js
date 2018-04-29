/*map()
Use it when: You want to translate/map all elements in an array to another set of values.

Example: convert Fahrenheit temps to Celsius.*/
var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

var celcius = fahrenheit.map(function(elem) {
    return Math.round((elem - 32) * 5 / 9);
}); 

// ES6
// fahrenheit.map(elem => Math.round((elem - 32) * 5 / 9));

celcius //  [-18, 0, 7, 10, 24, 27, 37, 49]

/*What it does: 
Traverses the array from left to right invoking a callback function
 on each element with parameters (below). 
 For each callback the value returned becomes the element in the new array.
  After all elements have been traversed map() returns the new array with all the translated elements[1].

parameters:
array.map(function(elem, index, array) {
      ...
}, thisArg);*/
