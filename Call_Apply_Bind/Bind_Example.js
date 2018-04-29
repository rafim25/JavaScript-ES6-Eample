/*We use the Bind () method primarily to call a function with the this value set explicitly. It other words, bind () 
allows us to easily set which specific object will be bound to this when a function or
 method is invoked.
******************************************************************************************
1.Example One
****************************************************************************************** /*/
 var user = {
    data :[{name:"T. Woods", age:37},{name:"P. Mickelson", age:43}
    	],
    clickHandler:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
​
        // This line is adding a random person from the data array to the text field​
        $ ("input").val (this.data[randomNum].name + " " + this.data[randomNum].age);
    }
}
​// Assign an eventHandler to the button's click event​
$ ("button").click (user.clickHandler);
/*When you click the button, you get an error because this in the clickHandler () 
method is bound to the button HTML element, since that is the object that the 
clickHandler method is executed on.*/
 $ ("button").click (user.clickHandler.bind(user));
 /*Consider this other way to fix the this value: 
 You can pass an anonymous callback function 
 to the click () method and jQuery will bind this inside the anonymous function to the button object.

******************************************************************************************
2.Example Two
****************************************************************************************** /*/
   var data = [
                {name:"Samantha", age:12},
                {name:"Alexis", age:14}
            ]
​
            var user = {
                // local data variable​
                data    :[
                    {name:"T. Woods", age:37},
                    {name:"P. Mickelson", age:43}
                ],
                showData:function (event) {
                    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
​
                    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
                }
​
            }
            // Assign the showData method of the user object to a variable​
            var showDataVar = user.showData;
            showDataVar (); // Samantha 12 (from the global data array, not from the local data array)​
		 // Bind the showData method to the user object​
            var showDataVar = user.showData.bind (user);
​
            // Now the we get the value from the user object because the this keyword is bound to the user object​
            showDataVar (); // P. Mickelson 43​
/*
******************************************************************************************
JavaScript’s Bind Allows Us to Curry a Function
****************************************************************************************** /*/
    function greet (gender, age, name) {
                // if a male, use Mr., else use Ms.​
                var salutation = gender === "male" ? "Mr. " : "Ms. ";
​
                if (age > 25) {
                    return "Hello, " + salutation + name + ".";
                }
                else {
                    return "Hey, " + name + ".";
                }
            }
        // So we are passing null because we are not using the "this" keyword in our greet function.​
        var greetAnAdultMale = greet.bind (null, "male", 45);
​
        greetAnAdultMale ("John Hartlove"); // "Hello, Mr. John Hartlove."​
​
        var greetAYoungster = greet.bind (null, "", 16);
        greetAYoungster ("Alex"); // "Hey, Alex."​
        greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."​

/*

******************************************************************************************
Because ECMAScript 5 introduced the Bind method, 
it (Bind) is unavailable in IE < 9 and Firefox 3.x. Include this Bind implementation in your code, 
if you are targeting older browsers:
***************************************************************************************** /*/

// Credit to Douglas Crockford for this bind method​
            if (!Function.prototype.bind) {
                Function.prototype.bind = function (oThis) {
                    if (typeof this !== "function") {
                        // closest thing possible to the ECMAScript 5 internal IsCallable function​
                        throw new TypeError ("Function.prototype.bind - what is trying to be bound is not callable");
                    }
​
                    var aArgs = Array.prototype.slice.call (arguments, 1),
                            fToBind = this,
                            fNOP = function () {
                            },
                            fBound = function () {
                                return fToBind.apply (this instanceof fNOP && oThis
                                        ? this​
                                        : oThis,
                                        aArgs.concat (Array.prototype.slice.call (arguments)));
                            };
​
                    fNOP.prototype = this.prototype;
                    fBound.prototype = new fNOP ();
​
                    return fBound;
                };
            }