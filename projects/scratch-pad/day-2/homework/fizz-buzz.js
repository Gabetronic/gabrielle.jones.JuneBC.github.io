// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

//Print every number within the range of 1 to 100; use a for loop
    for(var i = 1; i < 101; i++){
   //Make a conditional statement that says if a multiple of 3, print "Fizz" instead of number; use remainder operator 
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
//Conditional also says if a multiple of 5, print "Buzz", & for any numbers that multiples of both, print "FizzBuzz"
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}