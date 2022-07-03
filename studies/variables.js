/**
* VARIABLES:
* 0. Variables allow you to store information in your computer program; without variables, every code statement you would make 
* be erased after you typed it.  Variables are also called bindings, due to the nature of what they do: they grasp or hold code, 
* so that they can be referenced, changed or copied later in the life of your program.  
* 1. In order to get a program to hold onto a piece of code, we declare the variable.
* 2. Variables are declared using one of three keywords: var, let, or const.  These keywords behave differently, and 
* therefore make the variables they name behave differently.
* 3. Once a variable is declared, you can define the variable you've created by assigning code to it. 
* 4. To save time, you could perform both actions(declaring & assigning) by initializing a variable. 
* 5. While Javascript interprets your code into binary, it uses an internal rule called hoisting.  Think of hoisting like an  
* invisible pulley that always raises certain types of code to the top of your program environment.  This hoisting
* action has important effects on the way the computer reads your code; therefore, it is good practice to keep hoisting in mind 
* while writing code.
*/
//2. Declaration //
// You should declare, or name a variable. The computer will assign this declaration to the data value of undefined. 
var myNameIs; 
console.log(myNameIs); // prints => undefined

//3. Assignment //
//To define the variable, you should assign it to piece of code(a value or expression) or a statement.
myNameIs = "Effia, the Beauty";
console.log(myNameIs); // prints => Effia, the Beauty

//4. Re-assignment //
//If you change your mind, and want to redefine a variable, you need to reassign it to its new value.
myNameIs = "Esi";
console.log(myNameIs); // prints => Esi

//5. Intializing //
//To save time, you can name and define a variable by initializing it. 
var myNameIs = "Maame";
console.log(myNameIs); // prints => Maame

//6. Var Keyword //
//You can re-declare & re-assign a variable declared or initialized with the var keyword.
var myAge = 35;
myAge = 36;

var myAge;
console.log(myAge); // prints => 36

//7. Let Keyword //
//You can re-assign a variable declared or initialized with the let keyword, but you can't re-declare that variable.
let year = 2022;
year = 2023;
console.log(year); // prints 2023

let year;
console.log(year); // SyntaxError: Identifier 'year' has already been declared


//8. Const Keyword //
//You can neither re-declare or re-assign a variable declared or initialized with the const keyword.
const favoriteBand = "Nine Inch Nails";
const favoriteBand; // SyntaxError: Identifier 'favoriteBand' has already been declared

favoriteBand = "A Tribe Called Quest"; 
console.log(favoriteBand); // TypeError: Assignment to constant variable.

//9. Hoisting //