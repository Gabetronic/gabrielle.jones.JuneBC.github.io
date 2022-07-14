/**
* CONTROL FLOW:
* 0. If you wanted the Javascript interpreter to execute some code only if a value is true or 
* false, essentially, you need to control the flow of the code's execution.
* 1. If is an operator used to check if a condition is true. 
* 2. Else-if is the next operator in the flow, or chain used to check truth, only after the previous if statement fails.
* 3. Else is the last operator in the flow, used after all other conditional statements are proven false.
* 4. Switch statements are a simpler way to test the value of an expression against multiple cases.
*/

// 1. if statement //
// If checks one condition for truth: if is true, the code between the curly braces notation will run; if it is false,  
// the program will skip the code.
if(3 + 3 === 6){ 
    console.log("This expression is true!"); // prints the string because the condition of 3 + 3 === 6 is true
}

// 2. else-if statement //
// Else if checks a condition for truth only after the previous if statement is determined to be false. It will
// follow the same procedure as the if statement, for running or skipping the code block attached to it.
if("2" === 2){
    console.log("These things are the same."); // program skips this code block because "2" === 2 is false

}else if(2 === 2){
    console.log("No, these two things are the same."); //prints this string because the condition of 2 === 2 is true
}

// 3. else statement //
// Else does not test a condition and runs a code block only after all other conditions have been proven false.
if( 1 === 2){
    console.log("Yes!");
}else if ("two" === 2){
    console.log("Maybe...");
}else{
    console.log("Nope."); //prints this string because all previous conditions tested are false
}

// 4. switch statement //
// Switch statements test the value of an expression against many different cases.  If a case is proven true, a subsequent
// block of code will run, and then a break statement will stop the program from testing the next case.  If all cases
// are proven false, a default case will run a code block, followed by a final break statement.

let age = 36; // the variable age is set to the number value of 36

switch(age){
    case 34:
        console.log("She is 34."); // age != 34; this string will not print
        break;
    case 35: 
    case 36:
    case 37: // cases 35-37 are combined & linked to 1 code block
        console.log("She is between 35 & 37 years old."); // age = 36; this string prints
        break;
    case "idk":
        console.log("I don't know how old she is."); // age != "idk"; this string will not print
        break;
    default:
        console.log("She is of an age[...]"); // a case matched the value, so the default case will never run
        break;
}
