// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

const { characterScript } = require("./helpers");

function flatten(array) {
/* Use the reduce method in combination with the concat method to “flatten” an 
array of arrays into a single array that has all the elements of the original arrays.
let arrays = [[1, 2, 3], [4, 5], [6]]; */
let flatArr = array.reduce(function(acc, current){
  return acc.concat(current); // return the previousValue(accumulator)+currentValue, since this is an array, use .concat()
}, []);
return flatArr; //return the array, reduced
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(startVal, test, update, body){
/* Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. Each iteration, 
it first runs the test function on the current loop value and stops if that returns false. 
Then it calls the body function, giving it the current value. Finally, it calls the update
function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.*/
  for(var value = startVal; test(value); value = update(value)){
    body(value); // => for(starting condition; stopping condition; updating condition){code block "body"};
  };
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(collection, test){
/* Implement every as a function that takes an array and a predicate function as 
parameters. */

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


// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
/* Write a function that computes the dominant writing direction in a string of text. 
Remember that each script object has a direction property that can be "ltr" (left to right), 
"rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script 
associated with them. The characterScript and countBy functions defined earlier in the 
chapter are probably useful here. */

//determine orientation of each character in text parameter:
 //see scripts.js for reference to a scripts array of objs with character codes
  //see helpers.js for reference to callback function that takes char codes & returns corresponding script>language object>char direction

//create empty arrays to store ltr chars & rtl chars
let leftRight = [];
let rightLeft = [];
  for(var i = 0; i < text.length; i++){
    let script = characterScript(text.charCodeAt(i)); //script will return language object
//if script returns empty obj, exit
    if(script != null){
//else, push corresponding script to new arrays
      if(script.direction === "ltr"){
        leftRight.push(script);
      }else{
        rightLeft.push(script);
      }
    }
  }
  //tally character codes inside new arrays 
  if(leftRight.length > rightLeft.length){
    return "ltr";
  }else{
    return "rtl";
  }
}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
