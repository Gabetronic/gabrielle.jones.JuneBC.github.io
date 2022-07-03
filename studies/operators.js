/**
* OPERATORS:
* 0. To save time, you can use preset instructions to perform specific math & logic-based computations.  These computations are known 
* in Javascript, as operations; they are represented in Javascript as special symbols called operators.  Operators interact with 
* input (values and variables), also known as operands to calculate new output(values).  There are several subgroups of operators used in 
* Javascript: logical, comparison, unary, assignment, ternary, and arithmetic.
*
*Concept explanation + a working code example + comment of what should return/print:
* 1. Assignment
* 2. Arithmetic
* 3. Comparison
* 4. Logical
* 5. Unary(!, typeOf, -)
* 6. Ternary
*/

// 5. unary operators //
/* 
The logical NOT operator reverses the Boolean value of its operand. 
*/
var age = !true;   

console.log(age); //prints => false

/*
Certain expressions are naturally considered false in Javascript: null, NaN, 0, undefined, and string literals.
When the logical NOT operates on these values, they will always return a Boolean value of true.
*/
var nullValue = !null;  

console.log(nullValue); //prints => true

