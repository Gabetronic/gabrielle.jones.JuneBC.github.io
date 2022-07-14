/**
* OPERATORS:
* 0. To save time, you can use preset instructions to perform specific math & logic-based computations.  These computations are known 
* in Javascript, as operations; they are represented in Javascript as special symbols called operators.  Operators interact with 
* input (values and variables), also known as operands to calculate new output(values).  There are several subgroups of operators used in 
* Javascript: logical, comparison, unary, assignment, ternary, and arithmetic.
*
*Concept explanation + a working code example + comment of what should return/print:
*/
// 1. assignment operators //
// These operators assign a value to their left operand based on the value of their right operand.
var y = 7;
var string = "string";
console.log(y, string); // prints 7 string

// 2. arithmetic operators //
// Takes numerical values as operands, and returns a single number value. 
let multiply = 2 * 2;
console.log(multiply); //prints 4

// 3. comparison operators // 
//Compares operands and returns a Boolean value based on whether or not the comparison is true.
let compare = 3 > 1.5;
console.log(compare); // prints true

// 4. logical operators //
// Logical operators decide if the operands bordering them are logically-related.  They return a Boolean 
// value based on the truthiness of the relationship between operands.
let x = 5;
let maybe = x === x || x == "x";
console.log(maybe); // prints true

// 5. unary operators //
// There are several types of unary operators, or operators that evalute a single operand.  Here are three:
// The unary negation operator sits in front of its operand, and tries to convert it to a negative number.
 var example = -"3";
 console.log(example); // prints -3

// The typeof operator evaluates the data type of its operand, and returns a string of the name of the operand's data type.
 console.log(typeof "help"); // prints string

 // The logical NOT operator reverses the Boolean value of its operand.
var age = !true;   
console.log(age); // prints => false

// Certain expressions are naturally considered false in Javascript: null, NaN, 0, undefined, and string literals.
// When the logical NOT operates on these values, they will always return a Boolean value of true.
var nullValue = !null;  
console.log(nullValue); // prints => true

// 6. ternary operator //
// As the name suggests, the ternary operator evaluates three operands: an expression used to state a condition, 
// an expression used when the condition is true, and an expression executed when the condition is false.
let three = function(value){
   return typeof value === "string"? "This is a string." : "This isn't a string.";
}
console.log(three("goal")); // prints This is a string.