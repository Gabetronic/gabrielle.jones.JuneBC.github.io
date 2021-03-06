// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //

/*I: base (= either a string or number)
  O: a function that tests...
  C: n/a
  E: n/a
*/

//Return a function with one input parameter named value
    return function(value){
        //determine if value input is greater than base - using a comparison operator returns a Boolean value, so
        return value > base; 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //

//Return a function with an input parameter named value
    return function(value){
        //function tests if value < base.  Doesn't say more = Boolean value can be returned
        return value < base;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //

//Return a function with one input string parameter
    return function(string){
//Test if the string's first character matches the startsWith parameter
        if(string[0].toLowerCase() !== startsWith.toLowerCase()){
            return false;
        }
//If the conditional isn't false, the opposite value (true) can be returned outside the conditional because it's the only other option
        return true;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
  
//Return a function with an input string parameter
    return function(string){
//If string's last character matches endsWith parameter, return true
        if(string[string.length - 1].toUpperCase() === endsWith.toUpperCase()){
            return true;
        }
//return false otherwise
        return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //

//Create a new array to hold the output 
    let stringsModified = [];
//Iterate over the input array,
    for(var i = 0; i < strings.length; i++){
//Pass each iteration to the function input parameter & push each modification to the new array
        stringsModified.push(modify(strings[i]));
    }
  
//return array modified  
    return stringsModified;  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
//Iterate through array input parameter,
    for(var i = 0; i < strings.length; i++){
//Test each iteration against the function input parameter (test), & if any iteration fails, return false. - use conditional statement
        if(test(strings[i]) === false){
            return false;
        }
    }
//Else return true if all strings pass
return true; 
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
