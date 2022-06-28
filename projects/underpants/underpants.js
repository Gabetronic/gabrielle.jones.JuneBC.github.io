// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

//const { keyBy } = require("lodash");

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/////////// UNDERPANTS/LODOWN PROJECT INSTRUCTIONS //////////
// Step 1: create the function required, in Underpants.js
// Step2: write the documentation in lodown
  //To access lodown: In explorer column<Application Menu, click Open File, delete file up to workspace/, and click lodown
//Grab your newly created function in Underpants, rewrite it as a func declaration, then write a describe of the func, the parameters & what it should return
  //See .each example for guidance 
  //To save changes in lodown: you must type " cd .." + " cd lodown" + regular git commands
   //You must cd back to workspace, then back to your regular repository to save underpants work

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/
_.identity = function(value){
    return value;
};

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string" 
*          - "array" 
*          - "object" 
*          - "undefined" 
*          - "number" 
*          - "boolean" 
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value){
    if(value && typeof value === 'object' && value.constructor === Object){
        return "object";
    }else if(typeof value === "number"){
        return "number";
    }else if(typeof value === "undefined"){
        return "undefined";
    }else if(typeof value === "string"){
        return "string";
    }else if(typeof value === "boolean"){
        return "boolean";
    }else if(Array.isArray(value) === true){
        return "array";
    }else if(typeof value === "function"){
        return "function";
    }else if(value === null){
        return "null";
    }
}

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
**   1) If <array> is not an array, return []
**   2) If <number> is not given or not a number, return just the first element in <array>.
**   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number){

//Create output array
var sliced = [];

//Create a conditional chain, 1st condition says if array input !== an array, return an array literal
        if(Array.isArray(array) === false || number < 0){
            return [];
//2nd condition says if number input == NaN or not given, only return array[i][0]
        }else if(isNaN(number) === true || number === undefined){
            return array[0];
//Else, slice the first <number> of items in the <array>
        }else{
            sliced = array.slice(0, number);
        }   
    
//return output array
return sliced;
}


/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
  //Create output array
var sliced = [];
//Create a conditional chain, 1st condition says if array input !== an array, return an array literal
        if(Array.isArray(array) === false || number < 0){
            return [];
//2nd condition says if number input == NaN or not given, only return last element of array
        }else if(isNaN(number) === true || number === undefined){
            return array[array.length - 1];
//Else, slice the last <number> of items in the <array> -- put a negative in front of the number value
        }else{
            sliced = array.slice(-number);
        }   
