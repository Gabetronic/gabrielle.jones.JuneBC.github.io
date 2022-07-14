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
// 2. arithmetic operators //
// 3. comparison operators //
// 4. logical operators //
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

// 6. ternary operators //