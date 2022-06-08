// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //

//Iterate over the input array
  for(var i = 0; i < array.length; i++){
//Print each of the array's values
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //

//Iterate over the input array in reverse
  //index variable should start at the end of the array - use length property(by itself, it expresses a number & not the last value, so use - 1)
  for(var i = array.length - 1; i >= 0; i--){
//Print each of the input array's values
    console.log(array[i]);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

//Create a new array literal for output
  let output = [];
//Iterate through input object parameter - use for in loop
  for(var key in object){
//Put every key into new output array - use .push method
    output.push(key);
  }
//Return output array
  return output;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //

//Iterate through input object parameter - use for in loop
  for(var key in object){
//Print every key 
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //

//Create a new array literal for output
let output = [];
//Iterate through input object parameter - use for in loop
  for(var key in object){
//Put every key's value into new output array - use .push method
    //Every value is cited without a literal key name, so - use bracket notation
    output.push(object[key]);
  }
//Return output array
  return output;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
//Iterate through input object parameter - use for in loop
for(var key in object){
  //Print every key's value 
      console.log(object[key]);
    }  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //

//Create new array to store object's values
  let arrayOfValues = [];
//Iterate over object,
  for(var key in object){
//Push all object keys to new array
    arrayOfValues.push(key);
  } 
//Return number that represents the length of array
return arrayOfValues.length; 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //

//Create a new array to hold object's values
  let arrayOfValues = [];
//Iterate over object,
  for(var key in object){
//Push all object's values to new array
    arrayOfValues.push(object[key]);
  }
//Iterate over new array in reverse
  for(var i = arrayOfValues.length - 1; i >= 0; i--){
//Print each array value 
    console.log(arrayOfValues[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
