
/*
******************************************************************************************
JavaScript’s Array Filter Function Example 1
****************************************************************************************** /*/

for(var i = 0; i < array.length; i++) {
    if(array.indexOf(array[i]) === i) {
        models.push(array[i]);
    }
}
/*
code piece						meaning
var i = 0						starts at left side of array
i < array.length				finishes at right side of array
i++								increments by one
array.indexOf(array[i]) === i	if value is first instance in array, it’ll match index. okay this means it’s checking if it’s a duplicate
models.push(…)					models must be a list. But what data’s in it? What are their data types? 
I must search the file for “models”. Rinse. Repeat.
*/
var uniqueProducts = array.filter(function(elem, i, array) {
        return array.indexOf(elem) === i;
    }
);

/*
In the Above Example the array.indexof return first occurance of element. */
/*
******************************************************************************************
JavaScript’s Array Filter Function Example 2
****************************************************************************************** /*/

var ages = [32, 33, 12, 40];

function checkAdult(age) {
    return age >= document.getElementById("ageToCheck").value;
}

function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}	


/*
filter()
Use it when: You want to remove unwanted elements based on a condition.

Example: remove duplicate elements from an array.*/

var uniqueArray = array.filter(function(elem, index, array) {
        return array.indexOf(elem) === index;
    }
);

// ES6
// array.filter((elem, index, arr) => arr.indexOf(elem) === index);
/*What it does: Like map() it traverses the array from left to right invoking a callback 
function on each element. The returned value must be a boolean identifying whether 
the element will be kept or discarded. After all elements have been traversed filter() 
returns a new array with all elements that returned true[2].

It has the same parameters as map()

parameters:

array.filter(function(elem, index, array) {
      ...
}, thisArg);*/