/**
* STRING MANIPULATION:
* 0. Strings are immutable; in other words, they can not be changed once they are written in your program. 
* 1. When used with strings, the addition operator is called the concatenation operator - it is used to concat-
* enate, or merge strings together.  The concatenation can also be used in conjunction with the assignment 
* operator, or bracket notation.
* 2. There are many string methods that can be used to manipulate strings: please visit 
* https://www.w3schools.com/jsref/jsref_obj_string.asp for a full list. 
* This assignment covers only three methods: .split(), .slice(), & .trim()
*/

// 1. string immutability //
// String methods will always return a manipulated copy of the original string
var string = "Hey";
console.log(string.toUpperCase()); // prints HEY 
console.log(string); //prints Hey

// If you want to store the operation performed on a string value, you must create a new variable or 
// reassign the original variable to hold the manipulated copy of the immutable string value
string += " dude!"; 
var similarString = string + " What are those!"; 
console.log(string, similarString); //prints Hey dude! Hey dude! What are those!

// 2. .split() method //


// 3. .splice() method //


// 4. .trim() method //
