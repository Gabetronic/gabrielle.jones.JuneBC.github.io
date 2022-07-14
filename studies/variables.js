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
* while writing code by always declaring variables at the beginning of your work.
*/
// 1. declaration //
// You should declare, or name a variable. The computer will assign this declaration to the data value of undefined. 
var myNameIs; 
console.log(myNameIs); // prints => undefined

// 2. assignment //
// To define the variable, you should assign it to piece of code(a value or expression) or a statement.
myNameIs = "Effia, the Beauty";
console.log(myNameIs); // prints => Effia, the Beauty

// 3. re-assignment //
// If you change your mind, and want to redefine a variable, you need to reassign it to its new value.
myNameIs = "Esi";
console.log(myNameIs); // prints => Esi

// 4. initializing //
// To save time, you can name and define a variable by initializing it. 
var myNameIs = "Maame";
console.log(myNameIs); // prints => Maame

// 5. var keyword //
// You can re-declare & re-assign a variable declared or initialized with the var keyword.
var myAge = 35;
myAge = 36;

var myAge;
console.log(myAge); // prints => 36

// 6. let keyword //
// You can re-assign a variable declared or initialized with the let keyword, but you can't re-declare that variable.
let year = 2022;
year = 2023;
console.log(year); // prints 2023

let year;
console.log(year); // SyntaxError: Identifier 'year' has already been declared

// 7. const keyword //
// You can neither re-declare or re-assign a variable declared or initialized with the const keyword.
const favoriteBand = "Nine Inch Nails";
const favoriteBand; // prints SyntaxError: Identifier 'favoriteBand' has already been declared

favoriteBand = "A Tribe Called Quest"; 
console.log(favoriteBand); // prints TypeError: Assignment to constant variable.

// 8. hoisting //
// Javascript naturally moves all variable declarations to the top of the scope they were created in - it does not move initializations.
myCar = "Nissan";
var myCar; 
console.log(myCar); // prints Nissan

console.log(myNewCar); // prints undefined
var myNewCar = "Fiat";

// If using let or const, Javascript will only hoist variables that have already been declared.

myPhone = "iPhone 12 mini";
let myPhone;
console.log(myPhone); // prints ReferenceError: Cannot access 'myPhone' before initialization

myOldPhone = "OnePlus 8";
const myOldPhone;
console.log(myOldPhone); // prints SyntaxError: Missing initializer in const declaration