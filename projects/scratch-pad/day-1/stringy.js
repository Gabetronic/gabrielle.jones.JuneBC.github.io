// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
//Create a new string to push output into
var newStr = "";
//Take the input string parameter, and force it to lowercase
newStr = string.toLowerCase();
//Return new string output
return newStr;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//Create a new string for output(later) & assign it to input string. 
var newStr2 = string.toUpperCase();
//Input string should be attached to the toUpperCase method
//return new string 
return newStr2;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
//Create a new string, assigned to input string parameter. 
//Use split method on input string parameter
//Use join method to insert a dash between each string in the array
    let newStr3 = string.split(" ").join("-");
//Return new string forced to lowercase
    return newStr3.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

//Determine if input string begins with input character.  Use conditional statement
//Return "true" if it does, return "false" if it doesn't
//Constraint: case sensitivity
if(string[0].toLowerCase() === char.toLowerCase()){
    return true;
}else{
    return false;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

//Determine if input string ends with input character.  Use conditional statement & string length property
//Return "true" if it does, return "false" if it doesn't
//Constraint: case sensitivity
if(string[string.length - 1].toLowerCase() === char.toLowerCase()){
    return true;
}else{
    return false;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

//Create new string, assigned to string input parameters concatenated
let newStr4 = stringOne + stringTwo;
//return new string 
return newStr4;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

var args = Array.from(arguments);
return args.join("");
//Use join method on the args variable provided.
//Return the args variable

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

//Create a conditional statement that compares the length of the input string parameters
//return the input string that has the longest length
if(stringOne.length > stringTwo.length){
    return stringOne;
}else{
    return stringTwo;
}
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //Create a conditional statement that takes the 2 input string parameters, compares which one is higher in alpha. order(closer to Zed)
    //If first input is higher, return "1". If second is higher, return "-1". If both are equal in alpha. order, return "0".
    if(stringOne === stringTwo){
        return 0;
    }else if(stringOne > stringTwo){
        return -1;
    }else{
        return 1;
    }

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //Create a conditional that compares the input strings. If first string is lower in alpha. order(closer to Alpha), 
    if(stringOne < stringTwo){
        return -1; //return -1
    }else if(stringOne > stringTwo){ //If first string is closer to Zed,
        return 1; //return 1
    }else{
        return 0; //If strings are equal in alpha order, return 0.
    }


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
