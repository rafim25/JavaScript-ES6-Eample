/*reduce()
Use it when: You want to find a cumulative or concatenated value based on elements across the array.

Example: Sum up orbital rocket launches in 2014.*/

var rockets = [
    { country:'Russia', launches:32 },
    { country:'US', launches:23 },
    { country:'China', launches:16 },
    { country:'Europe(ESA)', launches:7 },
    { country:'India', launches:4 },
    { country:'Japan', launches:3 }
];

var sum = rockets.reduce(function(prevVal, elem) {
    return prevVal + elem.launches;
}, 0);

// ES6
// rockets.reduce((prevVal, elem) => prevVal + elem.launches, 0); 
/*
sum // 85
What it does: Like map() it traverses the array from left to right invoking a callback 
function on each element. The value returned is the cumulative value passed from callback
 to callback. After all elements have been traversed reduce() returns the cumulative value[3].

parameters:

array.reduce(function(prevVal, elem, index, array) {
      ...
}, initialValue);*/