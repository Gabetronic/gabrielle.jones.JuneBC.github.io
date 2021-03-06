// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //

//Test value parameter to see if it's an array - use array.isArray() method 
    if(Array.isArray(value) === true){
//Return true if value is an array
        return true;
//Return false otherwise
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //

/*Test value parameter to see if it's a collection object - use .constructor property to see if OG constructor function is an object,
  typeof and AND operators */
if(value && typeof value === 'object' && value.constructor === Object){
//Return true if value is an object
    return true;
//Return false otherwise
}else{
    return false;
}
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //


    if(Array.isArray(value) === true || value && typeof value === 'object' && value.constructor === Object){ 
//Return true if value is an array
        return true;
//Return false otherwise
    }else{
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean" 
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {         //don't forget the instanceof operator
    // YOUR CODE BELOW HERE //
    
//Test input parameter - use conditional chain - for data type
//Return data type as a string

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
    }else if(value instanceof Date){
        return "date";
    }

    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