//return output array
return sliced;  
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value){
//Iterate through array input
    for(var i = 0; i < array.length; i++){
//Use conditional - if value input matches with an element in array[i] 
  //Return the array's indexed position (remember i = index position)
        if(array[i] === value){
            return i;
        }
    }
//Return -1 if there's no match   
return -1;
}

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
//If array contains the value parameter, return true.  Else, return false - must use ternary operator
return array.includes(value) ? true : false;  
}

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/
_.each = function(collection, callback){
//If collection parameter === array, 
    if(Array.isArray(collection) === true){
//Iterate through array, and
        for(var i = 0; i < collection.length; i++){
//call func parameter for each array element w/ provided args
            callback(collection[i], i, collection);
        }
//else, iterate through collection object parameter, and 
    }else{
        for(var key in collection){
//call func parameter for each object's property w/ provided args
            callback(collection[key], key, collection);
        }
    }
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
//Create an output array literal
let output = [];
let result;
//iterate through array
    for(var i = 0; i < array.length; i++){
//use indexOf() to find indices without the same value
      if(output.indexOf(array[i]) === -1){
//push those elements into output array, and 
        output.push(array[i]);
        }
    }
//return new array
return output;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, test){
//Create an output array literal 
var newArr = [];
//Create a result variable to hold the result of calling the test function
var result;
//Iterate through array
    for(var i = 0; i < array.length; i++){
//Use the result variable
    result = test(array[i], i, array);
//If the result of calling the test func === true,
      if(result === true){
//Push array[i] into the output array
        newArr.push(array[i]);
      }
    }
//return output array
return newArr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, test){
//Create an output array literal 
var newArr = [];
//Create a result variable to hold the result of calling the test function
var result;
//Iterate through array
    for(var i = 0; i < array.length; i++){
//Use the result variable
    result = test(array[i], i, array);
//If the result of calling the test func === false,
      if(result === false){
//Push array[i] into the output array
        newArr.push(array[i]);
      }
    }
//return output array
return newArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function(array, func){
//Create 1 output array & 2 subarray literals;
var output = [];
var subOne = [];
var subTwo = [];
//Create new variable for result of calling the func
var result;
//Iterate through array
    for(var i = 0; i < array.length; i++){
//For each iteration, call the func with the provided arguments
        result = func(array[i], i, array);
//Use if statement to route truthy vs falsy values into subarrays  
        if(result === true){
            subOne.push(array[i]);
        }else{
            subTwo.push(array[i]);
        }
    }
//Push subarrays into output array, & return output arr
output.push(subOne, subTwo);
return output; 
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func){
//Create output array literal & result variable to hold result of calling the func
let output = [];
let result;
//Create a conditional to route the collection to a for loop or a for in loop
    if(Array.isArray(collection) === true){
        for(var i = 0; i < collection.length; i++){
//Call the function with the provided arguments
            result = func(collection[i], i, collection);
//Save the result of the func call into output array, &
            output.push(result);
        }
    }else{
        for(var key in collection){
            result = func(collection[key], key, collection);
            output.push(result);
        }
    }
//return output array
return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(array, prop){
//Create result variable
 
//use map() to list the properties of each array element's prop(the object's values), 
  //and return the values of each key deposited into result variable           
let result = _.map(array, function(object){
    return object[prop];
});
//return result 
return result;
}

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false

*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, test){

//create count variable
var count = 0;
//if test parameter is a function, iterate over each element in collection parameter, 
    if(typeof test === "function"){
        for(var i = 0; i < collection.length; i++){
//invoke test function for each array element
            if(test(collection[i], i, collection) === false){
//if an element is false, add it to count variable
                count += 1; 
            }
        }
    }
//if count has any elements added, return false
    if(count > 0){
      return false;
    }
//if a test function is not provided, 
    if(typeof test === "undefined"){
//iterate over each element in collection,
        for(var i = 0; i < collection.length; i++){
//Use Boolean object as a function, or ! to tell if each element is falsey,
            if(Boolean(collection[i]) === false){
                return false;
            }
        }
    }
//if all other conditions pass, return true
return true;
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, test){
    //create count variable
var count = 0;
var array = Object.keys(collection);
//if test parameter is a function, iterate over each element in collection parameter, 
    if(typeof test === "function"){
        for(var i = 0; i < collection.length || array.length; i++){
//invoke test function for each array element
            if(test(collection[i]) === true){
//if an element is true, add it to count variable
                count += 1; 
            }
        }
    }
//if count has any elements added, return true
    if(count > 0){
      return true;
    }
//if a test function is not provided, 
    if(typeof test === "undefined"){
//iterate over each element in collection,
        for(var i = 0; i < collection.length || array.length; i++){
//Use Boolean object as a function, or ! to tell if each element is truthy,
            if(Boolean(collection[i]) === true){
                return true;
            }
        }
    }
//if all other conditions pass, return false
return false;
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){ // [1, 2, 3, 4]
//Create output variable
var output;
//1st - determine if seed was not passed in
    if(seed === undefined){ // because 0 is falsy, !seed doesn't work){
        output = array[0]; //Think of output as the accumulator value
        for(var i = 1; i < array.length; i++){ //output is already 0, so the loop doesn't have to start at 0
            output = func(output, array[i]/*current*/, i, array); 
            /*invoke act of reducing:
                func(1)
                */
        }
//else it was passed in
    }else{ 
        output = seed; //output = 0
        for(var i = 0; i < array.length; i++){
            output = func(output, array[i], i, array); 
        }
    }
return output;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
