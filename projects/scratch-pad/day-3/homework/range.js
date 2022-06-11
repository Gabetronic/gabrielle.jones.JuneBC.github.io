// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //

/*
I: 2 integers
O: an array that begins with the first integer parameter & ends with the second one
C: If second input parameter is greater, return new array in reverse order
E: n/a
*/    

//Create a new output array
    let output = [];
//Determine which integer is greater than the other,
    if(start > end){
//Iterate in reverse through the range of integers between the 2 parameters, & push the range to the output array
        for(var i = start; i >= end; i--){
           output.push(i); 
        }
    }else if(start < end){
//Iterate in order, & push the range to the output array
        for(var i = start; i <= end; i++){
            output.push(i);
        }
    }
//Return output array
    return output;  
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
