////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {  //Set a default parameter to 1
  /*
  "modify your range function to take an optional third argument that indicates 
  the “step” value used when building the array. If no step is given, the elements
   go up by increments of one, corresponding to the old behavior. e.g. (2, 8, 2)=> 2, 4, 6, 8"

  *if x == y, return []
  *step value can also be a negative integer
  *if x == y && if start > end + step = negative, return []
*/

//Create a new output array
let output = [];
//If step parameter > 0, use it to determine the loop increment/decrement
  if(step > 0){
//Determine which integer is greater than the other,
    if(start > end){  // (5, 2, -2) => start, i-2; whatever step is, add it to i. 
//Iterate in reverse through the range of integers between the 2 parameters, & push the range to the output array
        for(var i = start; i >= end; i += step){
           output.push(i); 
        }
    }else if(start < end){  // (2, 8, 2) => start, i+2; (2, 8)
//Iterate in order, & push the range to the output array
        for(var i = start; i <= end; i += step){
            output.push(i);
        }
    }
  }
//Return output array
    return output;  

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
/*"Next, write a sum function that takes an array of numbers and returns the sum 
of these numbers. Run the example program and see whether it does indeed return 55."
* Should evaluate [], [0], negative integers, large arr of nums
*/
let tally = 0;
for(var i = 0; i < array.length; i++){
  tally += array[i];  // [12,3,-2]: 0, 0+12+3+-2
}
return tally;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
/* "write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, 
takes an array as argument and produces a new array that has the same elements in 
the inverse order."  Neither may use the standard reverse method.
* have no side effects
*/
//Create a copy of the array input
let output = [];
//Iterate in reverse:
  for(var i = array.length - 1; i >= 0; i--){
    output.push(array[i]);
  }
return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
/* "The second, reverseArrayInPlace, does what the reverse method does: it 
modifies the array given as argument by reversing its elements.
*/

//Iterate over array.  
 //Use .splice to add the last item of the array using .pop
  for(var i = 0; i < array.length; i++){
    array.splice(i, 0, array.pop());
  }
}
//array.splice(0)

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
//create a rest value and initialize to null
let rest = null;
//iterate backwards
for(var i = array.length -1; i >= 0; i--){
  rest = {value: array[i], rest: rest};
}
return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, array = []) {
//base
if(list.rest === null){
  array.push(list.value);
  return array;
}
//recursion
array.push(list.value);
return listToArray(list.rest, array);
}


////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) { // x = {a: 1, b: 2}, y = {a: 1, b: 2}
/* Create a function that takes any 2 values, return true if the 
values equal each other & false if they don't equal each other.
e.g. console.log({a: 1} === {a: 1}); //prints false b/c copy by reference 
     console.log(deepEqual(1, 2)); // false
     console.log(deepEqual("a", "a"); // true
     console.log(deepEqual(2, 3); // true
     console.log(deepEqual({a: 1} === {a: 1}); // true
*/

// determine if x AND y are both not objects
if(typeof x !== 'object' && typeof y !== 'object'){
    return x == y;
}
// determine if either x OR y is not an object
if(typeof x !== 'object' || typeof y !== 'object'){
    return false;
}// if one is a simple data type & one is a complex type, sooo false!
var xKeys = Object.keys(x); // ["a", "b"]
var yKeys = Object.keys(y); // ["a", "b"]
if(xKeys.length !== yKeys.length){
  return false; // one of the arrays has more elements, soooo false!
}
// iterate through xKeys array using a for loop
for(var i = 0; i < xKeys.length; i++){
  //determine if the current key is NOT included in yKeys,
  //OR the result of invoking deepEqual on the value at those keys is false
  if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){ //deepEqual(x['a'], y['a'])
    return false;
  }
}
return true;
}

//console.log(deepEqual({a: 1, b: 2}, {a: 1, b: 2})); // prints true
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
