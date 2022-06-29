/**
* DATATYPES:
* 0. Data types are attributes of values. Javascript uses different types of dynamic(as 
* opposed to static) data, or information that can be manipulated.
* 1. Javascript interacts with values differently: depending on whether a value is primitive or complex, 
* the Javascript engine will direct variables to either copy by value or by reference.
*/

// 1. number //
// Numbers are read by the JS interpreter from left to right, & can be written with or without decimals.
var numberEight = 8;
console.log(numberEight); // prints 8

// 2. string //
// Strings hold text such as sentences, phrases, symbols & numbers.  They must be capped with either quotation 
// marks or backticks.
var fakeWebAddress = "www.wikipedia.com/E$M4Script";
console.log(fakeWebAddress); // prints www.wikipedia.com/E$M4Script

// 3. boolean //
// The Boolean type will always produce a value of either true or false, depending on the data it is testing.
var eitherOr = 10 > 100;
console.log(eitherOr); // prints false

// 4. array //
// Arrays can hold lots of values, or "elements."  Array elements can be accessed using a measurement concept: an  
// index number that starts at 0.  The main benefit of an array is that is can create ordered lists of elements.
// Arrays must be wrapped in brackets.
var myFavoriteThings = ["Raindrops on roses", "whiskers on kittens"];
console.log(myFavoriteThings); // prints ["Raindrops on roses", "whiskers on kittens"]

// 5. object //
// Objects are a lot like arrays in that they can hold a lot of values.  Objects are used to create relationships 
// between values by pairing them together. Key/value pairs inside objects are seperated with a colon, and although
// keys are strings, they are not bound by quotation marks or backticks.
var familyTree = {
   daughter: "Lyra Belacque, aka Lyra Silvertongue",
   mother: "Marisa Coulter",
   father: "Lord Asriel"
}
console.log(familyTree); // prints {daughter: "Lyra Belacque, aka Lyra Silvertongue", mother: "Marisa Coulter", father: "Lord Asriel"}

// 6. function //
// Functions are the action verbs of coding: they use values to produce an action, or actions.
function add(x, y, z){
   var sum = x + y + z;
   return sum;
}
console.log(add(1, 2, 3)); // prints 6

// 7. undefined //
// Undefined is the automatic value assigned to any variable that has not yet been assigned.
var unassigned;
console.log(unassigned); // prints ndefined

// 8. null //
// Null is the automatic value assigned to a unknown or invalid value.
var blackHole = null;
console.log(blackHole); // prints null

// 9. NaN (Not a Number) //
// NaN is the automatic value assigned to any value that is not a real number.
var example = 3 * undefined;
console.log(example); // prints NaN

// 10. Infinity & -Infinity //
// The Infinity & -(Negative) Infinity values represent the concept of a positive or negative infinite number.
var maximumNumber = Infinity; // prints Infinity
var minimumNumber = Number.NEGATIVE_INFINITY; // prints -Infinity

// 11. Primitive vs. Complex Types //
// Data types fall under the category of either primitive or complex.  Primitive types have no methods and are immutable.
// Only objects are considered complex data types: they have methods and are able to be changed; arrays are technically viewed as objects.
var immutable = "Hello";
immutable[0] = "J";
console.log(immutable); // prints Hello

var complexValue = [1, 2, 3];
complexValue.push(4);
console.log(complexValue); // prints [1, 2, 3, 4]


// 12. Copy by Value vs. Copy by Reference //
